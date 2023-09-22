import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Details from './Details'
import { jobList } from '@/data/jobsEducationLists'

const Experience = () => {
  const ref = useRef()
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ['start end', 'center start'],
  // })

  return (
    <div className='mt-16 w-full sm:mt-32 lg:mt-48'>
      <h2 className='mb-8 text-center text-4xl font-bold sm:mb-16 sm:text-6xl md:text-8xl'>
        Experience
      </h2>
      <div ref={ref} className='relative mx-auto w-full lg:w-[90%] xl:w-[84%]'>
        <motion.div
        // style={{ scaleY: scrollYProgress }}
        // className='absolute left-0 top-0 h-full w-[2px] origin-top bg-dark dark:bg-light'
        />

        <ul className='mx-auto w-full lg:w-[90%] xl:w-[84%]'>
          {jobList.map((work) => {
            return <Details key={work.id} {...work} />
          })}
        </ul>
      </div>
    </div>
  )
}

export default Experience
