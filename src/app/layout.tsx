import './globals.css'
import type { Metadata } from 'next'
import { Goldman, Inconsolata } from 'next/font/google'

const goldman = Goldman({
  weight: "700",
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-goldman',
});

const meslo = Inconsolata({
  weight: "700",
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-meslo',
});

export const metadata: Metadata = {
  title: 'Kavienan J | Full-Stack Developer',
  description: 'Explore my work on Flutter, Next.js, Firebase, Figma, LLMs and more.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${goldman.variable} ${meslo.variable}`}>
        {children}
      </body>
    </html>
  )
}
