import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faEye, faRocket } from '@fortawesome/free-solid-svg-icons'
import { linkVariants } from '@/utils/framerVariants'

const FeaturedProject = ({
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
      className={`flex w-full ${
        reverse && 'flex-row-reverse'
      } items-center justify-between rounded-2xl border border-solid border-dark bg-light p-4 shadow-md hover:shadow-lg dark:border-light dark:bg-dark`}
    >
      <iframe
        className='h-[360px] w-[670px] rounded-xl shadow-2xl'
        src={link}
      ></iframe>
      {/* <Link href={link} target='_blank' className='w-1/2'>
        <Image
          src={img}
          alt={title}
          className={`h-auto w-full ${
            reverse
              ? 'rounded-e-2xl rounded-s-xl'
              : 'rounded-e-xl rounded-s-2xl'
          }`}
        />
      </Link> */}
      <div
        className={`${
          reverse ? 'pe-4 ps-2' : 'pe-2 ps-4'
        } flex w-1/2 flex-col items-start justify-between`}
      >
        <span className='text-xl font-medium text-primary dark:text-primaryDark'>
          {stack}
        </span>
        <Link
          href={link}
          target='_blank'
          className='transition duration-300 ease-in-out'
        >
          <h2 className='my-2 text-4xl font-bold text-dark hover:text-primary dark:text-light dark:hover:text-primaryDark'>
            {title}
          </h2>
        </Link>
        <p className='my-2 text-justify font-medium text-dark dark:text-light'>
          {summary}
        </p>
        <div className='flex w-1/3 items-center gap-5'>
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

export default FeaturedProject
