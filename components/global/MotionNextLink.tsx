import Link from 'next/link'
import { motion } from 'framer-motion'

export default function MotionNextLink({ href, children, ...rest }) {
  return (
    <Link href={href} passHref>
      <motion.a {...rest}>{children}</motion.a>
    </Link>
  )
}
