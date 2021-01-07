import { IAddress } from './address.model';
import { IArea } from './area.model';
import { IContact } from './contacts.model';
import { IDescription } from './description.model';
import { IPrice } from './price.model';
import { IUploadImage } from './uploadImage';

export interface IAdvert {
    id: number;
    appUserId: string;
    isActive: boolean;
    yandexAddress: IAddress;
    images: IUploadImage[];
    prices: IPrice[],
    description: IDescription,
    contacts: IContact[],
    areas: IArea[],
    created: any
}