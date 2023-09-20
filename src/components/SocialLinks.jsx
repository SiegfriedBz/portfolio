import Link from 'next/link'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons'

import { linkVariants } from '@/utils/framerVariants'

const MotionLink = motion(Link)

const SocialLinks = ({ modal = false }) => {
  return (
    <>
      <MotionLink
        variants={linkVariants}
        whileHover='hover'
        target='_blank'
        href='https://github.com/SiegfriedBz'
      >
        <FontAwesomeIcon
          icon={faLinkedinIn}
          className={`h-8 w-8 text-blue-600`}
        />
      </MotionLink>
      <MotionLink
        variants={linkVariants}
        whileHover='hover'
        target='_blank'
        href='https://github.com/SiegfriedBz'
      >
        <FontAwesomeIcon
          icon={faGithubAlt}
          className={`h-8 w-8 
          ${modal ? 'text-light dark:text-dark' : 'text-dark dark:text-light'}
          `}
        />
      </MotionLink>
    </>
  )
}

export default SocialLinks
