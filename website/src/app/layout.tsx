import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import SmoothScroll from '@/components/SmoothScroll'
import Cursor from '@/components/Cursor'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Future Real Estate - Next-Gen Property Platform',
  description: 'Experience the future of real estate with AI-powered property matching, virtual reality tours, and smart home integration.',
  keywords: 'real estate, property, AI, virtual reality, smart homes, blockchain',
  authors: [{ name: 'Future Real Estate' }],
  openGraph: {
    title: 'Future Real Estate - Next-Gen Property Platform',
    description: 'Experience the future of real estate with AI-powered property matching, virtual reality tours, and smart home integration.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <SmoothScroll />
        <Cursor />
        {children}
      </body>
    </html>
  )
}

