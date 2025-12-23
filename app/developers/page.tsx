import AsideFilter from "./components/AsideFilter";
import DevCard from "./components/DevCard";

const page = () => {
  return (
    <div className="flex flex-col flex-1 w-full h-full items-center bg-linear-to-tl from-accent/5 to-white">
      <div className="flex flex-col py-20 px-6">
        <h2 className="text-2xl text-start">Integrantes de Oraculo</h2>
        <div className="flex w-full gap-4 mt-8">
          <AsideFilter />
          <DevCard />
        </div>
      </div>
    </div>
  );
};

export default page;
