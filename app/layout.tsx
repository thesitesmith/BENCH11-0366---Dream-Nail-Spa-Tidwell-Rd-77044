import type { Metadata } from 'next'
import { Lora, Karla } from 'next/font/google'
import './globals.css'
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import Beacon from '../components/Beacon';

export const metadata = {
  title: "Dream Nail Spa | Nail salon in Houston, TX",
  description: "Dream Nail Spa, Nail salon in Houston, TX. Known for attention to detail. Call (281) 835-4144.",
  openGraph: {
    title: "Dream Nail Spa | Nail salon in Houston, TX",
    description: "Dream Nail Spa, Nail salon in Houston, TX. Known for attention to detail. Call (281) 835-4144.",
    type: "website",
    images: ["/images/og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dream Nail Spa | Nail salon in Houston, TX",
    description: "Dream Nail Spa, Nail salon in Houston, TX. Known for attention to detail. Call (281) 835-4144.",
    images: ["/images/og.jpg"],
  },
};


const lora = Lora({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-heading',
})

const karla = Karla({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${karla.variable} font-body bg-brand-background text-brand-text antialiased`}>
        <LocalBusinessSchema />
        <Beacon />
        {children}
      </body>
    </html>
  )
}
