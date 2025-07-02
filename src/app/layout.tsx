import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jacob Farrington Portfolio',
  description: 'Portfolio of projects.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

function Navbar() {
  return (
    <nav className="w-full py-4 px-8 flex justify-end space-x-6 text-lg font-medium fixed top-0 right-0 bg-white/80 backdrop-blur z-50">
      <a href="/" className="hover:underline">Home</a>
      <a href="/resume.pdf" target="_blank" className="hover:underline">Resume</a>
      <a href="/portfolio" className="hover:underline">Portfolio</a>
      <a href="/about" className="hover:underline">About Me</a>
      <a href="/contact" className="hover:underline">Contact me</a>
    </nav>
  )
}

