import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from "@/components/Header"
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: process.env.siteTitle,
  description: "With Interview Spice, you can search spices, blends, get help in your search from our awesome user interface and filters, and understand your seasoning options.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header title={process.env.siteTitle} />
        <main className="p-12">
          {children}
        </main>
      </body>
    </html>
  )
}
