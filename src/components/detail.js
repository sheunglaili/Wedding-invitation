import React from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

import { motion } from "framer-motion";


export const Detail = React.forwardRef(function ({
  headerZhHK,
  headerEnGB,
  address,
  venueIcon,
  venue,
  rundown,
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
          staggerChildren: 0.02
        }
      }
    }
  }

  const letters = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const scheduleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      tranisition: {
        staggerChildren: 0.2,
        delayChildren: 0.95
      }
    }
  }

  const eventsVariants = {
    hidden: {
      opacity: 0,
      x: '-50%'
    },
    visible: {
      opacity: 1,
      x: '0%',
      transition: {
        delay: 0.86
      }
    }
  };

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
        <div id="divider-1" className="w-1/12 border border-white my-6" />
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
              delay: 0.45,
              duration: 0.5
            }}
            id="venue-icon" className="w-9/12">
            <GatsbyImage image={parsedVenueIcon} />
          </motion.div>
          <motion.div
            variants={createTypeWriterVariants(0.68)}
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
        <div id="divider-2" className="w-1/12 border border-white my-6" />
        <div id="runtime" className="flex flex-col w-full font-twsung">
          <motion.div
            initial="hidden"
            whileInView="visible"
            id="rundown"
            variants={scheduleVariants}
            viewport={{
              amount: 'all'
            }}
            className="flex text-black justify-start items-start space-x-6"
          >
            {rundown.map(({ time, event }) => {
              return (
                <motion.div
                  variants={eventsVariants}
                  key={`${time}-${event}`}
                  className="flex space-y-6 text-3xl font-twsung text-white"
                  style={{ textOrientation: 'upright', writingMode: 'vertical-lr' }}
                >
                  <div id="time">
                    {time}
                  </div>
                  <div id="event">
                    {event}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </BackgroundImage>
  )
})