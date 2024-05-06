import { Currencies } from "./types/types";

export const getCurrencyData = async () => {
    try {
        const res = await fetch("https://blockchain.info/ticker");
        const currenciesData: Currencies = await res.json();
        return currenciesData;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const getConversionToBitcoin = async (currency: string, value: string) => {
    try {
      const res = await fetch(`https://blockchain.info/tobtc?currency=${currency}&value=${value}`);
      const convertedAmount: number = await res.json();
      return {
        bitcoinAmount: convertedAmount,
        currency: currency,
        value: value,
      };
    } catch (error) {
      console.log(error);
    }
  };