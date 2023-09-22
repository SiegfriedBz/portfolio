import { motion, useScroll } from 'framer-motion'

const ListIcon = ({ iconRef }) => {
  const { scrollYProgress } = useScroll({
    target: iconRef,
    offset: ['center end', 'center center'],
  })

  return (
    <figure className='absolute -left-[48px] -top-[22px] stroke-dark sm:-left-[24px] md:-left-[32px] lg:-left-[22px] xl:-left-[8x]'>
      <svg width={75} height={75} viewBox='0 0 100 100'>
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
