import { Injectable, NgZone } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Action, NgxsOnInit, Selector, State, StateContext } from "@ngxs/store";

import { first } from "rxjs/operators";
import { AuthService } from "src/app/services/auth.service";
import { LocalStorageService } from "src/app/services/local-storage.service";
import { LoadableStateModel } from "../loadable.state";
import { StoreState } from "../store.state";
import { AuthActions } from "./auth.action";

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
        private _route: ActivatedRoute
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
    async login(ctx: StateContext<AuthStateModel>, {payload}: AuthActions.Login){
        ctx.patchState({loading: true});
        this._authService.login(payload)
            .pipe(first())
            .subscribe(
                response => ctx.dispatch(new AuthActions.Logined(response.access_token)),
                (e) => this.errorHandler(e, ctx))
    }

    @Action(AuthActions.Logined)
    async logined({patchState}:StateContext<AuthStateModel>, {token}:AuthActions.Logined){
        patchState({token, loading: false});
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
        patchState({token: null, loading: false});
    }
}