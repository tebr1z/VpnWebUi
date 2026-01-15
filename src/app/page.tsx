import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { supportedLanguages, type Language } from "../lib/translations"

const detectLanguage = (acceptLanguage: string | null): Language => {
  if (!acceptLanguage) return "en"
  const candidate = acceptLanguage
    .split(",")
    .map((entry) => entry.trim().slice(0, 2))
    .find((lang) => supportedLanguages.includes(lang as Language))
  return (candidate as Language) || "en"
}

export default async function Home() {
  const hdrs = await headers()
  const lang = detectLanguage(hdrs.get("accept-language"))
  redirect(`/${lang}`)
}
