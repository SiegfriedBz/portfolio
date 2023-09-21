import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'
import Head from 'next/head'
import RootLayout from '@/components/layouts/rootLayout'
import generateSocialImage from '../utils/generateSocialImage'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-mont' })

const socialImageConf = generateSocialImage({
  title: 'Next.JS Portfolio',
  cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  imagePublicID: 'og_social_next_portfolio',
})

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
        <RootLayout imageUrl={socialImageConf}>
          <Component {...pageProps} />
        </RootLayout>
      </main>
    </>
  )
}
