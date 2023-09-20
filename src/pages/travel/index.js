import { AnimatedText } from '@/components/AnimatedText'
import MapView from '@/components/MapView'
import PageLayout from '@/components/layouts/PageLayout'
import Head from 'next/head'
import React from 'react'

const index = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Travel</title>
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
