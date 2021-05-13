import { IAdvert } from "src/app/models/advert.model";

export namespace AdvertActions {
    export class Fetch {
        static readonly type = '[Advert] Fetch';
        constructor(public pageNumber: number){}
    }
    export class Fetched {
        static readonly type = '[Advert] Fetched';
        constructor(public adverts: Set<IAdvert>){}
    }
    export class Create {
        static readonly type = '[Advert] Create';
        constructor(public advert: IAdvert){}
    }
    export class Created {
        static readonly type = '[Advert] Created';
        constructor(public created: IAdvert){}
    }
    export class Select {
        static readonly type = '[Advert] Select';
        constructor(public id: IAdvert['id']){}
    }
    export class Selected {
        static readonly type = '[Advert] Selected';
        constructor(public advert: IAdvert){}
    }
}