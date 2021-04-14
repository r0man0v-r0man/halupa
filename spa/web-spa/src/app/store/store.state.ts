import {StateContext} from '@ngxs/store';

// all state should be inherite this state
export abstract class StoreState<T> {

  protected constructor() {}

  protected errorHandler(e: any, ctx: StateContext<T>) {
    console.error(e);
    alert(e.message);
    ctx.patchState({loading: false} as unknown as T);
  }
}