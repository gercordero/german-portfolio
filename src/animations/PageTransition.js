import React from "react"
import { motion, AnimatePresence } from "framer-motion"

const PageTransition = ({ children, location }) => {
  const duration = 0.35

  const variants = {
    initial: {
      opacity: 0,
    },
    enter: {
      x: 0,
      opacity: 1,
      transition: {
        duration: duration,
        delay: duration,
        when: "beforeChildren",
      },
    },
    exit: {
      x: "-100vw",
      opacity: 0,
      transition: { duration: duration, ease: "easeInOut" },
    },
  }

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={location.pathname}
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default PageTransition
