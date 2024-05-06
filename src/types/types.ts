export interface CurrencyDetails {
  "15m": number;
  last: number;
  buy: number;
  sell: number;
  symbol: string;
}

export type Currencies = Record<string, CurrencyDetails>;

export interface ConvertedDetails {
    bitcoinAmount: number,
    currency: string,
    value: string,
};