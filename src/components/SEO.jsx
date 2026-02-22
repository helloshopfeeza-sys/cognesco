import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, keywords, url }) {
    const siteTitle = "Cognesco Solutions"
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle
    const defaultDescription = "Cognesco Solutions is a leading digital agency in Sri Lanka specializing in high-performance web development, mobile app development, and UI/UX design."
    const defaultKeywords = "Web Development Services Sri Lanka, App Development Sri Lanka, Custom Software Development, UI/UX Design, E-commerce, Mobile Apps"

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url || "https://cognescosolutions.com"} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />
        </Helmet>
    )
}
