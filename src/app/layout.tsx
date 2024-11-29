import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { AppHeader } from './components/AppHeader'

import '@fontsource-variable/montserrat';

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
      <body className="w-full">
        <AppHeader />
        <main className='p-4 pt-10'>{children}</main>
      </body>
    </html>
  )
}
