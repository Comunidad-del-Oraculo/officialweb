import developers from "@/data/developers.json"
import { Developer } from "../types"

export const getAllDevelopers = () => {
    return developers
}

export const getDeveloperByUsername = (username: string) => {
    return developers.find(developer => developer.username === username)
}

export const filterDevelopers = (
    developers: Developer[],
    filters: {
        country?: string;
        city?: string;
        role?: string;
        availability?: string;
        tags?: string[];
    }
) => {
    return developers.filter((dev) => {
        if (
            filters.country &&
            dev.location.country.toLowerCase() !== filters.country.toLowerCase()
        ) return false;

        if (
            filters.city &&
            dev.location.city.toLowerCase() !== filters.city.toLowerCase()
        ) return false;

        if (
            filters.role &&
            !dev.role.toLowerCase().includes(filters.role.toLowerCase())
        ) return false;

        if (filters.availability && dev.availability.toLowerCase() !== filters.availability.toLowerCase()) return false

        if (filters.tags && filters.tags.length > 0) {
            const devsTags = dev.tags.map(t => t.toLowerCase())
            const matchAllTags = filters.tags.every(tag => devsTags.includes(tag.toLowerCase()))
            if (!matchAllTags) return false
        }

        return true;
    });
}

// for filters
export const getUniqueValues = (
    developers: Developer[],
    extractor: (dev: Developer) => string | string[]
) => {
    return Array.from(new Set(developers.flatMap(dev => extractor(dev)))).sort()
}
