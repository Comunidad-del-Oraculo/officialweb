import React from "react";

export const AboutUs = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-purple-50">
    
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
        Acerca de la <span className="text-[#8c52ff]">Comunidad</span>
      </h2>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[#8c52ff]">
          <div className="text-center mb-4">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">📖</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Historia</h3>
          </div>
          <p className="text-gray-600 text-center leading-relaxed">
            Nacimos en 2023 con la misión de reunir desarrolladores apasionados por la tecnología y el aprendizaje continuo.
          </p>
        </div>

        
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[#8c52ff]">
          <div className="text-center mb-4">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🎯</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Misión</h3>
          </div>
          <p className="text-gray-600 text-center leading-relaxed">
            Crear un espacio donde desarrolladores de todos los niveles puedan crecer, compartir conocimiento y construir juntos.
          </p>
        </div>

        
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[#8c52ff]">
          <div className="text-center mb-4">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">💎</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Valores</h3>
          </div>
          <p className="text-gray-600 text-center leading-relaxed">
            Colaboración, respeto, aprendizaje continuo y pasión por la tecnología son los pilares de nuestra comunidad.
          </p>
        </div>

      </div>
    </section>
  );
};