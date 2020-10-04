import { IAddress } from './address.model';
import { IImage } from './image.model';

export interface IAdvert {
    id: number;
    appUserId: string;
    isActive: boolean;
    address: IAddress;
    images: IImage[];
}