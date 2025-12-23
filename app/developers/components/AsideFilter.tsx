"use client";
import { FiSearch } from "react-icons/fi";
import FilterInput from "./FilterInput";
import {
  getAllDevelopers,
  getUniqueValues,
} from "@/lib/functions/getDevelopers";
import { useDevsFilters } from "@/store/useDevsFilters";
import { Developer } from "@/lib/types";
import TagFilter from "./TagFilter";
const AsideFilter = () => {
  const setFilter = useDevsFilters((state) => state.setFilter);
  const filter = useDevsFilters();
  const developers: Developer[] = getAllDevelopers();
  return (
    <div className="flex flex-col max-w-4xl mb-8 gap-4">
      <div className="flex gap-2 shadow bg-white hover:shadow-lg focus:shadow-lg rounded-lg items-center g p-2">
        <input
          type="text"
          placeholder="Buscar"
          className="w-full outline-none"
        />
        <FiSearch />
      </div>

      <FilterInput
        label="Pais"
        value={filter.country}
        options={getUniqueValues(developers, (dev) => dev.location.country)}
        onSelect={(value) => setFilter("country", value)}
      />

      <FilterInput
        label="Ciudad"
        value={filter.city}
        options={getUniqueValues(developers, (dev) => dev.location.city)}
        onSelect={(value) => setFilter("city", value)}
      />

      <FilterInput
        label="Rol"
        value={filter.role}
        options={getUniqueValues(developers, (dev) => dev.role)}
        onSelect={(value) => setFilter("role", value)}
      />

      <TagFilter tags={getUniqueValues(developers, (dev) => dev.tags)} />
    </div>
  );
};

export default AsideFilter;
