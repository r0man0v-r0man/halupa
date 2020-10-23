export interface IAddress{
    id: number;
    geoObjectId: number;
    geoObject: IGeoObject;
}
export interface IGeoObject{
    id:  number;
    name: string;
    description: string;
    boundedById: number;
    boundedBy: IBoundedBy;
    metaDataPropertyId: number;
    metaDataProperty: IMetaDataProperty;
    pointId: number;
    point: IPoint;
}
export interface IBoundedBy{
    id: number;
    envelopeId: number;
    envelope: IEnvelope;
}
export interface IMetaDataProperty{
    id: number;
    geocoderMetaDataId: number;
    geocoderMetaData: IGeocoderMetaData;
}
export interface IGeocoderMetaData{
    id: number;
    kind: string;
    text: string;
    precision: string;
    address: IAddressInfo;
}
export interface IAddressInfo{
    id: number;
    country_code: string;
    postal_code: string;
    formatted: string;
    components: IComponent[];
}
export interface IComponent{
    id: number;
    kind: string;
    name: string;
}
export interface IEnvelope{
    id: number;
    lowerCorner: string;
    upperCorner: string;
}
export interface IPoint{
    id: number;
    pos: string;
}