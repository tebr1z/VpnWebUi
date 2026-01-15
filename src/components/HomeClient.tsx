"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { supportedLanguages, translations, type Language } from "../lib/translations"

type HomeClientProps = {
  lang: Language
}

type IconProps = {
  name:
    | "language"
    | "chevron-down"
    | "check"
    | "download"
    | "shield"
    | "verified-user"
    | "visibility-off"
    | "lock"
    | "verified"
    | "globe"
    | "bolt"
    | "security"
    | "hourglass"
  className?: string
}

function Icon({ name, className }: IconProps) {
  switch (name) {
    case "language":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm7.05 9h-3.16a15.8 15.8 0 0 0-1.2-4.08A8.02 8.02 0 0 1 19.05 11ZM12 4.05c.88 1.1 1.63 2.86 2.07 4.95H9.93C10.37 6.91 11.12 5.15 12 4.05ZM4.95 13h3.16c.28 1.44.74 2.86 1.2 4.08A8.02 8.02 0 0 1 4.95 13Zm0-2a8.02 8.02 0 0 1 4.34-4.08c-.46 1.22-.92 2.64-1.2 4.08H4.95Zm7.05 8.95c-.88-1.1-1.63-2.86-2.07-4.95h4.14c-.44 2.09-1.19 3.85-2.07 4.95Zm2.07-6.95H9.93c-.12-.63-.19-1.3-.19-2s.07-1.37.19-2h4.14c.12.63.19 1.3.19 2s-.07 1.37-.19 2Zm1.84 4.08c.46-1.22.92-2.64 1.2-4.08h3.16a8.02 8.02 0 0 1-4.36 4.08Z"
          />
        </svg>
      )
    case "chevron-down":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M7 10l5 5 5-5H7z" />
        </svg>
      )
    case "check":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
        </svg>
      )
    case "download":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M12 3v10.17l3.59-3.58L17 11l-5 5-5-5 1.41-1.41L11 13.17V3h1zM5 19h14v2H5z" />
        </svg>
      )
    case "shield":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3z" />
        </svg>
      )
    case "verified-user":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3zm-1 13-3-3 1.4-1.4L11 11.2l4.6-4.6L17 8l-6 7z" />
        </svg>
      )
    case "visibility-off":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 6c3.5 0 6.6 2 8 5-1 2.2-2.9 3.9-5.2 4.7l1.7 1.7C19 16.5 21 14.5 22 12 20.2 7.7 16.3 5 12 5c-1.1 0-2.1.2-3.1.5l1.7 1.7c.5-.1 1-.2 1.4-.2zM2.1 3.5 3.5 2.1l18.4 18.4-1.4 1.4-3.2-3.2c-1.6.8-3.3 1.3-5.3 1.3-4.3 0-8.2-2.7-10-7 1.1-2.5 3-4.5 5.5-5.8L2.1 3.5zM6.1 7.5c-1.6 1-2.9 2.4-3.7 4.1 1.4 3 4.4 5 7.6 5 1.4 0 2.7-.4 3.9-1l-1.6-1.6c-.7.3-1.5.4-2.3.4-2.1 0-3.8-1.7-3.8-3.8 0-.8.2-1.6.5-2.3l-1.6-1.6z"
          />
        </svg>
      )
    case "lock":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5zm3 8H9V7a3 3 0 0 1 6 0v3z" />
        </svg>
      )
    case "verified":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="m9 16.2-3.5-3.5 1.4-1.4L9 13.4l7.1-7.1 1.4 1.4z" />
        </svg>
      )
    case "globe":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm7.05 9h-3.16c-.25-1.46-.74-2.84-1.46-4.08A8.02 8.02 0 0 1 19.05 11ZM12 4.05c.92 1.14 1.69 2.92 2.1 4.95H9.9C10.31 6.97 11.08 5.19 12 4.05ZM4.95 13h3.16c.25 1.46.74 2.84 1.46 4.08A8.02 8.02 0 0 1 4.95 13Zm0-2a8.02 8.02 0 0 1 4.57-4.08C8.8 8.16 8.31 9.54 8.06 11H4.95Zm7.05 8.95c-.92-1.14-1.69-2.92-2.1-4.95h4.2c-.41 2.03-1.18 3.81-2.1 4.95Zm2.94-2.87c.72-1.24 1.21-2.62 1.46-4.08h3.16a8.02 8.02 0 0 1-4.62 4.08Z"
          />
        </svg>
      )
    case "bolt":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M11 21h-1l1-7H7l6-11h1l-1 7h4l-6 11z" />
        </svg>
      )
    case "security":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3zm0 6a3 3 0 0 1 3 3v2a3 3 0 0 1-6 0v-2a3 3 0 0 1 3-3z" />
        </svg>
      )
    case "hourglass":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M6 2h12v2l-4 4 4 4v2H6v-2l4-4-4-4V2zm2 18h8v2H8z"
          />
        </svg>
      )
    default:
      return null
  }
}

export function HomeClient({ lang }: HomeClientProps) {
  const router = useRouter()
  const t = translations[lang]
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  const servers = useMemo(
    () => [
      { country: "Turkey", city: "Istanbul", code: "TR", status: "active" },
      { country: "United Kingdom", city: "London #4", code: "UK", status: "inactive" },
      { country: "Germany", city: "Frankfurt", code: "DE", status: "inactive" },
      { country: "Netherlands", city: "Amsterdam", code: "NL", status: "inactive" },
      { country: "France", city: "Paris", code: "FR", status: "inactive" },
      { country: "Spain", city: "Madrid", code: "ES", status: "inactive" },
      { country: "Italy", city: "Milan", code: "IT", status: "inactive" },
      { country: "Sweden", city: "Stockholm", code: "SE", status: "inactive" },
      { country: "Poland", city: "Warsaw", code: "PL", status: "soon" },
      { country: "Romania", city: "Bucharest", code: "RO", status: "soon" },
      { country: "United States", city: "New York", code: "US", status: "inactive" },
      { country: "Canada", city: "Toronto", code: "CA", status: "inactive" },
      { country: "Brazil", city: "Sao Paulo", code: "BR", status: "soon" },
      { country: "Japan", city: "Tokyo", code: "JP", status: "soon" },
    ],
    []
  )

  const [randomServer, setRandomServer] = useState(servers[1])
  const [isServerListOpen, setIsServerListOpen] = useState(false)
  const [comingSoonMessage, setComingSoonMessage] = useState("")
  const [isLangOpen, setIsLangOpen] = useState(false)
  const langMenuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  useEffect(() => {
    const currentPhrase = t.phrases[phraseIndex]
    const isDoneTyping = displayText === currentPhrase
    const isDoneDeleting = displayText === ""

    let timeoutMs = isDeleting ? 45 : 85

    if (!isDeleting && isDoneTyping) {
      timeoutMs = 1200
    }

    const timeoutId = window.setTimeout(() => {
      if (!isDeleting && isDoneTyping) {
        setIsDeleting(true)
        return
      }

      if (isDeleting && isDoneDeleting) {
        setIsDeleting(false)
        setPhraseIndex((current) => (current + 1) % t.phrases.length)
        return
      }

      const nextLength = isDeleting ? displayText.length - 1 : displayText.length + 1
      setDisplayText(currentPhrase.slice(0, nextLength))
    }, timeoutMs)

    return () => window.clearTimeout(timeoutId)
  }, [displayText, isDeleting, phraseIndex, lang, t.phrases])

  useEffect(() => {
    setPhraseIndex(0)
    setDisplayText("")
    setIsDeleting(false)
  }, [lang])

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      const nonActive = servers.filter((server) => server.status !== "active")
      const next = nonActive[Math.floor(Math.random() * nonActive.length)]
      setRandomServer(next)
    }, 1800)
    return () => window.clearInterval(intervalId)
  }, [servers])

  useEffect(() => {
    if (!comingSoonMessage) return
    const timeoutId = window.setTimeout(() => {
      setComingSoonMessage("")
    }, 1800)
    return () => window.clearTimeout(timeoutId)
  }, [comingSoonMessage])

  useEffect(() => {
    if (!isLangOpen) return
    const handleClickOutside = (event: MouseEvent) => {
      if (!langMenuRef.current) return
      if (event.target instanceof Node && !langMenuRef.current.contains(event.target)) {
        setIsLangOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isLangOpen])

  const handleComingSoon = (label: string) => {
    setComingSoonMessage(`${label} • ${t.modal.tag}`)
  }

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0 hero-gradient pointer-events-none"></div>

      <div className="fixed top-6 left-0 right-0 z-50 px-4">
        <header className="max-w-[1200px] mx-auto glass-nav rounded-full px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-8 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path
                  clipRule="evenodd"
                  d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold tracking-tight">VexiraVpn</h2>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">
              {t.nav.features}
            </a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">
              {t.nav.pricing}
            </a>
            <button
              className="text-sm font-medium hover:text-primary transition-colors"
              type="button"
              onClick={() => handleComingSoon(t.nav.servers)}
            >
              {t.nav.servers}
            </button>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">
              {t.nav.support}
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block" ref={langMenuRef}>
              <button
                className="flex items-center gap-2 bg-white/[0.04] text-xs font-bold uppercase tracking-[0.2em] text-slate-200 border border-white/10 rounded-full px-4 py-2 hover:border-primary/40 hover:bg-white/[0.08] transition-all"
                type="button"
                onClick={() => setIsLangOpen((open) => !open)}
                aria-haspopup="listbox"
                aria-expanded={isLangOpen}
              >
                <Icon name="language" className="h-4 w-4 text-primary" />
                {lang.toUpperCase()}
                <Icon name="chevron-down" className="h-4 w-4 text-slate-400" />
              </button>
              {isLangOpen && (
                <div
                  className="absolute right-0 mt-2 w-44 rounded-2xl border border-primary/30 bg-[#0b1517] p-2 shadow-[0_10px_30px_rgba(0,0,0,0.45)] backdrop-blur"
                  style={{ backgroundColor: "#0b1517" }}
                >
                  {supportedLanguages.map((option) => (
                    <button
                      key={option}
                      className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold tracking-wide transition-all ${
                        lang === option ? "bg-primary/15 text-primary" : "text-slate-200 hover:bg-white/10"
                      }`}
                      type="button"
                      role="option"
                      aria-selected={lang === option}
                      onClick={() => {
                        setIsLangOpen(false)
                        router.push(`/${option}`)
                      }}
                    >
                      <span>
                        {option === "en" && "English"}
                        {option === "tr" && "Türkçe"}
                        {option === "ru" && "Русский"}
                        {option === "az" && "Azərbaycanca"}
                      </span>
                      {lang === option && (
                        <Icon name="check" className="h-3.5 w-3.5" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button className="hidden sm:block text-sm font-bold hover:text-primary transition-colors">
              {t.nav.login}
            </button>
            <button className="bg-primary text-background-dark px-5 py-2 rounded-full text-sm font-bold hover:brightness-110 transition-all">
              {t.nav.getStarted}
            </button>
          </div>
        </header>
      </div>

      <main className="relative z-10 pt-40 pb-20 px-6">
        {comingSoonMessage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
            <div className="glass-nav w-full max-w-md rounded-2xl border border-primary/30 p-8 text-center shadow-[0_0_40px_rgba(19,200,236,0.35)]">
              <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-primary/20 text-primary">
                <Icon name="hourglass" className="h-7 w-7" />
              </div>
              <div className="text-sm uppercase tracking-[0.3em] text-slate-400">{t.modal.title}</div>
              <div className="mt-2 text-2xl font-bold text-white">{comingSoonMessage}</div>
              <button
                className="mt-6 w-full rounded-xl bg-primary px-5 py-3 text-sm font-bold text-background-dark hover:brightness-110 transition-all"
                type="button"
                onClick={() => setComingSoonMessage("")}
              >
                {t.modal.close}
              </button>
            </div>
          </div>
        )}
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                {t.hero.badge}
              </div>
              <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                {t.hero.titlePrefix} <br />
                <span className="text-primary cursor-blink">{displayText}</span>
              </h1>
              <p className="text-lg text-slate-400 max-w-xl leading-relaxed">{t.hero.description}</p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-4 items-center">
                <button
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 hover:border-primary/40 hover:bg-white/[0.08] transition-all"
                  type="button"
                  aria-label="Get it on Google Play"
                  onClick={() => handleComingSoon(t.store.googlePlay)}
                >
                  <div className="size-11 rounded-xl bg-white text-black flex items-center justify-center">
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6">
                      <path
                        d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="text-left leading-none">
                    <div className="text-[10px] uppercase tracking-wider text-slate-400">{t.store.getItOn}</div>
                    <div className="text-lg font-bold">{t.store.googlePlay}</div>
                  </div>
                </button>
                <button
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 hover:border-primary/40 hover:bg-white/[0.08] transition-all"
                  type="button"
                  aria-label="Download on the App Store"
                  onClick={() => handleComingSoon(t.store.appStore)}
                >
                  <div className="size-11 rounded-xl bg-white/10 text-white flex items-center justify-center">
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6">
                      <path
                        d="M16.365 1.43c0 1.14-.427 2.16-1.278 3.06-.98 1.02-2.2 1.78-3.57 1.67-.1-1.1.41-2.29 1.19-3.08.86-.9 2.31-1.55 3.66-1.65zm4.31 17.73c-.76 1.62-1.12 2.34-2.1 3.78-1.35 1.92-3.24 4.32-5.58 4.34-2.08.02-2.62-1.34-5.38-1.33-2.76.02-3.35 1.36-5.43 1.34-2.34-.02-4.13-2.13-5.48-4.04-3.76-5.36-4.16-11.65-1.83-15.31 1.65-2.54 4.24-4.02 6.67-4.02 2.55 0 4.16 1.35 5.38 1.35 1.19 0 3.22-1.66 5.6-1.43 1 .04 3.8.4 5.61 3.05-.15.1-3.35 1.95-3.31 5.8.04 4.64 4.16 6.17 4.25 6.2z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="text-left leading-none">
                    <div className="text-[10px] uppercase tracking-wider text-slate-400">{t.store.downloadOn}</div>
                    <div className="text-lg font-bold">{t.store.appStore}</div>
                  </div>
                </button>
              </div>
              <a
                className="flex items-center gap-3 bg-primary/10 text-primary px-6 py-4 rounded-xl font-bold border border-primary/20 hover:bg-primary/20 transition-all"
                href="/VexiraVpn.apk"
                download
              >
                <Icon name="download" className="h-5 w-5" />
                <span>{t.store.apk}</span>
              </a>
            </div>

            <div className="pt-8 border-t border-white/5 flex flex-wrap gap-8 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2">
                <Icon name="shield" className="h-5 w-5" />
                <span className="font-bold">{t.trust.audited}</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="verified-user" className="h-5 w-5" />
                <span className="font-bold">{t.trust.certified}</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="visibility-off" className="h-5 w-5" />
                <span className="font-bold">{t.trust.noLogs}</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden glass-nav border border-white/10 p-2 group">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-50 transition-transform duration-700 group-hover:scale-110"
                data-alt="Deep blue abstract technology mesh pattern"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAcNXO9hHHkOMRWselXYyIrw_mA6GRVsgLnOIvM7bwquu2uxlYX9Dt910yJ16pr4u3L5sTXwdXyi3ro9vt49snzwFekebrTNTfZDkQYSSXtC49EaGHDVDQsT1aoAH18Mf_WEyyLmivmPemjWOBdhEYKZl9JU6UcmxtGf3bjsC4xxlo8p8oSfD57KnHYM3HIFC9NwJC-Y63N94fchlaqFjgIZ8mrEld7YxpMJZ2n0rhQUPnybRtXVG_I9G73oHmx4_RfJhGbxHxIh1_c")',
                }}
              ></div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm px-4">
                <div className="glass-nav rounded-2xl p-6 border border-primary/30 status-glow flex flex-col gap-6">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-xs uppercase text-slate-400 font-bold tracking-widest">{t.status.label}</span>
                      <span className="text-2xl font-bold text-primary flex items-center gap-2">
                        {t.status.protected}
                        <Icon name="verified" className="h-4 w-4" />
                      </span>
                    </div>
                    <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/40">
                      <Icon name="lock" className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-background-dark/50 p-4 rounded-xl border border-white/5">
                      <p className="text-xs text-slate-400 font-medium">{t.status.server}</p>
                      <p className="text-lg font-bold">{randomServer.city}</p>
                      <p className="text-[10px] text-primary mt-1 flex items-center gap-1">
                        <Icon name="globe" className="h-3 w-3" />
                        {randomServer.country}
                      </p>
                    </div>
                    <div className="bg-background-dark/50 p-4 rounded-xl border border-white/5">
                      <p className="text-xs text-slate-400 font-medium">{t.status.ping}</p>
                      <p className="text-lg font-bold">12ms</p>
                      <p className="text-[10px] text-green-400 mt-1 flex items-center gap-1">
                        <Icon name="bolt" className="h-3 w-3" />
                        {t.status.ultraLow}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-slate-400">
                      <span className="inline-flex h-2 w-2 rounded-full bg-green-400"></span>
                      {t.status.activeServer.replace("{city}", "Istanbul").replace("{country}", "Turkey")}
                    </div>
                    <button
                      className="text-xs font-bold text-primary hover:text-white transition-colors"
                      type="button"
                      onClick={() => setIsServerListOpen((open) => !open)}
                    >
                      {isServerListOpen ? t.status.hideServers : t.status.viewServers}
                    </button>
                  </div>
                  {isServerListOpen && (
                    <div className="mt-2 space-y-3 max-h-52 overflow-auto">
                      <div>
                        <div className="mb-2 text-[10px] uppercase tracking-wider text-slate-500">{t.status.active}</div>
                        {servers
                          .filter((server) => server.status === "active")
                          .map((server) => (
                            <div
                              key={`${server.code}-${server.city}`}
                              className="flex items-center justify-between rounded-lg border border-primary/60 bg-primary/10 px-3 py-2 text-xs text-primary"
                            >
                              <span className="font-semibold">
                                {server.city}, {server.country}
                              </span>
                              <span className="uppercase tracking-wider">{t.status.active}</span>
                            </div>
                          ))}
                      </div>
                      <div>
                        <div className="mb-2 text-[10px] uppercase tracking-wider text-slate-500">{t.status.inactive}</div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {servers
                            .filter((server) => server.status === "inactive")
                            .map((server) => (
                              <div
                                key={`${server.code}-${server.city}`}
                                className="flex items-center justify-between rounded-lg border border-white/5 bg-background-dark/40 px-3 py-2 text-xs text-slate-300"
                              >
                                <span className="font-semibold">
                                  {server.city}, {server.country}
                                </span>
                                <span className="uppercase tracking-wider">{t.status.inactive}</span>
                              </div>
                            ))}
                        </div>
                      </div>
                      <div>
                        <div className="mb-2 text-[10px] uppercase tracking-wider text-slate-500">{t.status.soon}</div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {servers
                            .filter((server) => server.status === "soon")
                            .map((server) => (
                              <div
                                key={`${server.code}-${server.city}`}
                                className="flex items-center justify-between rounded-lg border border-white/5 bg-background-dark/40 px-3 py-2 text-xs text-slate-300"
                              >
                                <span className="font-semibold">
                                  {server.city}, {server.country}
                                </span>
                                <span className="uppercase tracking-wider">{t.status.soon}</span>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[85%] rounded-full shadow-[0_0_8px_#13c8ec]"></div>
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-tighter opacity-60">
                    <span>{t.status.aes}</span>
                    <span>{t.status.wireguard}</span>
                  </div>
                </div>
              </div>

              <div className="absolute top-8 right-8 glass-nav p-3 rounded-xl border border-white/10 animate-bounce">
                <Icon name="security" className="h-4 w-4 text-primary" />
              </div>
              <div className="absolute bottom-12 left-12 glass-nav p-3 rounded-xl border border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <span className="text-[10px] font-bold uppercase">{t.status.liveMap}</span>
                </div>
              </div>
            </div>

            <div className="absolute -top-10 -right-10 size-40 bg-primary/20 rounded-full blur-[80px] -z-10"></div>
            <div className="absolute -bottom-10 -left-10 size-40 bg-purple-500/20 rounded-full blur-[80px] -z-10"></div>
          </div>
        </div>
      </main>

      <section className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex flex-col gap-1 p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
            <span className="text-slate-500 text-sm">{t.stats.activeConnections}</span>
            <span className="text-3xl font-bold">1.2M+</span>
          </div>
          <div className="flex flex-col gap-1 p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
            <span className="text-slate-500 text-sm">{t.stats.serverLocations}</span>
            <span className="text-3xl font-bold">94+</span>
          </div>
          <div className="flex flex-col gap-1 p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
            <span className="text-slate-500 text-sm">{t.stats.avgSpeed}</span>
            <span className="text-3xl font-bold">400%</span>
          </div>
          <div className="flex flex-col gap-1 p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
            <span className="text-slate-500 text-sm">{t.stats.uptime}</span>
            <span className="text-3xl font-bold">99.9%</span>
          </div>
        </div>
      </section>
    </div>
  )
}
