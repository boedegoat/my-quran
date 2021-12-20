import { linkVariants } from 'lib/animations'
import MotionNextLink from './MotionNextLink'
import { classNames } from 'lib/utils'

export default function BigLink({
  href,
  className = null,
  emoji = null,
  label,
  description,
}) {
  return (
    <MotionNextLink
      variants={linkVariants}
      whileHover='hover'
      whileTap='tap'
      href={href}
      className={`shadow-md p-5 rounded-lg bg-white ${className}`}
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
  )
}
