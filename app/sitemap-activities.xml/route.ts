import { NextResponse } from "next/server";
import { BASE_URL } from "@/lib/constants";
import activities from "@/data/activities.json";

export async function GET() {
    const urls = activities.map(activity => {
        return `
            <url>
                <loc>${BASE_URL}/activities/${activity.slug}</loc>
                <lastmod>${activity.updatedAt}</lastmod>
                <changefreq>weekly</changefreq>
                <priority>0.9</priority>
            </url>
        `
    }).join();

    const xml = `
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${urls}
        </urlset>
    `.trim();

    return new NextResponse(xml, { headers: { "Content-Type": "application/xml" }, })
}
