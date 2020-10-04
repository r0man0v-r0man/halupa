import { IAddress } from './address.model';

export interface IAdvert {
    id: number;
    appUserId: string;
    isActive: boolean;
    address: IAddress;
}