import { motion } from 'framer-motion'

const ListIcon = ({ scrollYProgress }) => {
  return (
    <figure className='sm:left[48px] absolute -left-[28px] -top-[14px] stroke-dark sm:-left-[24px] sm:-top-[22px] md:-left-[32px] lg:-left-[22px] xl:-left-[8x]'>
      <svg
        className='h-[55px] w-[55px] sm:h-[75px] sm:w-[75px]'
        viewBox='0 0 100 100'
      >
        <circle
          cx={75}
          cy={50}
          r={20}
          className='fill-none stroke-dark stroke-1 dark:stroke-light'
        />
        <motion.circle
          style={{ scaleY: scrollYProgress, pathLength: scrollYProgress }}
          cx={75}
          cy={50}
          r={20}
          className='fill-light stroke-[3px]'
        />
        <circle
          cx={75}
          cy={50}
          r={10}
          className='animate-pulse fill-primary stroke-1 dark:fill-primaryDark'
        />
      </svg>
    </figure>
  )
}

export default ListIcon
