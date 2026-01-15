import "./globals.css"
import Script from "next/script"
import { Space_Grotesk } from "next/font/google"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
})


export const metadata = {
  title: "VexiraVpn - Reclaim your Digital Shadow",
  description:
    "VexiraVpn delivers next-gen encryption, ultra-fast WireGuard speeds, and a strict no-logs policy for true online freedom.",
  icons: {
    icon: "/vexira-favicon.svg",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <Script src="https://cdn.tailwindcss.com?plugins=forms,container-queries" strategy="beforeInteractive" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <Script
          id="tailwind-config"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#13c8ec",
        "background-light": "#f6f8f8",
        "background-dark": "#101f22",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
};`,
          }}
        />
      </head>
      <body className={`${spaceGrotesk.className} bg-background-light dark:bg-background-dark font-display text-white selection:bg-primary/30`}>
        {children}
      </body>
    </html>
  )
}
