import type { Metadata } from 'next'
import './globals.css'
import { AppHeader } from './components/AppHeader'

import '@fontsource-variable/montserrat';
import { Sidebar } from './components/Sidebar';

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
        {/* <Sidebar /> */}
        <AppHeader />
        <main className='p-4 pt-10'>{children}</main>
      </body>
    </html>
  )
}
