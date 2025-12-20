import developers from "@/data/developers.json"
import { Developer } from "../types"

interface Location {
    city?: string,
    country?: string
    role?: string
    tags?: string[]
}

export const getAllDevelopers = () => {
    return developers
}

export const getDeveloperByUsername = (username: string) => {
    return developers.find(developer => developer.username === username)
}

export const filterDevelopers = (filtrers: Location) => {
    const { city, country, role, tags } = filtrers;

    return developers.filter(developer => {
        if (role && developer.role.toLowerCase() !== role.toLowerCase()) {
            return false
        }

        if (city && developer.location.city.toLowerCase() !== city.toLowerCase()) {
            return false
        }

        if (country && developer.location.country.toLowerCase() !== country.toLowerCase()) {
            return false
        }

        if (tags && tags.length > 0) {
            const tagsMatch = tags.some(tag => developer.tags.includes(tag))

            if (!tagsMatch) return false
        }

        return true
    })

}

export const getUniqueValues = (
    developers: Developer[],
    extractor: (dev: Developer) => string | string[]
) => {
    return Array.from(new Set(developers.flatMap(dev => extractor(dev)))).sort()
}
