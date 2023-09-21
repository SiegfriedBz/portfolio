import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import { useRouter } from 'next/router'

const RootLayout = (props) => {
  const { children, ...customMeta } = props
  const router = useRouter()

  const meta = {
    canonicalUrl: `https://siegfried-bozza-next-portfolio.vercel.app/${router.asPath}`,
    ...customMeta,
  }

  return (
    <>
      <Head>
        <meta name='robots' content='follow, index' />
        <meta name='keywords' content='Siegfried Bozza, Web Developer'></meta>
        <meta property='og:url' content={meta.canonicalUrl} />
        <link rel='canonical' href={meta.canonicalUrl} />
        <meta
          property='og:site_name'
          content='Siegfried Bozza | Next.JS Portfolio'
        />
        <meta property='og:image' content={meta.socialUmageUrl} />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default RootLayout
