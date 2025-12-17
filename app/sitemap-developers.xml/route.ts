import { NextResponse } from "next/server";
import { BASE_URL } from "@/lib/constants";
import developers from "@/data/developers.json";

export async function GET() {
    const urls = developers.map(dev => {
        return `
            <url>
                <loc>${BASE_URL}/developers/${dev.username}</loc>
                <lastmod>${dev.updatedAt}</lastmod>
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
