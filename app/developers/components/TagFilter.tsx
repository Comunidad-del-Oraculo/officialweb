"use client";
import { useDevsFilters } from "@/store/useDevsFilters";

const TagFilter = ({ tags }: { tags: string[] }) => {
  const { tags: selected, toggleTag } = useDevsFilters();

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => {
        const active = selected?.includes(tag);
        return (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`px-2 py-1 rounded-full text-xs transition-all duration-300 ${
              active
                ? "bg-accent text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
};

export default TagFilter;
