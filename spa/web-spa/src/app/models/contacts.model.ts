export interface IContact{
    value: string;
    kind: ContactType
}
export enum ContactType {
    PHONE = 0,
    EMAIL = 1
}