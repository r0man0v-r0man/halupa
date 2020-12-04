import { NzUploadFile } from 'ng-zorro-antd/upload';
import { IAddress } from './address.model';
import { IArea } from './area.model';
import { IContact } from './contacts.model';
import { IDescription } from './description.model';
import { IPrice } from './price.model';

export interface IAdvert {
    id: number;
    appUserId: string;
    isActive: boolean;
    address: IAddress;
    images: NzUploadFile[];
    prices: IPrice[],
    description: IDescription,
    contacts: IContact[],
    areas: IArea[],
    created: any
}