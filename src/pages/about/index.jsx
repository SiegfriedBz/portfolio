import { AnimatedText } from '@/components/AnimatedText'
import PageLayout from '@/components/layouts/PageLayout'
import Head from 'next/head'
import Image from 'next/image'
import profileImage from '../../../public/images/developer-pic-2.jpg'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'

const About = () => {
  return (
    <>
      <Head>
        <title>Portfolio | About Page</title>
        <meta name='description' content='About Me' />
      </Head>
      <main className='flex w-full flex-col items-center justify-center'>
        <PageLayout className='pt-16'>
          <AnimatedText
            text='Passion Fuels Purpose!'
            className='mb-16 text-7xl font-bold'
          />
          <div className='grid w-full grid-cols-7 gap-32'>
            <div className='col-span-4 flex flex-col items-start justify-start'>
              <h2 className='mb-4 text-xl font-bold uppercase text-dark/75 dark:text-light/75'>
                About Me
              </h2>
              <p className='text-justify text-lg font-medium'>
                Hi, I&apos;m CodeBucks, a web developer and UI/UX designer with
                a passion for creating beautiful, functional, and user-centered
                digital experiences. With 4 years of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients&apos; visions to life.
              </p>
              <p className='my-4 text-justify text-lg font-medium'>
                I believe that design is about more than just making things look
                pretty - it&apos;s about solving problems and creating
                intuitive, enjoyable experiences for users.
              </p>
              <p className='my-4 text-justify text-lg font-medium'>
                Whether I&apos;m working on a website, mobile app, or other
                digital product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
              <p className='my-4 text-justify text-lg font-medium'>
                Whether I&apos;m working on a website, mobile app, or other
                digital product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
              <p className='text-justify text-lg font-medium'>
                Whether I&apos;m working on a website, mobile app, or other
                digital product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>

            <div className='col-span-3 flex h-max w-full self-start rounded-2xl border-2 border-solid border-dark bg-light p-4 shadow-2xl dark:border-light dark:bg-dark'>
              <Image
                src={profileImage}
                className='w-full rounded-2xl object-cover'
                alt='Siegfried profile'
                priority
                sizes='(max-width: 768px) 100vw, 50vw'
              />
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </PageLayout>
      </main>
    </>
  )
}

export default About
