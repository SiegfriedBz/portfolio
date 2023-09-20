import { motion } from 'framer-motion'
import { CircularText } from '../components/Icons'

const imageVariants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'linear',
    },
  },
}

const HireMe = () => {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.1 }}
        className='fixed right-0.5 top-0.5 z-50 flex items-center justify-center overflow-hidden rounded-full opacity-100 shadow-sm backdrop-blur-sm sm:bottom-3 sm:left-3'
      >
        {/* <div className='relative flex h-auto w-44 items-center justify-center dark:bg-dark dark:text-light'> */}
        <div className='relative flex items-center justify-center dark:text-light'>
          <motion.div
            className='h-[85px] w-[85px] sm:h-[180px] sm:w-[180px]'
            variants={imageVariants}
            animate='animate'
          >
            <CircularText className='-translate-x-0.5 -translate-y-0.5 fill-dark object-contain dark:fill-white sm:-translate-x-1 sm:-translate-y-1' />
          </motion.div>

          <a
            className='
              absolute left-1/2 top-1/2 flex
              h-12
              w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-dark
              text-[0.65rem] font-bold text-light
             shadow-2xl 
              hover:border-dark
            hover:bg-light hover:text-dark dark:bg-light
            dark:px-0.5 dark:text-dark
            dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
              sm:h-24 sm:w-24 sm:text-lg'
            href='mailto:siegfried.bozza@yahoo.com'
            target='_blank'
          >
            Hire Me
          </a>
        </div>
      </motion.div>
    </>
  )
}

export default HireMe
