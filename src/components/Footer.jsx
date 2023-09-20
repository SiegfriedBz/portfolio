import SocialLinks from './SocialLinks'

const Footer = () => {
  return (
    <footer className='m-auto flex flex-col-reverse items-center justify-between gap-4 border-t-[1px] border-solid border-black px-8 py-8 font-medium dark:border-light sm:w-11/12 sm:flex-row sm:px-12 md:px-24 lg:px-32'>
      <span>&copy;{new Date().getFullYear()} All Rights Reserved</span>
      <div className='flex items-center'>
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
      <div className='flex items-center gap-8 sm:gap-4'>
        <SocialLinks />
      </div>
    </footer>
  )
}

export default Footer
