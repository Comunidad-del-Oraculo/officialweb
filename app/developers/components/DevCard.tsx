"use client";
import Image from "next/image";
import Link from "next/link";
import { useDevsFilters } from "@/store/useDevsFilters";
import { getCountryFlag } from "@/lib/functions/flat";
import {
  filterDevelopers,
  getAllDevelopers,
} from "@/lib/functions/getDevelopers";

const DevCard = () => {
  const filters = useDevsFilters();
  const filtered = filterDevelopers(getAllDevelopers(), filters);
  return (
    <div className="w-full h-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filtered.map((developer) => (
        <Link
          key={developer.username}
          href={`/developers/${developer.username}`}
          className="flex flex-col bg-white p-4 justify-center items-center gap-1 rounded-lg text-sm font-light hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg "
        >
          <Image
            src={developer.avatar}
            width={100}
            height={100}
            alt={`Foto perfil de ${developer.name}`}
            className="rounded-full w-30 h-30 object-cover"
          />
          <h3 className="text-lg font-semibold">{developer.name}</h3>
          <p className="font-light">{developer.role}</p>
          <p className="text-xs">{developer.availability}</p>
          <p className="text-xs">{developer.location.city} </p>
          <p className="text-xs">
            {developer.location.country +
              " " +
              getCountryFlag(developer.location.country)}
          </p>
          <p className="py-2 font-semibold cursor-pointer hover:text-accent">
            Ver perfil
          </p>
        </Link>
      ))}
    </div>
  );
};

export default DevCard;
