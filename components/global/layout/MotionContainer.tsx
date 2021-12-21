import { motion } from 'framer-motion'
import { containerVariants } from 'lib/animations'

export default function MotionContainer({ children, ...rest }) {
  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      {...rest}
    >
      {children}
    </motion.div>
  )
}
