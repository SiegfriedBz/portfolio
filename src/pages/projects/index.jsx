import { AnimatedText } from '@/components/AnimatedText'
import FeaturedProject from '@/components/FeaturedProject'
import Project from '@/components/Project'
import PageLayout from '@/components/layouts/PageLayout'
import Head from 'next/head'

const meta = {
  title: 'Siegfried Bozza | Next.JS Portfolio | Projects Page',
  description:
    'As a full-stack web developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects, showcasing my skills in React.js, Next.js and web development.',
}

const Projects = () => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name='description' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
      </Head>
      <main className='mb-16 flex w-full flex-col items-center justify-center'>
        <PageLayout className='pt-8 sm:pt-16'>
          <AnimatedText
            text='Passion Fuels Purpose!'
            className='mb-8 text-4xl font-bold sm:mb-16 sm:text-5xl lg:text-6xl'
          />
          <div className='grid grid-cols-1 gap-24 xl:grid-cols-12'>
            <div className='col-span-1 xl:col-span-12'>
              <FeaturedProject
                stack='React.JS | Tailwind'
                title='Crypto Screener Application'
                summary='A feature-rich Crypto Screener App using React, Tailwind, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency.'
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1695354619/portfolio/next_portfolio_project_01`}
                link='https://aquaman-surf-bali.vercel.app/'
                gitHub=''
              />
            </div>

            <div className='col-span-1 xl:col-span-6'>
              <Project
                stack='React.JS | RoRails | Bootstrap'
                title='SwapBnb'
                summary='A feature-rich Crypto Screener App using React, Tailwind, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency.'
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1695354619/portfolio/next_portfolio_project_01`}
                link='https://aquaman-surf-bali.vercel.app/'
                gitHub=''
              />
            </div>
            <div className='col-span-1 xl:col-span-6'>
              <Project
                stack='MERN | Bootstrap'
                title='JobHunter'
                summary='A feature-rich Crypto Screener App using React, Tailwind, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency.'
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1695354619/portfolio/next_portfolio_project_01`}
                link='https://aquaman-surf-bali.vercel.app/'
                gitHub=''
              />
            </div>

            <div className='col-span-1 xl:col-span-12'>
              <FeaturedProject
                stack='Solidity | Ethers.JS | Hardhat | Next.JS | Tailwind'
                title='Win2Gether No Loss Lottery'
                summary='A feature-rich Crypto Screener App using React, Tailwind, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency.'
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1695354619/portfolio/next_portfolio_project_01`}
                link='https://aquaman-surf-bali.vercel.app/'
                gitHub=''
                reverse
              />
            </div>
            {/* <div className='col-span-12 md:col-span-6'>
              <Project
                stack='React.JS | Cypress'
                title='XXXX'
                summary='A feature-rich Crypto Screener App using React, Tailwind, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency.'
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1695354619/portfolio/next_portfolio_project_01`}
                link='https://aquaman-surf-bali.vercel.app/'
                gitHub=''
              />
            </div>
            <div className='col-span-12 md:col-span-6'>
              <Project
                stack='React.JS | TypeScript | Tailwind'
                title='XXXX'
                summary='A feature-rich Crypto Screener App using React, Tailwind, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency.'
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1695354619/portfolio/next_portfolio_project_01`}
                link='https://aquaman-surf-bali.vercel.app/'
                gitHub=''
              />
            </div> */}
            <div className='col-span-1 xl:col-span-12'>
              <FeaturedProject
                stack='Next.JS | Tailwind'
                title='React Portfolio Website'
                summary='A feature-rich Crypto Screener App using React, Tailwind, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency.'
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1695354619/portfolio/next_portfolio_project_01`}
                link='https://aquaman-surf-bali.vercel.app/'
                gitHub=''
              />
            </div>
            {/* <div className='col-span-12 md:col-span-6'>
              <Project
                stack='Next.JS | Tailwind'
                title='Aquaman Bali'
                summary='A feature-rich Crypto Screener App using React, Tailwind, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency.'
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1695354619/portfolio/next_portfolio_project_01`}
                link='https://aquaman-surf-bali.vercel.app/'
                gitHub=''
              />
            </div>
            <div className='col-span-12 md:col-span-6'>
              <Project
                stack='Next.JS | Dato-CMS | Tailwind'
                title='Courses Landing Page'
                summary='A feature-rich Crypto Screener App using React, Tailwind, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency.'
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1695354619/portfolio/next_portfolio_project_01`}
                link='https://aquaman-surf-bali.vercel.app/'
                gitHub=''
              />
            </div> */}
          </div>
        </PageLayout>
      </main>
    </>
  )
}

export default Projects
