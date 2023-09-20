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
      <main className='flex min-h-screen w-full text-dark dark:text-light'>
        <PageLayout className='pt-8 sm:pt-16 lg:pt-0'>
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
              <div className='flex w-full justify-center gap-2 font-semibold md:justify-start md:gap-4'>
                <a
                  className='flex min-w-[50%] rounded-2xl border border-solid border-dark bg-dark px-8 py-4 text-light transition duration-500 ease-in-out hover:border-dark hover:bg-light hover:text-dark
                   dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light'
                  href='./CV_siegfried_bozza.pdf'
                  download={true}
                >
                  <span className='mx-auto flex items-center  gap-3 text-lg sm:text-xl '>
                    <FontAwesomeIcon
                      icon={faCloudArrowDown}
                      className='w-5 md:w-6'
                    />
                    Resume
                  </span>
                </a>
                <a
                  className='flex min-w-[50%] rounded-2xl border border-solid border-dark bg-dark px-8 py-4 text-light transition duration-500 ease-in-out hover:border-dark hover:bg-light hover:text-dark
                   dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light'
                  href='mailto:siegfried.bozza@yahoo.com'
                  target='_blank'
                >
                  <span className='mx-auto flex items-center gap-3 text-lg sm:text-xl'>
                    <FontAwesomeIcon
                      icon={faPaperPlane}
                      className='w-4 md:w-5'
                    />
                    <span>Mail</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </PageLayout>

        <HireMe />
      </main>
    </>
  )
}
