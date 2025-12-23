"use client";
import { useState } from "react";

interface Props {
  label: string;
  value?: string;
  options: string[];
  onSelect: (value: string) => void;
}

const FilterInput = ({ label, value, options, onSelect }: Props) => {
  const [query, setQuery] = useState("");

  const visibleOptions = options.filter((option) =>
    option.toLowerCase().includes((query || value || "").toLowerCase())
  );

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={query || value || ""}
        placeholder={label}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full shadow border border-slate-100 rounded-lg px-2 py-1 bg-white"
      />
      {query && (
        <ul className="absolute z-10 bg-white border border-slate-100 rounded-lg w-full mt-1 max-h-40 overflow-auto shadow">
          {visibleOptions.map((option) => (
            <li
              key={option}
              className="px-2 py-1 hover:bg-accent/10 cursor-pointer"
              onClick={() => {
                onSelect(option);
                setQuery("");
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterInput;
