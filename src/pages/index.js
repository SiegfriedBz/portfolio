import Image from 'next/image'
import Head from 'next/head'
import { motion } from 'framer-motion'
import PageLayout from '@/components/layouts/PageLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCloudArrowDown,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons'
import profilePic from '../../public/images/developer-pic-1.png'
import { AnimatedText } from '@/components/AnimatedText'
import HireMe from '@/components/HireMe'

const MotionImage = motion(Image)

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | Home Page</title>
        <meta name='description' content='Portfolio' />
      </Head>
      <main className='relative flex min-h-screen w-full text-dark dark:text-light'>
        <PageLayout className=' pt-8 sm:pt-16 lg:pt-0'>
          <div className='flex flex-col items-center justify-between lg:flex-row'>
            <div className='w-full md:hidden lg:inline-block lg:w-1/2'>
              <MotionImage
                drag={true}
                dragConstraints={{
                  top: -50,
                  left: -50,
                  right: 50,
                  bottom: 50,
                }}
                src={profilePic}
                className='h-auto w-full'
                alt='Web developer profile'
                priority
                sizes='(max-width: 768px) 100vw, 50vw'
              />
            </div>
            <div className='flex w-full flex-col items-center justify-center md:w-full lg:w-1/2'>
              <AnimatedText
                text='Turning Vision Into Reality With Code And Design.'
                className='!text-center text-4xl font-bold sm:text-5xl md:text-6xl lg:!text-left lg:text-7xl'
              />
              <p className='my-5 text-center text-xl lg:text-justify'>
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className='mx-auto flex w-full items-center justify-center font-semibold md:justify-start'>
                <a
                  className='flex min-w-[30%] rounded-2xl border border-solid border-dark bg-dark px-8 py-4 text-light transition duration-500 ease-in-out hover:border-dark hover:bg-light hover:text-dark
                  dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light'
                  href='./CV_siegfried_bozza.pdf'
                  download={true}
                >
                  <span className='flex items-center justify-center text-lg sm:text-xl'>
                    <span>
                      <FontAwesomeIcon
                        icon={faCloudArrowDown}
                        className='w-5 md:w-6'
                      />
                    </span>
                    <span className='px-2'>Resume</span>
                  </span>
                </a>

                <a
                  className='flex ps-8 text-dark transition duration-500 ease-in-out dark:text-light
                  '
                  href='mailto:siegfried.bozza@yahoo.com'
                  target='_blank'
                >
                  <span className='flex items-center text-lg sm:gap-3 sm:text-xl'>
                    <FontAwesomeIcon
                      icon={faPaperPlane}
                      className='w-4 md:w-5'
                    />
                    <span className='px-2 underline underline-offset-2'>
                      Mail
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <HireMe customClass='hidden md:inline-block md:fixed md:bottom-3 md:left-3' />
          <HireMe customClass='md:hidden absolute -top-20 right-1' />
        </PageLayout>
      </main>
    </>
  )
}
