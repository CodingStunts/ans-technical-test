import { getCurrencyData } from "@/api";

export const Home = async () => {
  const currenciesData = await getCurrencyData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="md:text-4xl sm:text-2xl">Convert your currency to Bitcoin!</h1>
      <h2 className="md:text-3xl sm:text-xl">Available Currencies:</h2>
      <div>
       
      </div>
    </main>
  );
};

export default Home;