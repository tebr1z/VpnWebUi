import { notFound } from "next/navigation"
import { HomeClient } from "../../components/HomeClient"
import { supportedLanguages, translations, type Language } from "../../lib/translations"

type PageProps = {
  params: Promise<{ lang: Language }>
}

export const dynamicParams = false

export const generateStaticParams = async () => {
  return supportedLanguages.map((lang) => ({ lang }))
}

export const generateMetadata = async ({ params }: PageProps) => {
  const { lang } = await params
  if (!supportedLanguages.includes(lang)) return {}
  const t = translations[lang]
  return {
    title: t.seo.title,
    description: t.seo.description,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: "/en",
        tr: "/tr",
        ru: "/ru",
        az: "/az",
      },
    },
    openGraph: {
      title: t.seo.title,
      description: t.seo.description,
      locale: t.seo.ogLocale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t.seo.title,
      description: t.seo.description,
    },
  }
}

export default async function LangPage({ params }: PageProps) {
  const { lang } = await params
  if (!supportedLanguages.includes(lang)) {
    notFound()
  }

  return <HomeClient lang={lang} />
}
