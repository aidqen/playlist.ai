import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

export const metadata: Metadata = {
  title: 'Daily Planner',
  description: 'A daily planner app enhanced with AI',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className='bg-night p-4 w-full'>
        {children}
        </body>
    </html>
  )
}
