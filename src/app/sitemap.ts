import { supportedLanguages } from "../lib/translations"

const getBaseUrl = () => {
  return process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"
}

export default function sitemap() {
  const baseUrl = getBaseUrl()
  const routes = supportedLanguages.map((lang) => ({
    url: `${baseUrl}/${lang}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }))

  return routes
}
