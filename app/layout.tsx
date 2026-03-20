import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MIAN Group — Full-Service Manufacturing Partner, Vietnam',
  description: 'Premium garment manufacturing partner. 7 factories. 8.8M pieces per month. Where fashion is made.',
  keywords: 'garment manufacturer vietnam, fashion manufacturing, CMT factory, sustainable manufacturing',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500&family=IBM+Plex+Mono:wght@300;400;500&family=Inter:wght@300;400&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
