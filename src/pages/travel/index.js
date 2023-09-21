import { AnimatedText } from '@/components/AnimatedText'
import MapView from '@/components/MapView'
import PageLayout from '@/components/layouts/PageLayout'
import Head from 'next/head'

const meta = {
  title: 'Siegfried Bozza | Next.JS Portfolio | Travel Page',
  description:
    'As a full-stack web developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects, showcasing my skills in React.js, Next.js and web development.',
}

const index = () => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name='description' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
      </Head>
      <main className='flex w-full flex-col items-center justify-center'>
        <PageLayout className='pt-16'>
          <AnimatedText
            text='Passion Fuels Purpose!'
            className='mb-16 text-7xl font-bold'
          />
          <MapView />
        </PageLayout>
      </main>
    </>
  )
}

export default index
