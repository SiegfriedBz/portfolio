import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import { linkVariants } from '@/utils/framerVariants'

const Project = ({ stack, title, summary, src, link, gitHub }) => {
  return (
    <article
      className={`grid w-full grid-cols-12 items-center justify-between gap-1 rounded-2xl border 
    border-solid border-dark bg-light p-2 
    shadow-md hover:shadow-lg dark:border-light dark:bg-dark lg:p-4`}
    >
      <Link href={link} target='_blank' className='col-span-12'>
        <Image
          src={src}
          alt={title}
          width='1080'
          height='1080'
          className={`rounded-e-xl rounded-s-2xl`}
          sizes='(max-width: 768px) 100vw, 50vw'
        />
      </Link>
      <div
        className={`col-span-12 mt-4
        w-full flex-col justify-between
        sm:mt-0 sm:items-start sm:pe-2 sm:ps-4
        
        `}
      >
        <span
          className='inline-block w-full text-center text-sm font-medium
         text-primary dark:text-primaryDark 
         sm:text-start sm:text-base md:text-lg lg:text-xl'
        >
          {stack}
        </span>
        <div className='my-auto'>
          <Link
            href={link}
            target='_blank'
            className='transition duration-300 ease-in-out
             hover:text-primary dark:hover:text-primaryDark'
          >
            <h2
              className='my-2 text-center text-lg font-bold
           text-dark hover:text-primary
            dark:text-light dark:hover:text-primaryDark
             sm:text-start sm:text-2xl xl:text-4xl'
            >
              {title}
            </h2>
          </Link>
          <p
            className='my-2 text-justify text-sm 
        font-medium text-dark dark:text-light sm:text-lg md:text-base lg:text-lg'
          >
            {summary}
          </p>
        </div>
        <div className='flex w-full items-center justify-center gap-5'>
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
