import React from 'react'

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-br from-purple-50 to-white">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 text-center mb-6">
        Bienvenidos a la comunidad de <span className="text-[#8c52ff]">Oráculo</span>
      </h1>
      
      <p className="text-lg md:text-xl text-gray-600 text-center max-w-2xl mb-8">
      La Comunidad del Oráculo es un espacio conformado por desarrolladores con diversa experiencia, habilidades y áreas de especialización. Este proyecto tiene como objetivo centralizar perfiles, actividades, charlas, cursos y proyectos colaborativos, brindando una plataforma profesional, moderna y optimizada para SEO.
      </p>
      
      <button className="bg-[#8c52ff] hover:bg-[#7a45e6] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
        Unete a la comunidad
      </button>
    </div>
  )
}

export default Hero;