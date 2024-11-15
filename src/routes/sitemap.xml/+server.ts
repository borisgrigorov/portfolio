export async function GET() {
    return new Response(
        `
        <urlset
			xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:xhtml="https://www.w3.org/1999/xhtml"
			xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
			xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
			xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
			xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
		>
            <url>
                <loc>https://vvveb.cz/</loc>
                <lastmod>2024-11-15T15:01:48+00:00</lastmod>
            </url>
        </urlset>
        `.trim(),
        {
            headers: {
                "Content-Type": "application/xml",
            },
        }
    );
}
