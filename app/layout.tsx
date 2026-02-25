import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NovaList — AI-Powered Growth for UK Service Businesses',
  description: 'We help UK service businesses automate their marketing, generate leads, and scale operations with AI. Save 20+ hours/week and grow faster.',
  metadataBase: new URL('https://novalist.co'),
  openGraph: {
    title: 'NovaList — AI-Powered Growth for UK Service Businesses',
    description: 'Automate your marketing, generate qualified leads, and scale operations with AI. Save 20+ hours/week.',
    url: 'https://novalist.co',
    siteName: 'NovaList',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NovaList — AI-Powered Growth for UK Service Businesses',
    description: 'Automate your marketing, generate qualified leads, and scale operations with AI.',
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
