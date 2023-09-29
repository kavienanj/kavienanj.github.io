import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: "400", subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kavienan J | Full-Stack Developer',
  description: 'Explore my work on Flutter, Next.js, Firebase, Figma, LLMs and more.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
