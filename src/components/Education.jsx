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
    <div className='mt-64 w-full'>
      <h2 className='mb-32 text-center text-8xl font-bold'>Education</h2>
      <div ref={ref} className='relative mx-auto w-[75%]'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-9 top-0 h-full w-[2px] origin-top bg-dark dark:bg-light'
        />

        <ul className='flex w-full flex-col items-start justify-between'>
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
        className='relative mx-auto my-8 flex w-[60%] flex-col items-center justify-between first:mt-8 last:mb-8'
      >
        <ListIcon iconRef={ref} />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className='text-2xl font-bold capitalize'>{degree}</h3>
          <h3 className='font-lg text-dark/85 capitalize'>
            <a
              href={schoolLink}
              target='_blank'
              className='w-full text-lg font-bold capitalize text-primary dark:text-primaryDark'
            >
              {school} | {address}
            </a>
          </h3>
          <span className='block font-medium capitalize text-dark/75 dark:text-light/75'>
            {time}
          </span>
          <p className='mt-1 w-full font-medium'>{details}</p>
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
    time: 'Fall 2018',
    address: 'Switzerland',
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
    time: '2022-Present',
    address: 'Spain - Remote',
    details:
      "degreeed on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization.",
  },
  {
    id: 4,
    degree: 'MEng. Master of Engineering Civil/Environmental',
    school: 'Ecole des Mines',
    schoolLink: '',
    time: '2022-Present',
    address: 'France',
    details:
      "degreeed on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization.",
  },
  {
    id: 5,
    degree: 'MSc. Master of Sciences Molecular Biology',
    school: 'UMII',
    schoolLink: '',
    time: 'Fall 2018',
    address: 'France',
    details:
      'Assisted in teaching a course on computer programming, held office hours to help students with assignments, and graded exams and assignments.',
  },
]
