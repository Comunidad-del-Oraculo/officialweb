export interface Developer {
    username: string,
    name: string,
    role: string,
    avatar: string,
    shortBio: string,
    about: string,
    location: {
        city: string,
        country: string
    },
    experienceYears: number,
    skills: {
        languages: string[],
        frontend: string[],
        backend: string[],
        databases: string[],
        devops: string[],
        uiux: string[]
    },
    experience: [
        {
            company: string,
            position: string,
            start: string,
            end: string,
            description: string
        }
    ],
    projects: [
        {
            name: string,
            description: string,
            technologies: string[],
            url: string
        }
    ],
    certifications: [
        {
            title: string,
            organization: string,
            year: number
        }
    ],
    social: {
        github: string,
        linkedin: string,
        twitter: string,
        portfolio: string
    },
    tags: string[],
    availability: string,
    updatedAt: string
}
