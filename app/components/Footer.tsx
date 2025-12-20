"use client";

export const Footer = () => {
  return (
    <footer className="flex justify-center text-gray-500 text-sm bg-white py-4 border-t border-gray-200">
      <p>
        © {new Date().getFullYear()} Comunidad de Oráculo. Todos los derechos
        reservados.
      </p>
    </footer>
  );
};
