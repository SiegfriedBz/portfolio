import Link from 'next/link'
import { motion } from 'framer-motion'

const logoVariants = {
  hover: {
    scale: 1.25,
    backgroundColor: [
      '#121212',
      'rgba(131,58,180,1)',
      'rgba(253,29,29,1)',
      'rgba(252,176,69,1)',
      'rgba(131,58,180,1)',
      '#121212',
    ],
    transition: {
      backgroundColor: {
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  },
}

const MotionLink = motion(Link)

const Logo = () => {
  return (
    <div className='flex items-center justify-center'>
      <MotionLink
        variants={logoVariants}
        whileHover='hover'
        className='flex h-16 w-16 items-center justify-center rounded-full border border-solid border-transparent bg-dark text-2xl font-bold text-light dark:border-light'
        href='/'
      >
        SB
      </MotionLink>
    </div>
  )
}

export default Logo
