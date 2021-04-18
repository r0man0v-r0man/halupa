import { Injectable } from "@angular/core";
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
        private _localStorageService: LocalStorageService
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