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
