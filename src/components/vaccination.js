import React from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

import { motion } from "framer-motion";


export const Vaccination = React.forwardRef(function ({
  vaccinationIcon,
  vaccinationTextZhHK,
  vaccinationTextEnGB,
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
      <div ref={ref} className="h-screen w-screen flex flex-col items-center justify-start pt-20 space-y-12 font-twsung text-vaccination" >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeatDelay: 1, 
            repeat: Infinity
          }}
          id="icon" className="w-1/12">
          <GatsbyImage imgStyle={{filter: 'invert(31%) sepia(68%) saturate(1650%) hue-rotate(161deg) brightness(91%) contrast(98%)'}} image={icon} />
        </motion.div>
        <div id="text" className="text-l">
          {vaccinationTextEnGB}
        </div>
        <div id="text" className="text-xl font-thin">
          {vaccinationTextZhHK}
        </div>
      </div>
    </BackgroundImage>
  )
})