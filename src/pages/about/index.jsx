import { AnimatedText } from '@/components/AnimatedText'
import PageLayout from '@/components/layouts/PageLayout'
import Head from 'next/head'
import Image from 'next/image'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'

const meta = {
  title: 'Siegfried Bozza | Next.JS Portfolio | About Page',
  description:
    'As a full-stack web developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects, showcasing my skills in React.js, Next.js and web development.',
}

const About = () => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name='description' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
      </Head>
      <main className='relative flex min-h-screen w-full text-dark dark:text-light'>
        <PageLayout className='pt-8 sm:pt-16'>
          <AnimatedText
            text='Passion Fuels Purpose!'
            className='mb-8 text-4xl font-bold sm:mb-16 sm:text-5xl lg:text-6xl'
          />
          <div className='grid w-full grid-cols-7 gap-8'>
            <div className='order-2 col-span-7 flex flex-col items-start justify-start lg:order-1 lg:col-span-4'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 sm:text-xl'>
                About Me
              </h2>
              <p className='text-justify text-sm font-medium sm:text-lg'>
                Hi, I&apos;m CodeBucks, a web developer and UI/UX designer with
                a passion for creating beautiful, functional, and user-centered
                digital experiences. With 4 years of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients&apos; visions to life.
              </p>
              <p className='my-4 text-justify text-sm font-medium sm:text-lg'>
                Whether I&apos;m working on a website, mobile app, or other
                digital product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
              <p className='my-4 text-justify text-sm font-medium sm:text-lg'>
                Whether I&apos;m working on a website, mobile app, or other
                digital product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <div
              className='order-1 col-span-7 flex h-max w-full self-center rounded-2xl border-2 border-solid border-dark
             bg-light shadow-2xl
              dark:border-light dark:bg-dark lg:order-2
               lg:col-span-3'
            >
              <Image
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1695303227/portfolio/next_portfolio_image_01`}
                className='w-full rounded-2xl object-cover'
                width='1080'
                height='1080'
                alt='Siegfried profile'
                priority
                sizes='(max-width: 768px) 100vw, 50vw'
              />
            </div>
          </div>
          <Skills />
          {/* <Experience /> */}
          {/* <Education /> */}
        </PageLayout>
      </main>
    </>
  )
}

export default About
