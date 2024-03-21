import './globals.css'
import type { Metadata } from 'next'
import { Goldman, Inconsolata } from 'next/font/google'
import Head from 'next/head';

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
  description: 'Build bleeding edge applications with me! I help businesses build and deploy scalable applications to grow their business.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="images/favicon.ico" sizes="any" />
      </Head>
      <body className={`${goldman.variable} ${meslo.variable}`}>
        {children}
      </body>
    </html>
  )
}
