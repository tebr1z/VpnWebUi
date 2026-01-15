import "./globals.css"


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
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background-light dark:bg-background-dark font-display text-white selection:bg-primary/30">
        {children}
      </body>
    </html>
  )
}
