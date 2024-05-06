"use client";

import { useState } from "react";

import { ConvertedDetails } from "@/types/types";
import { getConversionToBitcoin } from "@/api";

interface Props {
  currencies: string[];
}

export const CurrencyConverter = ({ currencies }: Props) => {
  const [selectedCurrency, setSelectedCurrency] = useState<string>("");
  const [conversionAmount, setConversionAmount] = useState<string>("");
  const [convertedDetails, setConvertedDetails] = useState<ConvertedDetails>();

  const handleSubmit = async () => {
    const bitcoinConversionDetails = await getConversionToBitcoin(
      selectedCurrency,
      conversionAmount
    );
    setConvertedDetails(bitcoinConversionDetails);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-3">
        <h1 className="md:text-4xl sm:text-2xl p-5">Currency Converter</h1>
        <div className="p-3">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter amount to convert..."
            type="text"
            value={conversionAmount}
            onChange={(e) => setConversionAmount(e.target.value)}
          />
        </div>
        <div className="p-3">
          <select
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
          >
            <option value="">Select a currency...</option>
            {currencies.map((currency) => (
              <option value={currency} key={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={handleSubmit}
        >
          Convert
        </button>
      </div>
      {convertedDetails && (
        <h2 className="md:text-2xl sm:text-1xl">{`${convertedDetails.currency}${convertedDetails.value} is equal to ${convertedDetails.bitcoinAmount} Bitcoin.`}</h2>
      )}
    </div>
  );
};

export default CurrencyConverter;
