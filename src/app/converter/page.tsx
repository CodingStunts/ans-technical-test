import CurrencyConverter from "@/components/CurrencyConverter";

import { getCurrencyData } from "@/api";

export const Converter = async () => {
    
    const currenciesData = await getCurrencyData();

    const currenciesList = currenciesData && Object.entries(currenciesData).map(([currency]) => currency)

    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-12">
            {currenciesList && <CurrencyConverter currencies={currenciesList}/>}
        </div>
    );
};

export default Converter;