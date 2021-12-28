import React from "react";
import { getImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

import { motion } from "framer-motion";

export const Welcome = React.forwardRef(function({
  welcomeHeader,
  welcomeText,
  bg
}, ref) {
  const image = getImage(bg)
  const bgImage = convertToBgImage(image)

  return (
    <BackgroundImage
      Tag="section"
      // Spread bgImage into BackgroundImage:
      {...bgImage}
      objectPosition="top"
      preserveStackingContext
    >
      <div ref={ref} className="h-screen w-screen flex flex-col items-center justify-end">
        <div id="welcome-block" className="flex flex-col items-center pb-4"> 
        <motion.div 
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          viewport={{
            amount: 'all'
          }}
          transition={{
            delay: 0.5,
            duration: 1
          }}
          id="header" 
          className="flex-1 text-5xl text-sky-500 py-8 border-b border-sky-500 font-twsung font-thin">
          {welcomeHeader}
        </motion.div>
        <motion.div 
          initial={{
            opacity: 0,
            y: '-20%'
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            amount: 'all'
          }}
          transition={{
            delay: 1.5,
            duration: 1
          }}
         id="welcome-text"
         className="whitespace-pre-wrap text-center py-8 text-xl text-sky-500 leading-loose font-twsung">
          {welcomeText}
        </motion.div >
        </div>
      </div>
    </BackgroundImage>
  )
})