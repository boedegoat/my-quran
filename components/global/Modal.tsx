import { Dialog } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { motion } from 'framer-motion'
import { buttonVariants } from 'lib/animations'

function Modal({ isOpen, closeModal, title, children }) {
  return (
    <Dialog
      as='div'
      open={isOpen}
      className='modal fixed inset-0 z-50 overflow-y-auto'
      onClose={() => closeModal()}
    >
      <div className='min-h-screen sm:px-4 text-center'>
        <Dialog.Overlay className='fixed inset-0 bg-black/50' />

        {/* This element is to trick the browser into centering the modal contents. */}
        <span className='hidden sm:inline-block h-screen align-middle' aria-hidden='true'>
          &#8203;
        </span>

        {/* modal body */}
        {/* TODO: add open animation */}
        <motion.div className='relative inline-flex pb-24 sm:pb-6 flex-col w-full h-screen sm:max-h-[600px] sm:h-[80vh] sm:max-w-md p-6 sm:my-8 overflow-y-auto text-left align-middle transform bg-white shadow-xl sm:rounded-2xl'>
          <Title as='h3' closeModal={closeModal} className='flex items-center font-bold text-2xl'>
            {title}
          </Title>
          {children}
        </motion.div>
        <div className='fixed sm:hidden left-0 bottom-0 wrapper py-3 border-t bg-white w-full'>
          <button
            type='button'
            className='inline-flex w-full sm:w-auto justify-center px-4 py-2 text-sm font-medium text-slate-900 bg-slate-200 border border-transparent rounded-md hover:bg-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-500'
            onClick={() => closeModal()}
          >
            Close
          </button>
        </div>
      </div>
    </Dialog>
  )
}

function Title({ children, closeModal, ...rest }) {
  return (
    <Dialog.Title {...rest}>
      {children}{' '}
      <motion.button
        variants={buttonVariants}
        whileHover='hover'
        whileTap='tap'
        className='ml-auto hidden sm:inline-block'
        onClick={() => closeModal()}
      >
        <XIcon className='w-6 h-6 text-slate-500' />
      </motion.button>
    </Dialog.Title>
  )
}

function Description({ children, ...rest }) {
  return <Dialog.Description {...rest}>{children}</Dialog.Description>
}

Modal.Title = Title
Modal.Description = Description
export default Modal
