import React from "react";
import { graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

import { motion } from "framer-motion";


export default function DetailPageTemplate({
  data
}) {
  const {
    headerZhHK,
    headerEnGB,
    address,
    venueIcon,
    venue,
    rundown,
    restaurant,
    bg
  } = data.markdownRemark.frontmatter

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
        <div className="h-screen w-screen flex flex-col px-12 py-8 items-start justify-start" >
          <div id="header" >
            <div
              className="xxxs:text-3xl xxs:text-4xl xs:text-4-1/2xl text-white font-twsung tracking-widest"
            >
              {headerZhHK.split("").map((letter, index) => {
                return (<motion.span key={`${letter}-${index}`} variants={letters}>{letter}</motion.span>)
              })}
            </div>
            <div
              className="font-znikomit xxxs:text-xl xxs:text-2xl xs:text-3xl text-white tracking-widest"
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
                    className="flex justify-between h-52 xxxs:text-2xl xxs:text-3xl font-twsung text-white"
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
}

export const pageQuery = graphql`
  query DetailPageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "detail-page" } }){
      frontmatter {
        headerZhHK
        headerEnGB
        address
        venueIcon {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH,  quality: 50, placeholder: TRACED_SVG)
          }
        }
        restaurant
        rundown {
          time
          event
        }
        bg {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH,  quality: 100)
          }
        }
      }
    }
  }
`