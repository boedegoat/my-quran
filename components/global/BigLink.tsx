import { linkVariants } from 'lib/animations'
import MotionNextLink from './MotionNextLink'
import { classNames } from 'lib/utils'

export default function BigLink({ href, emoji = null, label, description, ...rest }) {
  return (
    <MotionNextLink
      variants={linkVariants}
      whileHover='hover'
      whileTap='tap'
      href={href}
      className='biglink'
      {...rest}
    >
      <h1 className='biglink-label'>
        {emoji}{' '}
        <span className={classNames('biglink-labelSpan', emoji ? 'ml-2' : '')}>{label}</span>
      </h1>
      <p className='biglink-description'>{description}</p>
    </MotionNextLink>
  )
}
