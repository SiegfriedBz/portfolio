import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faEye, faRocket } from '@fortawesome/free-solid-svg-icons'
import { linkVariants } from '@/utils/framerVariants'

const Project = ({
  reverse = false,
  stack,
  title,
  summary,
  img,
  link,
  gitHub,
}) => {
  return (
    <article
      className={`flex h-[688px] w-full ${
        reverse && 'flex-row-reverse'
      } gap-2 rounded-2xl border border-solid border-dark bg-light p-2 shadow-md hover:shadow-lg dark:border-light dark:bg-dark`}
    >
      <iframe
        className='h-full w-[360px] rounded-xl shadow-2xl'
        src={link}
      ></iframe>
      <div className={`relative flex h-full w-1/2 flex-col p-2`}>
        <span className='text-center text-lg font-medium text-primary dark:text-primaryDark'>
          {stack}
        </span>

        <div className='my-auto'>
          <Link
            href={link}
            target='_blank'
            className='transition duration-300 ease-in-out hover:text-primary dark:hover:text-primaryDark'
          >
            <h2 className='my-2 text-4xl font-bold'>{title}</h2>
          </Link>
          <p className='my-2 text-justify font-medium text-dark dark:text-light'>
            {summary}
          </p>
        </div>

        <div className='absolute bottom-0 my-3 flex w-full justify-center gap-12'>
          <motion.div
            variants={linkVariants}
            whileHover='hover'
            className='my-3'
          >
            <a target='_blank' href={gitHub}>
              <FontAwesomeIcon
                icon={faGithubAlt}
                className='w-9 hover:text-primary dark:hover:text-primaryDark'
              />
            </a>
          </motion.div>
          <motion.div
            variants={linkVariants}
            whileHover='hover'
            className='my-3'
          >
            <a target='_blank' href={link}>
              <FontAwesomeIcon
                icon={faRocket}
                className='w-9 hover:text-primary dark:hover:text-primaryDark'
              />
            </a>
          </motion.div>
        </div>
      </div>
    </article>
  )
}

export default Project
