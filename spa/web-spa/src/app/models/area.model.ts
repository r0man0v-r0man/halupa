export interface IArea{
    kind: AreaType;
    value: number;
}
export enum AreaType {
    HOUSEFLAT = 0,
    SECTOR = 1
}   