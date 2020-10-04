import { NzUploadFile } from 'ng-zorro-antd/upload';
import { IAddress } from './address.model';

export interface IAdvert {
    id: number;
    appUserId: string;
    isActive: boolean;
    address: IAddress;
    images: NzUploadFile[];
}