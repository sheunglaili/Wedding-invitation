import React from "react";
import { getImage } from "gatsby-plugin-image";

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

import { motion } from "framer-motion";


export const Rundown = React.forwardRef(function ({
  headerZhHK,
  headerEnGB,
  rundown,
  bg
}, ref) {
  const image = getImage(bg)
  const bgImage = convertToBgImage(image)

  const scheduleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      tranisition: {
        staggerChildren: 0.2,
        staggerDelay: 1
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
      x: '0%'
    }
  };

  return (
    <BackgroundImage
      Tag="section"
      // Spread bgImage into BackgroundImage:
      {...bgImage}
      styles={{
        backgroundPosition: '',
      }}
      preserveStackingContext
    >
      <div ref={ref} className="h-screen w-screen flex flex-col pt-16 pl-12 items-start justify-start " >
        <div id="header" >
          <motion.div className="text-5xl text-black font-twsung" style={{ letterSpacing: '0.4em' }}>
            {headerZhHK}
          </motion.div>
          <motion.div className="font-znikomit text-3xl text-black">
            {headerEnGB}
          </motion.div>
        </div>
        <div id="divider" className="w-1/12 border border-black my-12" />
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
                className="flex space-y-6 text-3xl font-twsung"
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
    </BackgroundImage>
  )
})