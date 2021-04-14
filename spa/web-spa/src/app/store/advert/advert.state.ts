import { AdvertService } from 'src/app/services/advert.service';
import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { IAdvert } from "src/app/models/advert.model";
import { StoreState } from "../store.state";
import { LoadableStateModel } from '../loadable.state';
import { AdvertActions } from './advert.action';
import { first } from 'rxjs/operators';

export interface AdvertStateModel extends LoadableStateModel {
    adverts: IAdvert[];
    pageNumber: number;
}
@State<AdvertStateModel>({
    name: 'advert',
    defaults: {
        adverts: [],
        loading: true,
        pageNumber: 1
    }
})
@Injectable()
export class AdvertState extends StoreState<AdvertStateModel>{
    constructor(
        private _advertService: AdvertService
    ){
        super();
    }

    @Selector()
    static loading(state: LoadableStateModel) {
        return state.loading;
    }

    @Selector()
    static getAdverts(state: AdvertStateModel){
        return state.adverts;
    }

    @Action(AdvertActions.Fetch)
    async fetch(ctx: StateContext<AdvertStateModel>,{pageNumber}:AdvertActions.Fetch){
        this._advertService.fetchAdverts(pageNumber)
            .pipe(first())
            .subscribe(
                response => ctx.dispatch(new AdvertActions.Fetched(response)),
                (e) => this.errorHandler(e, ctx)
            )
    }

    @Action(AdvertActions.Fetched)
    async fetched({patchState}:StateContext<AdvertStateModel>, {adverts}:AdvertActions.Fetched){
        patchState({adverts: [...adverts], loading: false});
    }
}