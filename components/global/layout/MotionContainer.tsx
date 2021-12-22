import { motion } from 'framer-motion'

export default function MotionContainer({ children, ...rest }) {
  return (
    <motion.div initial='hidden' animate='visible' exit='exit' {...rest}>
      {children}
    </motion.div>
  )
}
