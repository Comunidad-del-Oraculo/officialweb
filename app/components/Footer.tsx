'use client'
import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Discutamos <br />
              <span className="text-[#8c52ff] relative">
                Tu Proyecto
                
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#8c52ff] opacity-40" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7501 2.49994 132.5 -1.49992 198 6.99996" stroke="currentColor" strokeWidth="3"/></svg>
              </span>
            </h2>
            
            <p className="text-gray-600 mb-10 text-lg max-w-md">
              Estoy listo para llevar tus ideas al siguiente nivel. Contáctame y empecemos a construir algo increíble juntos.
            </p>

            <div className="space-y-6">
             
              <div className="flex items-center bg-white p-5 rounded-xl shadow-md border border-gray-100 transition hover:shadow-lg">
                <div className="bg-[#8c52ff]/10 p-3 rounded-full mr-4 text-[#8c52ff]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold uppercase">Email</p>
                  <a href="mailto:tuemail@ejemplo.com" className="text-gray-900 font-bold text-lg hover:text-[#8c52ff] transition">
                    tuemail@ejemplo.com
                  </a>
                </div>
              </div>

              
              <div className="flex items-center bg-white p-5 rounded-xl shadow-md border border-gray-100 transition hover:shadow-lg">
                <div className="bg-[#8c52ff]/10 p-3 rounded-full mr-4 text-[#8c52ff]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold uppercase">Residencia</p>
                  <p className="text-gray-900 font-bold text-lg">
                    Argentina
                  </p>
                </div>
              </div>
            </div>
          </div>

         
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contáctame</h3>
            
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                <input 
                  type="text" 
                  placeholder="Tu nombre completo"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#8c52ff] focus:bg-white focus:ring-2 focus:ring-[#8c52ff]/20 outline-none transition-all"
                />
              </div>

              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#8c52ff] focus:bg-white focus:ring-2 focus:ring-[#8c52ff]/20 outline-none transition-all"
                />
              </div>

             
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                <textarea 
                  rows={4}
                  placeholder="Cuéntame sobre tu proyecto..."
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#8c52ff] focus:bg-white focus:ring-2 focus:ring-[#8c52ff]/20 outline-none transition-all resize-none"
                ></textarea>
              </div>

              
              <button 
                type="submit"
                className="w-full bg-[#8c52ff] hover:bg-[#7a45e0] text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>

        
        <div className="mt-20 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Comunidad de Oráculo. Todos los derechos reservados.</p>
        </div>

      </div>
    </footer>
  );
};
