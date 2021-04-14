import { IAdvert } from "src/app/models/advert.model";

export namespace AdvertActions {
    export class Fetch {
        static readonly type = '[Advert] Fetch';
        constructor(public pageNumber: number){}
    }
    export class Fetched {
        static readonly type = '[Advert] Fetched';
        constructor(public adverts: IAdvert[]){}
    }
}