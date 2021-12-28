import React from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

import { motion } from "framer-motion";


export const Venue = React.forwardRef(function ({
  headerZhHK,
  headerEnGB,
  address,
  venueIcon,
  venue,
  restaurant,
  bg
}, ref) {
  const image = getImage(bg)
  const bgImage = convertToBgImage(image)

  const parsedVenueIcon = getImage(venueIcon)


  const createTypeWriterVariants = (delay = 0) => {
    return {
      hidden: { opacity: 1 },
      visible: {
        opacity: 1,
        transition: {
          delayChildren: delay,
          staggerChildren: 0.2
        }
      }
    }
  }

  const letters = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  return (
    <BackgroundImage
      Tag="section"
      // Spread bgImage into BackgroundImage:
      {...bgImage}
      preserveStackingContext
    >
      <div ref={ref} className="h-screen w-screen flex flex-col pt-16 pl-12 items-start justify-start" >
        <div id="header" >
          <div
            className="text-4xl text-white font-twsung tracking-widest"
          >
            {headerZhHK.split("").map((letter, index) => {
              return (<motion.span key={`${letter}-${index}`} variants={letters}>{letter}</motion.span>)
            })}
          </div>
          <div
            className="font-znikomit text-3xl text-white tracking-widest"
          >
            {headerEnGB.split("").map((letter, index) => {
              return (<motion.span key={`${letter}-${index}`} variants={letters}>{letter}</motion.span>)
            })}
          </div>
        </div>
        <div id="divider" className="w-1/12 border border-white my-12" />
        <div id="location" className="flex flex-col w-full font-twsung">
          <motion.div
            variants={createTypeWriterVariants()}
            initial="hidden"
            whileInView="visible"
            viewport={{
              amount: 'all'
            }}
            className="text-white text-2xl">
            {address.split("").map((letter, index) => {
              return (<motion.span key={`${letter}-${index}`} variants={letters}>{letter}</motion.span>)
            })}
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: '50%'
            }}
            whileInView={{
              opacity: 1,
              y: "0%"
            }}
            viewport={{
              amount: 'all'
            }}
            transition={{
              delay: 1.8,
              duration: 1
            }}
            id="venue-icon" className="w-9/12">
            <GatsbyImage image={parsedVenueIcon} />
          </motion.div>
          <motion.div
            variants={createTypeWriterVariants(3)}
            initial="hidden"
            whileInView="visible"
            viewport={{
              amount: 'all'
            }}
            className="text-white text-2xl">
            {restaurant.split("").map((letter, index) => {
              return (<motion.span key={`${letter}-${index}`} variants={letters}>{letter}</motion.span>)
            })}
          </motion.div>
        </div>
      </div>
    </BackgroundImage>
  )
})