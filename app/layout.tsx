import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GlamCS',
  description: 'GlamCS cosmetics - Elevate your beauty with our modern and luxurious products.',
  keywords: ['cosmetics', 'GlamCS', 'modern', 'luxury', 'beauty'],
  authors: [{ name: 'GlamCS' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="">
      <body className={`${inter.className} bg-white text-orange-600 min-h-screen antialiased`}>
        <div className="relative min-h-screen bg-gradient-to-br from-orange-500 via-white/20 to-orange-500">
          {children}
        </div>
      </body>
    </html>
  )
}