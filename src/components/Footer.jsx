import SocialLinks from './SocialLinks'

const Footer = () => {
  return (
    <footer className='m-auto flex w-11/12 items-center justify-between gap-4 border-t-[1px] border-solid border-black px-8 py-8 font-medium dark:border-light sm:px-12 md:px-24 lg:px-32'>
      <span>&copy;{new Date().getFullYear()} All Rights Reserved</span>
      <div className='flex items-center'>
        Build with
        <span className='text-primary dark:text-primaryDark sm:px-1 sm:text-2xl'>
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
      <div className='flex flex-col items-center gap-4 sm:flex-row'>
        <SocialLinks />
      </div>
    </footer>
  )
}

export default Footer
