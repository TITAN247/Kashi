import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
}

export default function SEO({
    title = "Kashi - The Eternal City | Journey Through Time",
    description = "Explore the seven epochs of the world's oldest living city. From cosmic birth to the end of time, discover the spiritual heart of India.",
    keywords = "Kashi, Varanasi, Banaras, Eternal City, Ganga, Shiva, Spiritual Journey, India, Temples, Ghats, Hinduism, History, Culture",
    image = "/images/hero-ganga-waves.jpg",
    url = "https://kashi.app",
    type = "website"
}: SEOProps) {

    const siteTitle = title.includes("Kashi") ? title : `${title} | Kashi - The Eternal City`;
    // Ensure image is absolute URL
    const imageUrl = image.startsWith('http') ? image : `${url}${image.startsWith('/') ? '' : '/'}${image}`;

    const schemaOrgJSONLD = {
        "@context": "http://schema.org",
        "@type": "WebSite",
        "url": url,
        "name": siteTitle,
        "alternateName": "Kashi - The City of Light",
        "description": description
    };

    return (
        <Helmet>
            {/* Basic Metrics */}
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:url" content={url} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />

            {/* Canonical */}
            <link rel="canonical" href={url} />

            {/* JSON-LD */}
            <script type="application/ld+json">
                {JSON.stringify(schemaOrgJSONLD)}
            </script>
        </Helmet>
    );
}
