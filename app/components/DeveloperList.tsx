'use client'
import Image from 'next/image'
import developersData from '@/data/developers.json'

interface Developer {
    id: string
    name: string
    role: string
    avatar: string
    shortBio: string
    about: string
    location: {
        city: string
        country: string
    }
    experienceYears: number
    skills: {
        languages: string[]
        frontend: string[]
        backend: string[]
        databases: string[]
        devops: string[]
        uiux: string[]
    }
    experience: {
        company: string
        position: string
        start: string
        end: string
        description: string
    }[]
    projects: {
        name: string
        description: string
        technologies: string[]
        url: string
    }[]
    certifications: {
        title: string
        organization: string
        year: number
    }[]
    social: {
        github: string
        linkedin: string
        twitter: string
        portfolio: string
    }
    tags: string[]
    availability: string
    updatedAt: string
}

const getCountryFlag = (country: string): string => {
    const flags: { [key: string]: string } = {
        'Uruguay': '🇺🇾',
        'Argentina': '🇦🇷',
        'Colombia': '🇨🇴',
        'Estados Unidos': '🇺🇸',
        'Guatemala': '🇬🇹',
        'España': '🇪🇸',
        'México': '🇲🇽',
        'Chile': '🇨🇱',
        'Perú': '🇵🇪',
        'Brasil': '🇧🇷'
    }
    return flags[country] || '🌎'
}

export const DeveloperList = () => {
    const developers: Developer[] = developersData

    return (
        <section className="py-20 px-6 bg-gray-50">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
                Desarrolladores de la <span className="text-[#8c52ff]">Comunidad</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {developers.map((developer) => (
                    <div
                        key={developer.id}
                        className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200"
                    >
                        <Image
                            src={developer.avatar}
                            alt={developer.name}
                            width={120}
                            height={120}
                            className="w-28 h-28 rounded-full object-cover mx-auto mb-4 grayscale"
                        />

                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                            {developer.name}
                        </h3>

                        <p className="text-sm text-gray-600 mb-3">
                            {developer.location.country} {getCountryFlag(developer.location.country)}
                        </p>

                        <p className="text-sm font-medium text-gray-800 mb-2">
                            {developer.role}
                        </p>

                        {developer.experience && developer.experience.length > 0 && (
                            <p className="text-xs text-gray-500">
                                {developer.experience[0].company}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}