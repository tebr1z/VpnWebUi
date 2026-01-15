import { useEffect, useState } from "react"

function App() {
  const phrases = ["Digital Shadow", "Private Identity", "Safe Online Path", "Clean Secure Signal"]
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]
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
        setPhraseIndex((current) => (current + 1) % phrases.length)
        return
      }

      const nextLength = isDeleting ? displayText.length - 1 : displayText.length + 1
      setDisplayText(currentPhrase.slice(0, nextLength))
    }, timeoutMs)

    return () => window.clearTimeout(timeoutId)
  }, [displayText, isDeleting, phraseIndex, phrases])

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
              Features
            </a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">
              Pricing
            </a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">
              Servers
            </a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">
              Support
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-sm font-bold hover:text-primary transition-colors">
              Login
            </button>
            <button className="bg-primary text-background-dark px-5 py-2 rounded-full text-sm font-bold hover:brightness-110 transition-all">
              Get Started
            </button>
          </div>
        </header>
      </div>

      <main className="relative z-10 pt-40 pb-20 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Next-Gen Encryption Active
              </div>
              <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                Reclaim your <br />
                <span className="text-primary cursor-blink">{displayText}</span>
              </h1>
              <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
                Experience the future of privacy with WireGuard®-powered speeds and a strictly audited no-logs policy.
                Your data belongs to you, and only you.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-4 items-center">
                <a
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 hover:border-primary/40 hover:bg-white/[0.08] transition-all"
                  href="#"
                  aria-label="Get it on Google Play"
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
                    <div className="text-[10px] uppercase tracking-wider text-slate-400">Get it on</div>
                    <div className="text-lg font-bold">Google Play</div>
                  </div>
                </a>
                <a
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 hover:border-primary/40 hover:bg-white/[0.08] transition-all"
                  href="#"
                  aria-label="Download on the App Store"
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
                    <div className="text-[10px] uppercase tracking-wider text-slate-400">Download on</div>
                    <div className="text-lg font-bold">App Store</div>
                  </div>
                </a>
              </div>
              <button className="flex items-center gap-3 bg-primary/10 text-primary px-6 py-4 rounded-xl font-bold border border-primary/20 hover:bg-primary/20 transition-all">
                <span className="material-symbols-outlined">download</span>
                <span>Download APK</span>
              </button>
            </div>

            <div className="pt-8 border-t border-white/5 flex flex-wrap gap-8 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-2xl">shield</span>
                <span className="font-bold">Cure53 Audited</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-2xl">verified_user</span>
                <span className="font-bold">PwC Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-2xl">visibility_off</span>
                <span className="font-bold">No-Logs Policy</span>
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
                      <span className="text-xs uppercase text-slate-400 font-bold tracking-widest">Status</span>
                      <span className="text-2xl font-bold text-primary flex items-center gap-2">
                        Protected
                        <span className="material-symbols-outlined text-lg">verified</span>
                      </span>
                    </div>
                    <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/40">
                      <span className="material-symbols-outlined text-primary">lock</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-background-dark/50 p-4 rounded-xl border border-white/5">
                      <p className="text-xs text-slate-400 font-medium">Server</p>
                      <p className="text-lg font-bold">London #4</p>
                      <p className="text-[10px] text-primary mt-1 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[12px]">public</span>
                        United Kingdom
                      </p>
                    </div>
                    <div className="bg-background-dark/50 p-4 rounded-xl border border-white/5">
                      <p className="text-xs text-slate-400 font-medium">Ping</p>
                      <p className="text-lg font-bold">12ms</p>
                      <p className="text-[10px] text-green-400 mt-1 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[12px]">bolt</span>
                        Ultra-Low
                      </p>
                    </div>
                  </div>
                  <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[85%] rounded-full shadow-[0_0_8px_#13c8ec]"></div>
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-tighter opacity-60">
                    <span>AES-256-GCM</span>
                    <span>WireGuard v2.4</span>
                  </div>
                </div>
              </div>

              <div className="absolute top-8 right-8 glass-nav p-3 rounded-xl border border-white/10 animate-bounce">
                <span className="material-symbols-outlined text-primary">security</span>
              </div>
              <div className="absolute bottom-12 left-12 glass-nav p-3 rounded-xl border border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <span className="text-[10px] font-bold uppercase">Live Map Active</span>
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
            <span className="text-slate-500 text-sm">Active Connections</span>
            <span className="text-3xl font-bold">1.2M+</span>
          </div>
          <div className="flex flex-col gap-1 p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
            <span className="text-slate-500 text-sm">Server Locations</span>
            <span className="text-3xl font-bold">94+</span>
          </div>
          <div className="flex flex-col gap-1 p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
            <span className="text-slate-500 text-sm">Avg Speed Up</span>
            <span className="text-3xl font-bold">400%</span>
          </div>
          <div className="flex flex-col gap-1 p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
            <span className="text-slate-500 text-sm">Uptime</span>
            <span className="text-3xl font-bold">99.9%</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
