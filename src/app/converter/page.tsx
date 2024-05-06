import CurrencyConverter from "@/components/CurrencyConverter";

import { getCurrencyData } from "@/api";

export const Converter = async () => {
    
    const currenciesData = await getCurrencyData();

    return (
        <div>
        </div>
    );
};

export default Converter;