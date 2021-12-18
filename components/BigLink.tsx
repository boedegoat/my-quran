import { homeChildVariants } from 'lib/animations'
import MotionNextLink from './MotionNextLink'

export default function BigLink({ href, className = '', emoji, label, description }) {
  return (
    <MotionNextLink
      variants={homeChildVariants}
      href={href}
      className={`shadow-md p-5 rounded-lg ${className}`}
    >
      <h1 className='text-2xl mb-2'>
        {emoji} <span className='text-slate-900 font-bold'>{label}</span>
      </h1>
      <p className='text-slate-500'>{description}</p>
    </MotionNextLink>
  )
}
