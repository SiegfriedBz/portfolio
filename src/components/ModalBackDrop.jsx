import { motion } from 'framer-motion'
import ModalMenu from './ModalMenu'

const ModalBackDrop = ({ mobileMenuIsOpen, setMobileMenuIsOpen, children }) => {
  return (
    <motion.div
      id='backdrop'
      className='fixed left-0 top-5 z-30 flex h-full w-full items-center justify-center backdrop-blur-md lg:hidden'
      initial={{ opacity: 0 }}
      animate={mobileMenuIsOpen ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0 }}
      onClick={() => setMobileMenuIsOpen(false)}
    >
      <ModalMenu mobileMenuIsOpen={mobileMenuIsOpen}>{children}</ModalMenu>
    </motion.div>
  )
}

export default ModalBackDrop
