import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"

const mono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Egg Labs - Accessible Technology for Everyone",
  description: "Making highly capable technology accessible to anyone through AI, automation, and simple solutions.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased">
      <body className={mono.className}>{children}</body>
    </html>
  )
}



import './globals.css'