import { AuthActions } from 'src/app/store/auth/auth.action';
import { Injectable, NgZone } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Action, NgxsOnInit, Selector, State, StateContext } from "@ngxs/store";
import { first } from "rxjs/operators";
import { AuthService } from "src/app/services/auth.service";
import { LocalStorageService } from "src/app/services/local-storage.service";
import { LoadableStateModel } from "../loadable.state";
import { StoreState } from "../store.state";
import { OidcSecurityService } from 'angular-auth-oidc-client';

export interface AuthStateModel extends LoadableStateModel{
    token: string;
}
@State<AuthStateModel>({
    name: 'auth',
    defaults:{
        token: null,
        loading: false
    }
})
@Injectable()
export class AuthState extends StoreState<AuthStateModel> implements NgxsOnInit {
    constructor(
        private _authService: AuthService,
        private _localStorageService: LocalStorageService,
        private _zone: NgZone,
        private _router: Router,
        private _route: ActivatedRoute,
        private _oidcSecurityService: OidcSecurityService

    ){ super(); }
    ngxsOnInit({patchState}: StateContext<AuthStateModel>) {
        const token = this._localStorageService.getItem('access_token');
        if (!!token) {
            patchState({token});
        }
    }
    @Selector()
    static token(state: AuthStateModel): string | null {
      return state.token;
    }
  
    @Selector()
    static isAuthenticated(state: AuthStateModel): boolean {
      return !!state.token;
    }

    @Selector()
    static loading(state: LoadableStateModel) {
        return state.loading;
    }

    @Action(AuthActions.Login)
    async login(ctx: StateContext<AuthStateModel>, {}: AuthActions.Login){
        ctx.patchState({loading: true});
        this._oidcSecurityService.authorize();
    }

    @Action(AuthActions.Logined)
    async logined({patchState}:StateContext<AuthStateModel>, {}:AuthActions.Logined){
        patchState({ loading: false});
        const token = this._oidcSecurityService.getToken();
        this._localStorageService.setItem('access_token', token);
        this._zone.run(()=>{
            let returnUrl = this._route.snapshot.queryParamMap.get('returnUrl');
            return this._router.navigate([returnUrl || '/']);
        })
    }

    @Action(AuthActions.Logout)
    async logout(ctx: StateContext<AuthStateModel>, {}:AuthActions.Logout){
        ctx.patchState({loading: true});
        ctx.dispatch(new AuthActions.Logouted())
    }
    
    @Action(AuthActions.Logouted)
    async logouted({patchState}:StateContext<AuthStateModel>, {}:AuthActions.Logouted){
        this._localStorageService.removeItem('access_token');
        this._oidcSecurityService.logoff()
        patchState({token: null, loading: false});
    }

    @Action(AuthActions.Register)
    async register(ctx: StateContext<AuthStateModel>, {payload}: AuthActions.Register){
        ctx.patchState({loading: true});
        this._authService.registerUser(payload)
            .pipe(first())
            .subscribe(
                response => {
                    if(response) ctx.dispatch(new AuthActions.Registered())
                },
                (e) => this.errorHandler(e, ctx))
    }

    @Action(AuthActions.Registered)
    async registered({patchState}: StateContext<AuthStateModel>, {}: AuthActions.Registered){
        patchState({loading: true});
        this._zone.run(() => {
            return this._router.navigate(['/login']);
        })
    }
}