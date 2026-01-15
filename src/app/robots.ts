const getBaseUrl = () => {
  return process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"
}

export default function robots() {
  const baseUrl = getBaseUrl()
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
