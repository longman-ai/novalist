import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NovaList — AI-Powered Marketing & Growth for UK Service Businesses',
  description: 'We help UK service businesses automate their marketing, generate qualified leads, and scale operations with AI. Content engines, lead generation, and automation infrastructure — save 20+ hours/week and grow faster. Book a free discovery call today.',
  keywords: [
    'AI marketing agency UK',
    'AI content engine',
    'AI lead generation UK',
    'marketing automation UK',
    'B2B marketing agency',
    'UK service business marketing',
    'AI-powered marketing',
    'content marketing automation',
    'lead generation service businesses',
    'marketing agency for accountants',
    'marketing agency for tradespeople',
    'NovaList',
  ],
  metadataBase: new URL('https://novalist.co'),
  openGraph: {
    title: 'NovaList — AI-Powered Marketing & Growth for UK Service Businesses',
    description: 'Automate your marketing, generate qualified leads, and scale with AI. Content engines, lead gen, and automation for UK B2B service businesses.',
    url: 'https://novalist.co',
    siteName: 'NovaList',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NovaList — AI-Powered Marketing for UK Service Businesses',
    description: 'Content engines, lead generation, and automation infrastructure. Save 20+ hours/week. Book a free discovery call.',
  },
  alternates: {
    canonical: 'https://novalist.co',
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-navy`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
