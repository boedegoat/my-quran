export const containerVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      // when: 'beforeChildren', // do this animation first, then do children animation
      staggerChildren: 0.1, // delay each children animation by 0.4s
    },
  },
  exit: {
    opacity: 0,
    y: -10,
  },
}

export const childVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
}

export const linkVariants = {
  ...childVariants,
  hover: {
    scale: 1.05,
  },
  tap: {
    scale: 0.98,
  },
}

export const buttonVariants = {
  hover: {
    scale: 1.1,
  },
  tap: {
    scale: 0.95,
  },
}
