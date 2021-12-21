import { Dialog } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { motion } from 'framer-motion'
import { buttonVariants } from 'lib/animations'
import { classNames } from 'lib/utils'

let onCloseModal = Function()
function Modal({ isOpen, closeModal, children }) {
  onCloseModal = closeModal
  return (
    <Dialog
      as='div'
      open={isOpen}
      className='fixed inset-0 z-50 overflow-y-auto'
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
        <motion.div className='relative inline-flex flex-col w-full h-screen sm:max-h-[80vh] sm:max-w-md p-6 sm:my-8 overflow-y-auto text-left align-middle transform bg-white shadow-xl sm:rounded-2xl'>
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

function Title({ children, className, ...rest }) {
  return (
    <Dialog.Title className={classNames('flex items-center', className)} {...rest}>
      {children}{' '}
      <motion.button
        variants={buttonVariants}
        whileHover='hover'
        whileTap='tap'
        className='ml-auto hidden sm:inline-block'
        onClick={() => onCloseModal()}
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
