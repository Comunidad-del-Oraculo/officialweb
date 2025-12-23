import { create } from "zustand"

interface FilterState {
    country?: string;
    city?: string;
    role?: string;
    availability?: string;
    tags?: string[];

    setFilter: (key: keyof Omit<FilterState, "tags" | "setFilter" | "toggleTag" | "clear">, value?: string) => void;
    toggleTag: (tag: string) => void;
    clearFilters: () => void;
}

export const useDevsFilters = create<FilterState>((set) => ({
    country: undefined,
    city: undefined,
    role: undefined,
    availability: undefined,
    tags: [],

    setFilter: (key, value) =>
        set((state) => {
            if (key === "country") return { ...state, country: value, city: undefined }

            return { ...state, [key]: value }
        }),
    toggleTag: (tag) =>
        set((state) => ({
            ...state,
            tags: (state.tags ?? []).includes(tag)
                ? (state.tags ?? []).filter((t) => t !== tag)
                : [...(state.tags ?? []), tag]
        })),
    clearFilters: () =>
        set({
            country: undefined,
            city: undefined,
            role: undefined,
            availability: undefined,
            tags: []
        })
}))
