import './globals.css'
import React from 'react'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'QuickMech',
  description: 'On-demand mechanic & roadside assistance'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-white/95">
          <Navbar />
          <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
          <footer className="border-t py-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} QuickMech — Fast roadside help
          </footer>
        </div>
      </body>
    </html>
  )
}
