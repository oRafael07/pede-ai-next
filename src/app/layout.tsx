import './globals.css'
import { Roboto } from 'next/font/google'
import React from 'react'
import { ThemeContextProvider } from '@/context/ThemeContext'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
})

export const metadata = {
  title: 'Pede AI - Administrativo',
  description: 'Powered by Rafa DEV',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeContextProvider>
      <html lang="en">
        <body className={roboto.className}>{children}</body>
      </html>
    </ThemeContextProvider>
  )
}
