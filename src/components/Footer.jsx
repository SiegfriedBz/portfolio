import SocialLinks from './SocialLinks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer className='relative flex items-center justify-center border-t-[1px] border-solid border-black py-8 font-medium dark:border-light'>
      <div className='flex w-full flex-col items-center justify-center gap-3 sm:flex-row'>
        <span>&copy;{new Date().getFullYear()} All Rights Reserved.</span>
        <div className='flex w-full items-center justify-center'>
          Build with
          <span className='px-2 '>
            <FontAwesomeIcon
              icon={faHeartPulse}
              className='w-4 text-primary dark:text-primaryDark'
            />
          </span>
          by
          <a
            href='mailto:siegfried.bozza@yahoo.com'
            target='_blank'
            className='ps-2 underline underline-offset-2 hover:text-gray-700 dark:hover:text-gray-300'
          >
            Siegfried
          </a>
        </div>
      </div>
      <div className='absolute top-1/2 hidden -translate-y-[50%] items-center gap-2 md:right-8 md:flex lg:right-12 xl:right-32'>
        <SocialLinks />
      </div>
    </footer>
  )
}

export default Footer
