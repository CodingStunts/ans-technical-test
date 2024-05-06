import CurrencyDisplay from "../components/CurrencyDisplay";

import { getCurrencyData } from "@/api";

export const Home = async () => {
  const currenciesData = await getCurrencyData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="md:text-4xl sm:text-2xl">
        Convert your currency into Bitcoin!
      </h1>
      <h2 className="md:text-3xl sm:text-xl p-6">Available Currencies:</h2>
      <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {currenciesData &&
          Object.entries(currenciesData).map(([currency, data]) => (
            <CurrencyDisplay
              key={currency}
              currency={currency}
              currencyData={data}
            />
          ))}
      </div>
    </main>
  );
};

export default Home;
