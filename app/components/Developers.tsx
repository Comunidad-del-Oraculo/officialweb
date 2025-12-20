"use client";
import Image from "next/image";

import { getAllDevelopers } from "@/lib/functions/getDevelopers";
import { getCountryFlag } from "@/lib/functions/flat";
import Link from "next/link";

export const Developers = () => {
  return (
    <section
      id="developers"
      className="py-20 px-6 bg-linear-to-br from-accent/10 to-white"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Desarrolladores de la <span className="text-accent">Comunidad</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {getAllDevelopers()
          .slice(0, 8)
          .map((developer) => (
            <div
              key={developer.username}
              className="flex flex-col gap-2 bg-white rounded-2xl py-8 text-center shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-200 cursor-default group"
            >
              <Image
                src={developer.avatar}
                alt={developer.name}
                width={100}
                height={100}
                className="w-28 h-28 rounded-full object-cover mx-auto grayscale group-hover:grayscale-0 transition-all duration-300"
              />

              <h3 className="text-lg font-bold text-gray-900">
                {developer.name}
              </h3>
              <p className="text-sm font-medium text-gray-700">
                {developer.role}
              </p>

              <p className="text-sm text-gray-600">
                {developer.location.country}{" "}
                {getCountryFlag(developer.location.country)}
              </p>
            </div>
          ))}
      </div>
      <Link className="flex justify-center py-8 mt-4" href={"/developers"}>
        <span className="bg-accent px-4 py-2 rounded-lg text-white shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
          Ver todos
        </span>
      </Link>
    </section>
  );
};
