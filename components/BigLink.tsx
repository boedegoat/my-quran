import { childVariants, linkVariants } from 'lib/animations'
import MotionNextLink from './MotionNextLink'
import { classNames } from 'lib/utils'
import { motion } from 'framer-motion'

export default function BigLink({ href, emoji = null, label, description, ...rest }) {
  return (
    <motion.div variants={childVariants} {...rest}>
      <MotionNextLink
        variants={linkVariants}
        whileHover='hover'
        whileTap='tap'
        href={href}
        className='block h-full shadow-md p-5 rounded-lg bg-white'
      >
        <h1 className='text-lg sm:text-2xl mb-2 flex items-center'>
          {emoji}{' '}
          <div
            className={classNames('text-slate-900 font-bold w-full', emoji ? 'ml-2' : '')}
          >
            {label}
          </div>
        </h1>
        <p className='text-sm text-slate-500'>{description}</p>
      </MotionNextLink>
    </motion.div>
  )
}
