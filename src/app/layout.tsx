import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RCMAlpha - Certified Professional Biller Training',
  description: 'Pakistan\'s #1 Revenue Cycle Management training program. Transform your healthcare career with CPB certification. 98% success rate, 500+ certified professionals.',
  keywords: 'RCM training, medical billing, CPB certification, revenue cycle management, Pakistan, healthcare career',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'RCMAlpha - Certified Professional Biller Training',
    description: 'CPB-accredited training program with 98% success rate. Join 500+ certified healthcare professionals.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
