import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import ListIcon from './ListIcon'

const Education = () => {
  const ref = useRef()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  })

  return (
    <div className='mt-16 w-full sm:mt-32 lg:mt-48'>
      <h2 className='mb-8 text-center text-4xl font-bold sm:mb-16 sm:text-6xl md:text-8xl'>
        Education
      </h2>
      <div className='relative mx-auto w-full lg:w-[90%] xl:w-[84%]'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          // className='absolute left-9 top-0 h-full w-[2px] origin-top bg-dark dark:bg-light'
        />

        <ul ref={ref} className='relative mx-auto w-full lg:w-[90%] xl:w-[84%]'>
          {degreeList.map((degree) => {
            return <DegreeDetails key={degree.id} {...degree} />
          })}
        </ul>
      </div>
    </div>
  )
}

export default Education

const DegreeDetails = ({
  degree,
  school,
  schoolLink,
  time,
  address,
  details,
}) => {
  const ref = useRef()
  return (
    <>
      <li
        ref={ref}
        className='relative mx-auto mb-8 flex w-full flex-col items-center justify-between pe-0 ps-[12%] first:mt-4 last:mb-4 sm:first:mt-8 sm:last:mb-8 lg:w-[80%]'
      >
        <ListIcon iconRef={ref} />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className='w-full text-lg font-bold capitalize sm:text-xl md:text-2xl'>
            {degree}
          </h3>
          <a
            href={schoolLink}
            target='_blank'
            className='w-full text-sm font-bold capitalize text-primary dark:text-primaryDark sm:text-lg'
          >
            {school} | {address}
          </a>
          <span className='block text-sm font-medium capitalize text-dark/75 dark:text-light/75 sm:text-lg'>
            {time}
          </span>
          <p className='mt-1 w-full text-justify font-medium'>{details}</p>
        </motion.div>
      </li>
    </>
  )
}

const degreeList = [
  {
    id: 1,
    degree: 'Full-Stack Web Development Bootcamp',
    school: 'Le Wagon',
    schoolLink: '',
    time: 'Summer 2022',
    address: 'Zurich, Switzerland',
    details:
      'Assisted in teaching a course on computer programming, held office hours to help students with assignments, and graded exams and assignments.',
  },
  {
    id: 2,
    degree: 'Online Coursework',
    school: 'Coursera - Google',
    schoolLink: '',
    time: '2021 - Current',
    address: 'Remote',
    details:
      'Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine Learning Engineering.',
  },
  {
    id: 3,
    degree: 'Masters degree',
    school: 'Zigurat GBI',
    schoolLink: '',
    time: '2021 - Current',
    address: 'Spain - Remote',
    details:
      "degreeed on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization.",
  },
  {
    id: 4,
    degree: 'M.Eng. Civil engineering',
    school: 'Ecole des Mines',
    schoolLink: '',
    time: '2012',
    address: 'France',
    details:
      "degreeed on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization.",
  },
  {
    id: 5,
    degree: 'M.Sc. Molecular Biology',
    school: 'UMII',
    schoolLink: '',
    time: '2001',
    address: 'France',
    details:
      'Assisted in teaching a course on computer programming, held office hours to help students with assignments, and graded exams and assignments.',
  },
]
