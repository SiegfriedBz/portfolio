import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import ListIcon from './ListIcon'

const Experience = () => {
  const ref = useRef()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  })

  return (
    <div className='mt-16 w-full sm:mt-32 lg:mt-48'>
      <h2 className='mb-8 text-center text-4xl font-bold sm:mb-16 sm:text-6xl md:text-8xl'>
        Experience
      </h2>
      <div className='relative mx-auto w-full lg:w-[90%] xl:w-[84%]'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          // className='absolute left-0 top-0 h-full w-[2px] origin-top bg-dark dark:bg-light sm:left-9'
        />

        <ul ref={ref} className='relative mx-auto w-full lg:w-[90%] xl:w-[84%]'>
          {jobList.map((work) => {
            return <JobDetails key={work.id} {...work} />
          })}
        </ul>
      </div>
    </div>
  )
}

export default Experience

const JobDetails = ({
  position,
  company,
  companyLink,
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
            {position}
          </h3>
          <a
            href={companyLink}
            target='_blank'
            className='w-full text-sm font-bold capitalize text-primary dark:text-primaryDark sm:text-lg'
          >
            {company} | {address}
          </a>

          <span className='block text-sm font-medium capitalize text-dark/75 dark:text-light/75 sm:text-lg'>
            {time}
          </span>
          <p className='mt-1 w-full text-justify text-sm font-medium sm:text-lg'>
            {details}
          </p>
        </motion.div>
      </li>
    </>
  )
}

const jobList = [
  {
    id: 1,
    position: 'Software Engineer Intern',
    company: 'Renuo AG',
    companyLink: 'https://www.renuo.ch/',
    time: '2022-2023',
    address: 'Switzerland',
    details:
      "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization.",
  },
  {
    id: 2,
    position: 'Teaching Assistant',
    company: 'Le Wagon',
    companyLink: 'https://www.lewagon.com/zurich',
    time: 'Summer 2022',
    address: 'Switzerland',
    details:
      'Assisted in teaching a course on computer programming, held office hours to help students with assignments, and graded exams and assignments.',
  },
  {
    id: 3,
    position: 'Private Teacher Maths & Physics',
    company: 'Freelance',
    companyLink: '',
    time: '2020 - 2022',
    address: 'France',
    details:
      'Assisted in teaching a course on computer programming, held office hours to help students with assignments, and graded exams and assignments.',
  },
  {
    id: 4,
    position: 'Project Manager Land Remediation',
    company: 'Kibag RE AG',
    companyLink: 'https://www.kibag.ch/',
    time: '2019 - 2020',
    address: 'Switzerland',
    details:
      'Assisted in teaching a course on computer programming, held office hours to help students with assignments, and graded exams and assignments.',
  },
  {
    id: 5,
    position: 'Engineer Land Remediation',
    company: 'Serpol SA',
    companyLink: '',
    time: '2014 - 2018',
    address: 'France',
    details:
      'Assisted in teaching a course on computer programming, held office hours to help students with assignments, and graded exams and assignments.',
  },
  {
    id: 6,
    position: 'Engineer Land Remediation',
    company: 'Suez SA',
    companyLink: '',
    time: '2012 - 2014',
    address: 'France',
    details:
      'Assisted in teaching a course on computer programming, held office hours to help students with assignments, and graded exams and assignments.',
  },
  {
    id: 7,
    position: 'Research Associate Molecular Biology',
    company: 'INSERM (french NIH)',
    companyLink: 'https://www.inserm.fr/en/home/',
    time: '2004 - 2009',
    address: 'France',
    details:
      'Assisted in teaching a course on computer programming, held office hours to help students with assignments, and graded exams and assignments.',
  },
  {
    id: 8,
    position: 'Research Associate Molecular Biology',
    company: 'University of British Columbia',
    companyLink: 'https://www.ubc.ca/',
    time: '2001 - 2003',
    address: 'Canada',
    details:
      'Assisted in teaching a course on computer programming, held office hours to help students with assignments, and graded exams and assignments.',
  },
]
