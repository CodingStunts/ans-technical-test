import { CurrencyDetails } from "@/types/types";

interface Props {
    currency: string,
    currencyData: CurrencyDetails,
};

export const CurrencyDisplay = ({currency, currencyData}: Props) => {

    return (
      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
        <h3 className="text-2xl">{currency}</h3>
        <p>{`${currencyData.symbol} ${currencyData.last}`}</p>
      </div>
  );
};

export default CurrencyDisplay;