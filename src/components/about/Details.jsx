import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import ListIcon from './ListIcon'

const Details = ({ title, institution, url, time, address, description }) => {
  const liRef = useRef()
  const { scrollYProgress } = useScroll({
    target: liRef,
    offset: ['center end', 'center center'],
  })
  return (
    <li
      ref={liRef}
      className='relative mx-auto mb-8 flex w-full flex-col items-center justify-between pe-0 ps-[12%] first:mt-4 last:mb-4 sm:first:mt-8 sm:last:mb-8 lg:w-[80%]'
    >
      <ListIcon scrollYProgress={scrollYProgress} />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Compound.Title>{title}</Compound.Title>
        <Compound.Link url={url}>{`${institution} | ${address}`}</Compound.Link>
        <Compound.Time>{time}</Compound.Time>
        <Compound.Description>{description}</Compound.Description>
      </motion.div>
    </li>
  )
}

const Compound = ({ children }) => {
  const ref = useRef()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['center end', 'center center'],
  })
  return (
    <>
      <li
        ref={ref}
        className='relative mx-auto mb-8 flex w-full flex-col items-center justify-between pe-0 ps-[12%] first:mt-4 last:mb-4 sm:first:mt-8 sm:last:mb-8 lg:w-[80%]'
      >
        <ListIcon scrollYProgress={scrollYProgress} />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </li>
    </>
  )
}

Compound.Title = Title
Compound.Link = Link
Compound.Time = Time
Compound.Description = Description

function Title({ children }) {
  return (
    <h3 className='w-full text-lg font-bold capitalize sm:text-xl md:text-2xl'>
      {children}
    </h3>
  )
}

function Link({ children, url }) {
  return (
    <a
      href={url}
      target='_blank'
      className='w-full text-sm font-bold capitalize text-primary dark:text-primaryDark sm:text-lg'
    >
      {children}
    </a>
  )
}

function Time({ children }) {
  return (
    <span className='block text-sm font-medium capitalize text-dark/75 dark:text-light/75 sm:text-lg'>
      {children}
    </span>
  )
}

function Description({ children }) {
  return <p className='mt-1 w-full text-justify font-medium'>{children}</p>
}

export default Details
