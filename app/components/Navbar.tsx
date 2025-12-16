
'use client'
export const Navbar = () => {
  
  const scrollToSection = (sectionId: string) => {
    const elemento = document.getElementById(sectionId)
    elemento?.scrollIntoView({behavior:"smooth"})
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          
          <h1 className="text-2xl font-bold text-[#8c52ff]">Oráculo</h1>
          
          
          <div className="flex gap-8">
            <a 
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-[#8c52ff] cursor-pointer transition-colors duration-200 font-medium"
            >
              Inicio
            </a>
            <a 
              onClick={() => scrollToSection('developerlist')}
              className="text-gray-700 hover:text-[#8c52ff] cursor-pointer transition-colors duration-200 font-medium"
            >
              Desarrolladores
            </a>
            <a 
              onClick={() => scrollToSection('aboutus')}
              className="text-gray-700 hover:text-[#8c52ff] cursor-pointer transition-colors duration-200 font-medium"
            >
              Acerca
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};