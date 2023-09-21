import SocialLinks from './SocialLinks'

const Footer = () => {
  return (
    <footer className='relative flex items-center justify-center border-t-[1px] border-solid border-black py-8 font-medium dark:border-light'>
      <div className='flex flex-col items-center justify-center gap-3 sm:flex-row'>
        <span>&copy;{new Date().getFullYear()} All Rights Reserved.</span>
        <div className='flex items-center justify-center'>
          Build with&nbsp;
          <span className='text-primary dark:text-primaryDark sm:text-2xl'>
            &hearts;
          </span>
          &nbsp;by&nbsp;
          <a
            href='mailto:siegfried.bozza@yahoo.com'
            target='_blank'
            className='underline underline-offset-2 hover:text-gray-700 dark:hover:text-gray-300'
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
