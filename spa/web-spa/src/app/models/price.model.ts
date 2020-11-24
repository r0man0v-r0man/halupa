export interface IPrice{
    currency: CurrencyType;
    value: number;
}
export enum CurrencyType {
    USD = 0,
    RUB = 1,
    BYN = 2,
    EUR = 3
}