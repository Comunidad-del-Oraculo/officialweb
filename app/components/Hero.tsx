import { hero } from "@/lib/constants";

const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-6 bg-linear-to-br from-accent/10 to-white"
    >
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 text-center mb-6">
        Bienvenidos a la
        <span className="bg-linear-to-l bg-clip-text from-accent via-accent/80 to-accent/60 text-transparent px-1">
          Comunidad del Oráculo
        </span>
      </h1>

      <p className="text-lg md:text-xl text-gray-600 text-center max-w-4xl mb-8">
        {hero.title}
      </p>

      <button className="bg-accent/80 hover:bg-accent text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer">
        Unete a la Comunidad
      </button>
    </div>
  );
};

export default Hero;
