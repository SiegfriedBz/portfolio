import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'
import Head from 'next/head'
import RootLayout from '../components/layouts/RootLayout'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-mont' })

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main
        className={`${montserrat.variable} min-h-screen w-full bg-light font-mont dark:bg-dark dark:text-light`}
      >
        <RootLayout
          socialUmageUrl={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,h_630/v1695276302/portfolio/og_social_next_portfolio`}
        >
          <Component {...pageProps} />
        </RootLayout>
      </main>
    </>
  )
}
