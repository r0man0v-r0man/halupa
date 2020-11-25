export interface IPrice{
    currency: CurrencyType;
    value: number;
}
export interface IPriceView extends IPrice {
    disabled: boolean;
}
export enum CurrencyType {
    USD = 0,
    RUB = 1,
    BYN = 2,
    EUR = 3
}