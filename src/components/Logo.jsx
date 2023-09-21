import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

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

const Logo = ({ setMobileMenuIsOpen }) => {
  const router = useRouter()

  return (
    <div className='flex items-center justify-center'>
      <motion.button
        variants={logoVariants}
        whileHover='hover'
        className='flex h-16 w-16 items-center justify-center rounded-full border border-solid border-transparent bg-dark text-2xl font-bold text-light outline-none focus:!border-none active:!border-none dark:border-light'
        onClick={() => {
          router.push('/')
          setMobileMenuIsOpen(false)
        }}
      >
        SB
      </motion.button>
    </div>
  )
}

export default Logo
