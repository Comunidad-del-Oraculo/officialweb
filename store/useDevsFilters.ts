import { create } from "zustand"

interface FilterState {
    country?: string;
    city?: string;
    role?: string;
    tag?: string;

    setFilter: (key: keyof FilterState, value?: string) => void;
    clearFilters: () => void;
}

export const useDevsFilters = create<FilterState>((set) => ({
    country: undefined,
    city: undefined,
    role: undefined,
    tag: undefined,

    setFilter: (key, value) => set(() => ({ [key]: value })),
    clearFilters: () => set({ country: undefined, city: undefined, role: undefined, tag: undefined })
}))
