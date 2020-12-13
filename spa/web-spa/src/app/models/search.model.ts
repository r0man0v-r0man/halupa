import {IAdvert} from "./advert.model";

export interface ISearch{
    locality: string;
    pageNumber: number;
}
export interface ISearchResult {
    searchRequest: string; 
    advertsByLocality: IAdvert[]; 
    totalCount?: number
}