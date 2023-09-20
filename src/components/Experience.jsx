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
    <div className='mt-64 w-full'>
      <h2 className='mb-32 text-center text-8xl font-bold'>Experience</h2>
      <div ref={ref} className='relative mx-auto w-[75%]'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-9 top-0 h-full w-[2px] origin-top bg-dark dark:bg-light'
        />

        <ul className='flex w-full flex-col items-start justify-between'>
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
        className='relative mx-auto my-8 flex w-[60%] flex-col items-center justify-between first:mt-8 last:mb-8'
      >
        <ListIcon iconRef={ref} />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className='w-full text-xl font-bold capitalize'>{position}</h3>
          <a
            href={companyLink}
            target='_blank'
            className='w-full text-lg font-bold capitalize text-primary dark:text-primaryDark'
          >
            {company} | {address}
          </a>

          <span className='block font-medium capitalize text-dark/75 dark:text-light/75'>
            {time}
          </span>
          <p className='mt-1 w-full font-medium'>{details}</p>
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
    position: 'Private Teacher Mathematics & Physics',
    company: 'Freelance',
    companyLink: '',
    time: '2020 - 2022',
    address: 'France',
    details:
      'Assisted in teaching a course on computer programming, held office hours to help students with assignments, and graded exams and assignments.',
  },
  {
    id: 4,
    position: 'Land Remediation Project Manager',
    company: 'Kibag RE AG',
    companyLink: 'https://www.kibag.ch/',
    time: '2019 - 2020',
    address: 'Switzerland',
    details:
      'Assisted in teaching a course on computer programming, held office hours to help students with assignments, and graded exams and assignments.',
  },
  {
    id: 5,
    position: 'Land Remediation Engineer',
    company: 'Serpol SA',
    companyLink: '',
    time: '2014 - 2018',
    address: 'France',
    details:
      'Assisted in teaching a course on computer programming, held office hours to help students with assignments, and graded exams and assignments.',
  },
  {
    id: 6,
    position: 'Land Remediation Engineer',
    company: 'Suez SA',
    companyLink: '',
    time: '2012 - 2014',
    address: 'France',
    details:
      'Assisted in teaching a course on computer programming, held office hours to help students with assignments, and graded exams and assignments.',
  },
  {
    id: 7,
    position: 'Molecular Biology Research Associate',
    company: 'INSERM (french NIH)',
    companyLink: 'https://www.inserm.fr/en/home/',
    time: '2004 - 2009',
    address: 'France',
    details:
      'Assisted in teaching a course on computer programming, held office hours to help students with assignments, and graded exams and assignments.',
  },
  {
    id: 8,
    position: 'Molecular Biology Research Associate',
    company: 'University of British Columbia',
    companyLink: 'https://www.ubc.ca/',
    time: '2001 - 2003',
    address: 'Canada',
    details:
      'Assisted in teaching a course on computer programming, held office hours to help students with assignments, and graded exams and assignments.',
  },
]
