import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Space_Grotesk, Plus_Jakarta_Sans, Fira_Code, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400', '500', '600', '700'], display: 'swap', variable: '--font-display' })
const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800'], display: 'swap', variable: '--font-body' })
const firaCode = Fira_Code({ subsets: ['latin'], weight: ['400', '500'], display: 'swap', variable: '--font-mono' })
const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '500', '600'], style: ['italic', 'normal'], display: 'swap', variable: '--font-serif' })



export const metadata: Metadata = {
  metadataBase: new URL('https://vrindavandev.in'),
  title: {
    default: 'VrindavanDev | Digital Growth Agency, SEO & Web Development Vrindavan',
    template: '%s | VrindavanDev',
  },
  description:
    'Top-rated Digital Growth Agency in Vrindavan, UP. Expert in Google Maps Ranking, local SEO, Web Development, Meta Ads, and WhatsApp Automation for local businesses.',
  keywords: [
    'digital marketing agency vrindavan',
    'website design mathura vrindavan',
    'SEO services vrindavan',
    'google maps ranking mathura',
    'meta ads agency mathura',
    'whatsapp automation agency',
    'local marketing vrindavan agra',
    'web development agency mathura',
    'VrindavanDev',
  ],
  authors: [{ name: 'VrindavanDev', url: 'https://vrindavandev.in' }],
  creator: 'VrindavanDev',
  publisher: 'VrindavanDev',
  alternates: {
    canonical: 'https://vrindavandev.in',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://vrindavandev.in',
    siteName: 'VrindavanDev',
    title: 'VrindavanDev - Digital Growth Agency from Vrindavan, India',
    description:
      'Building websites, ranking local businesses on Google Maps, running Meta Ads, and setting up WhatsApp CRM/automations from Vrindavan.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'VrindavanDev Digital Agency Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VrindavanDev - Digital Growth Agency',
    description: 'Web development, Local SEO, Meta Ads & WhatsApp CRM from Vrindavan, India.',
    images: ['/og-image.png'],
    creator: '@vrindavandev',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'ADD_GOOGLE_SEARCH_CONSOLE_CODE_HERE',
  },
  category: 'technology',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'VrindavanDev',
  },
}

export const viewport: Viewport = {
  themeColor: '#D4AF37',
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'VrindavanDev',
  alternateName: 'VrindavanDev Digital Agency',
  url: 'https://vrindavandev.in',
  logo: 'https://vrindavandev.in/logo.png',
  image: 'https://vrindavandev.in/og-image.png',
  description:
    'Full Stack Development and Digital Marketing services in Vrindavan, UP. Web development, SEO, Meta Ads, WhatsApp CRM.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Vrindavan',
    addressLocality: 'Vrindavan',
    addressRegion: 'Uttar Pradesh',
    postalCode: '281121',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '27.5794',
    longitude: '77.6960',
  },
  telephone: '+91-7906630435',
  email: 'hello@vrindavandev.in',
  priceRange: 'INR INR',
  openingHours: 'Mo-Sa 09:00-20:00',
  areaServed: ['Vrindavan', 'Mathura', 'Agra', 'Delhi NCR', 'India'],
  serviceType: [
    'Web Development',
    'Digital Marketing',
    'SEO Services',
    'Meta Ads Management',
    'WhatsApp CRM',
    'AI Automation',
  ],
  hasMap: 'https://maps.google.com/?q=Vrindavan+UP+India',
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'VrindavanDev',
  url: 'https://vrindavandev.in',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://vrindavandev.in/?s={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="ld-localbusiness" strategy="afterInteractive" type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </Script>
        <Script id="ld-website" strategy="afterInteractive" type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </Script>
      </head>
      <body className={`${spaceGrotesk.variable} ${plusJakarta.variable} ${firaCode.variable} ${cormorant.variable} ${plusJakarta.className}`}>

        {children}
      </body>
    </html>
  )
}
