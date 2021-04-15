import { AdvertActions } from 'src/app/store/advert/advert.action';
import { AdvertService } from 'src/app/services/advert.service';
import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { IAdvert } from "src/app/models/advert.model";
import { StoreState } from "../store.state";
import { LoadableStateModel } from '../loadable.state';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

export interface AdvertStateModel extends LoadableStateModel {
    adverts: IAdvert[];
    advert:IAdvert;
    pageNumber: number;
}
@State<AdvertStateModel>({
    name: 'advert',
    defaults: {
        adverts: [],
        advert: null,
        loading: true,
        pageNumber: 1
    }
})
@Injectable()
export class AdvertState extends StoreState<AdvertStateModel>{
    constructor(
        private _advertService: AdvertService,
        private _router: Router
    ){ super(); }

    @Selector()
    static loading(state: LoadableStateModel) {
        return state.loading;
    }

    @Selector()
    static getAdverts(state: AdvertStateModel){
        return state.adverts;
    }

    @Selector()
    static getAdvert(state: AdvertStateModel){
        return state.advert;
    }

    @Action(AdvertActions.Fetch)
    async fetch(ctx: StateContext<AdvertStateModel>,{pageNumber}:AdvertActions.Fetch){
        this._advertService.fetchAdverts(pageNumber)
            .pipe(first())
            .subscribe(
                response => ctx.dispatch(new AdvertActions.Fetched(response)),
                (e) => this.errorHandler(e, ctx))
    }

    @Action(AdvertActions.Fetched)
    async fetched({patchState}:StateContext<AdvertStateModel>, {adverts}:AdvertActions.Fetched){
        patchState({adverts: [...adverts], loading: false});
    }

    @Action(AdvertActions.Create)
    async create(ctx: StateContext<AdvertStateModel>, {advert}: AdvertActions.Create){
        ctx.patchState({loading: true});
        this._advertService.create(advert)
            .pipe(first())
            .subscribe(
                response => ctx.dispatch(new AdvertActions.Created(response)),
                (e) => this.errorHandler(e, ctx))
    }

    @Action(AdvertActions.Created)
    async created(ctx:StateContext<AdvertStateModel>, {created}: AdvertActions.Created){
        const {adverts, advert} = ctx.getState();
        ctx.patchState({loading: false, adverts: [...adverts, created], advert: created});
        this._router.navigate(['adverts', advert.id]);
    }

    @Action(AdvertActions.Select)
    async select(ctx: StateContext<AdvertStateModel>, {id}:AdvertActions.Select){
        ctx.patchState({loading: true});
        this._advertService.getAdvert(id)
            .pipe(first())
            .subscribe(
                response => ctx.dispatch(new AdvertActions.Selected(response)),
                (e) => this.errorHandler(e, ctx))
    }

    @Action(AdvertActions.Selected)
    async selected(ctx: StateContext<AdvertStateModel>, {advert}:AdvertActions.Selected){
        ctx.patchState({loading: false, advert})
    }
}