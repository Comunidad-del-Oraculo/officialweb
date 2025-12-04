import { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${BASE_URL}/`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1.0
        },
        {
            url: `${BASE_URL}/developers`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9
        },
        {
            url: `${BASE_URL}/activities`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.7
        }
    ]
}
