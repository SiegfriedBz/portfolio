import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { AppContextProvider } from '@/context/AppContext'

const RootLayout = (props) => {
  const { children, ...customMeta } = props
  const router = useRouter()

  const meta = {
    canonicalUrl: `https://siegfried-bozza-next-portfolio.vercel.app${router.asPath}`,
    ...customMeta,
  }

  return (
    <>
      <Head>
        <meta property='og:url' content={meta.canonicalUrl} />
        <link rel='canonical' href={meta.canonicalUrl} />
        <meta property='og:image' content={meta.socialUmageUrl} />
      </Head>
      <Navbar />
      <AppContextProvider>
        {children}
        <Footer />
      </AppContextProvider>
    </>
  )
}

export default RootLayout
