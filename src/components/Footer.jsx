import SocialLinks from './SocialLinks'

const Footer = () => {
  return (
    <footer className='relative m-auto flex items-center justify-center border-t-[1px] border-solid border-black px-8 py-8 font-medium dark:border-light sm:px-12 md:px-24 lg:px-32'>
      <div className='flex flex-col items-center justify-center gap-2 md:flex-row md:gap-4'>
        <span>&copy;{new Date().getFullYear()} All Rights Reserved</span>
        <div className='flex items-center self-start'>
          Build with
          <span className='px-1 text-primary dark:text-primaryDark sm:text-2xl'>
            &hearts;
          </span>{' '}
          by&nbsp;
          <a
            href='mailto:siegfried.bozza@yahoo.com'
            target='_blank'
            className='underline underline-offset-2 hover:text-gray-700 dark:hover:text-gray-300'
          >
            Siegfried
          </a>
        </div>
      </div>
      <div className='absolute right-4 top-1/2 flex -translate-y-[50%] flex-col items-center gap-2 sm:flex-row sm:gap-4 md:right-8'>
        <SocialLinks />
      </div>
    </footer>
  )
}

export default Footer
