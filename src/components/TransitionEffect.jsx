import { motion } from 'framer-motion'

const TransitionEffect = () => {
  return (
    <>
      <motion.div
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        exit={{ x: ['0%', '100%'], width: ['0%', '100%'] }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className='fixed right-full top-0 z-50 h-screen w-screen bg-primary'
      ></motion.div>
      <motion.div
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        transition={{ delay: 0.25, duration: 0.8, ease: 'easeInOut' }}
        className='fixed right-full top-0 z-30 h-screen w-screen bg-light'
      ></motion.div>
      <motion.div
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        transition={{ delay: 0.5, duration: 0.8, ease: 'easeInOut' }}
        className='fixed right-full top-0 z-20 h-screen w-screen bg-dark'
      ></motion.div>
    </>
  )
}

export default TransitionEffect
