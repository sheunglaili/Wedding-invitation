import React from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

import { motion } from "framer-motion";


export const Vaccination = React.forwardRef(function ({
  vaccinationIcon,
  vaccinationText,
  bg
}, ref) {
  const image = getImage(bg)
  const bgImage = convertToBgImage(image)

  const icon = getImage(vaccinationIcon)

  return (
    <BackgroundImage
      Tag="section"
      // Spread bgImage into BackgroundImage:
      {...bgImage}
      preserveStackingContext
    >
      <div ref={ref} className="h-screen w-screen flex flex-col items-center justify-start pt-20 space-y-12 font-twsung" >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeatDelay: 1, 
            repeat: Infinity
          }}
          id="icon" className="w-1/6">
          <GatsbyImage image={icon} />
        </motion.div>
        <div id="text" className="text-xl">
          {vaccinationText}
        </div>
      </div>
    </BackgroundImage>
  )
})