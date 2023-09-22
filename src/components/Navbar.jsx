import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { useThemeMode } from '@/hooks/useThemeMode'
import SocialLinks from './SocialLinks'
import Logo from './Logo'
import { MoonIcon, SunIcon } from '../components/Icons'
import ModalBackDrop from './ModalBackDrop'

const burgerVariants = {
  open: {
    rotate: 720,
    transition: {
      duration: 0.5,
    },
  },
  close: {
    rotate: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const Navbar = () => {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)
  const [themeColor, setThemeColor] = useThemeMode()
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const toggleThemeColor = () => {
    setThemeColor(themeColor === 'light' ? 'dark' : 'light')
  }

  const isHomePage = router.asPath === '/'

  return (
    <>
      <header className='relative flex w-full items-center justify-between px-8 py-8 font-medium sm:px-12 md:px-24 lg:px-12 xl:px-32'>
        {/* mobile: burger */}
        <motion.button
          onClick={() => setMobileMenuIsOpen((prev) => !prev)}
          variants={burgerVariants}
          animate={mobileMenuIsOpen ? 'open' : 'close'}
          className='z-30 flex flex-col justify-center gap-2 lg:hidden'
        >
          <span
            className={`${
              mobileMenuIsOpen ? 'translate-y-[0.7rem] rotate-45' : 'rotate-0'
            } block h-0.5 w-8 rounded-sm bg-dark dark:bg-light`}
          ></span>
          <span
            className={`${
              mobileMenuIsOpen ? 'opacity-0' : 'animate-pulse opacity-100'
            } block h-1 w-4 self-center rounded-sm bg-primary dark:bg-primaryDark`}
          ></span>
          <span
            className={`${
              mobileMenuIsOpen ? '-translate-y-[0.7rem] -rotate-45' : 'rotate-0'
            } block h-0.5 w-8 rounded-sm bg-dark dark:bg-light`}
          ></span>
        </motion.button>

        {/* desktop: nav */}
        <nav className='hidden gap-4 lg:flex'>
          <CustomLink As={Link} href='/' title='Home' />
          <CustomLink As={Link} href='/about' title='About' />
          <CustomLink As={Link} href='/projects' title='Projects' />
          <CustomLink As={Link} href='/travel' title='Travel' />
        </nav>

        {/* desktop: toggle Theme Icon & SocialLinks */}
        <nav className='flex w-1/2 items-center lg:gap-4'>
          <button
            onClick={toggleThemeColor}
            className={`${
              isHomePage ? 'ms-[33%] md:ms-auto' : 'ms-auto'
            } z-30 lg:me-5`}
          >
            {isClient ? (
              themeColor === 'light' ? (
                <MoonIcon className='fill-dark dark:fill-light' />
              ) : (
                <SunIcon className='fill-dark dark:fill-light' />
              )
            ) : (
              ''
            )}
          </button>
          <span className='hidden gap-4 lg:flex'>
            <SocialLinks />
          </span>
        </nav>

        {/* Logo */}
        <div className='absolute left-1/2 z-30 -translate-x-1/2'>
          <Logo setMobileMenuIsOpen={setMobileMenuIsOpen} />
        </div>
      </header>

      {/* mobile: backdrop & menu */}
      <ModalBackDrop
        mobileMenuIsOpen={mobileMenuIsOpen}
        setMobileMenuIsOpen={setMobileMenuIsOpen}
        className='z-30'
      >
        <div className='w-full py-5'>
          <nav className='flex flex-col items-center justify-center gap-1'>
            <CustomLink
              As={'button'}
              handleClick={() => {
                router.push('/')
                setMobileMenuIsOpen(false)
              }}
              href='/'
              title='Home'
            />
            <CustomLink
              As={'button'}
              handleClick={() => {
                router.push('/about')
                setMobileMenuIsOpen(false)
              }}
              href='/about'
              title='About'
            />
            <CustomLink
              As={'button'}
              handleClick={() => {
                router.push('/projects')
                setMobileMenuIsOpen(false)
              }}
              href='/projects'
              title='Projects'
            />
            <CustomLink
              As={'button'}
              handleClick={() => {
                router.push('/travel')
                setMobileMenuIsOpen(false)
              }}
              href='/travel'
              title='Travel'
            />
          </nav>
          <div className='mt-5 flex w-full items-center justify-center gap-8'>
            <SocialLinks modal={true} />
          </div>
        </div>
      </ModalBackDrop>
    </>
  )
}

export default Navbar

const CustomLink = ({ As, title, ...rest }) => {
  const router = useRouter()
  const isActive = router.asPath === rest.href

  const attribute = rest?.handleClick
    ? { onClick: rest.handleClick }
    : { href: rest.href }

  return (
    <As
      {...attribute}
      className={`group relative my-3 text-3xl text-light dark:text-dark lg:my-0 lg:text-lg lg:text-dark lg:dark:text-light ${
        isActive ? 'font-bold' : ''
      }`}
    >
      {title}
      <span
        className={`ease absolute -bottom-0.5
                left-0 inline-block h-[1px]
                bg-light transition-[width]
                duration-300 group-hover:w-full dark:bg-dark lg:bg-dark lg:dark:bg-light
                ${isActive ? 'w-full' : 'w-0'}
            `}
      ></span>
    </As>
  )
}
