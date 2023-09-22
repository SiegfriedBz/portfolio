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

const HireMe = ({ customClass }) => {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.1 }}
        className={`${customClass} z-30 flex h-fit w-fit items-center justify-center overflow-hidden rounded-full opacity-100 shadow-sm backdrop-blur-sm`}
      >
        {/* <div className='relative flex h-auto w-44 items-center justify-center dark:bg-dark dark:text-light'> */}
        <div className='relative flex items-center justify-center dark:text-light'>
          <motion.div
            className='h-[85px] w-[85px] md:h-[130px] md:w-[130px] lg:h-[180px] lg:w-[180px]'
            variants={imageVariants}
            animate='animate'
          >
            <CircularText className='-translate-x-0.5 -translate-y-0.5 fill-dark object-contain dark:fill-white md:-translate-x-1 md:-translate-y-1' />
          </motion.div>

          <a
            className='
              border-3 absolute left-1/2 top-1/2
              flex
              h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full
              border bg-dark
             text-[0.65rem] font-bold
              text-light shadow-2xl
            hover:border-dark hover:bg-light hover:text-dark
             dark:bg-light dark:text-dark
            dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
              md:h-[4.5rem] md:w-[4.5rem]
              md:text-[1rem] lg:h-24 lg:w-24
               lg:text-lg'
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
