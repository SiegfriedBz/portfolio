const PageLayout = ({ children, className = '' }) => {
  return (
    <div
      className={`inline-block h-full w-full bg-light p-8 dark:bg-dark dark:text-light sm:p-12 md:p-24 lg:p-32 ${className}`}
    >
      {children}
    </div>
  )
}

export default PageLayout
