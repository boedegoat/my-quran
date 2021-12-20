import { homeChildVariants } from 'lib/animations'
import MotionNextLink from './MotionNextLink'

export default function BigLink({ href, className = '', emoji, label, description }) {
  return (
    <MotionNextLink
      variants={homeChildVariants}
      href={href}
      className={`shadow-md p-5 rounded-lg bg-white ${className}`}
    >
      <h1 className='text-lg sm:text-2xl mb-2 flex items-center'>
        {emoji} <div className='text-slate-900 font-bold w-full ml-2'>{label}</div>
      </h1>
      <p className='text-sm sm:text-base text-slate-500'>{description}</p>
    </MotionNextLink>
  )
}
