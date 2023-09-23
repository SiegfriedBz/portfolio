import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'
import RootLayout from '../components/layouts/RootLayout'
import { Analytics } from '@vercel/analytics/react'
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-mont' })

export default function App({ Component, pageProps }) {
  return (
    <main
      className={`${montserrat.variable} min-h-screen w-full bg-light font-mont dark:bg-dark dark:text-light`}
    >
      <RootLayout
        socialUmageUrl={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,h_630/v1695276302/portfolio/og_social_next_portfolio`}
      >
        <Component {...pageProps} />
        <Analytics />
      </RootLayout>
    </main>
  )
}
