import React, { useState, useCallback, useEffect, useRef } from "react"
import { navigate } from "gatsby";
import { AnimatePresence, motion } from 'framer-motion'

function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef();
  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes
  // Return previous value (happens before update in useEffect above)
  return ref.current;
}

export default function ({ children }) {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [pageIndex, setIndex] = useState(0);
  const pagesPath = [
    '/',
    '/welcome',
    '/detail',
    '/vaccination'
  ]

  const previousIndex = usePrevious(pageIndex);

  const handleTouchStart = useCallback((e) => {
    setTouchStart(e.targetTouches[0].clientY);
  }, [setTouchStart])

  const handleTouchMove = useCallback((e) => {
    setTouchEnd(e.targetTouches[0].clientY);
  }, [setTouchEnd])

  const moveUp = useCallback(() => {
    const nextIndex = pageIndex - 1;
    if (nextIndex >= 0) {
      setIndex(nextIndex)
    }
  }, [pageIndex])

  const moveDown = useCallback(() => {
    const nextIndex = pageIndex + 1;
    if (nextIndex !== pagesPath.length) {
      setIndex(nextIndex)
    }
  }, [pageIndex])

  const handleTouchEnd = useCallback(() => {
    if (touchStart - touchEnd < -10) {
      // do your stuff here for up swipe
      moveUp();
    }

    if (touchStart - touchEnd > 10) {
      // do your stuff here for down swipe
      moveDown();
    }

  }, [touchStart, touchEnd, moveUp, moveDown])

  useEffect(() => {
    if (pageIndex !== previousIndex) {
      navigate(pagesPath[pageIndex])
    }
  }, [pageIndex, previousIndex])

  return (
    <div
      onTouchStart={touchStartEvent => handleTouchStart(touchStartEvent)}
      onTouchMove={touchMoveEvent => handleTouchMove(touchMoveEvent)}
      onTouchEnd={() => handleTouchEnd()}
      className="w-screen h-screen touch-none">
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={pagesPath[pageIndex]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.5
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}