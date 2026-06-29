import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RCMAlpha | Medical Billing Course in Pakistan | CPB Certification',
  description: 'Pakistan\'s leading Revenue Cycle Management training center with CPB-accredited courses and expert-led instruction.',
  keywords: 'RCM training, medical billing, medical billing course, Rawalpindi, CPB certification, revenue cycle management, Pakistan, healthcare career',
  icons: {
    icon: '/favicon1-removebg-preview.png',
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
