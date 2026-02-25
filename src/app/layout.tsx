import type { Metadata } from "next"
import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "PrepFlow — AI LSAT Prep Matching Plateaus to Breakthroughs",
  description:
    "Stop wasting hours searching Reddit and YouTube. PrepFlow uses AI to match your LSAT plateau to breakthrough resources that actually work for your score range.",
  keywords: ["LSAT prep", "LSAT resources", "LSAT study", "law school prep", "LSAT plateau"],
  openGraph: {
    title: "PrepFlow — AI LSAT Prep Matching Plateaus to Breakthroughs",
    description:
      "Stop wasting hours searching Reddit and YouTube. PrepFlow uses AI to match your LSAT plateau to breakthrough resources.",
    type: "website",
    url: "https://prepflow.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "PrepFlow — AI LSAT Prep",
    description: "AI matches your LSAT plateau to breakthrough resources.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-background antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  )
}
