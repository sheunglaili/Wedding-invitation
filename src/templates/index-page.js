import React, { useCallback, useEffect } from "react";
import { graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

import { motion, useAnimation } from "framer-motion";

export default function IndexPageTemplate({
  data
}) {
  const {
    wedIcon,
    name,
    date,
    bg
  } = data.markdownRemark.frontmatter

  const image = getImage(bg)
  const bgImage = convertToBgImage(image)

  const icon = getImage(wedIcon)

  const animation = useAnimation();

  const sequence = useCallback(async () => {
    await animation.start({ opacity: [0, 1] }, { duration: 1.5, delay: 1 })
  }, [animation]);

  useEffect(() => {
    sequence();
  }, [sequence])

  return (
      <BackgroundImage
        Tag="section"
        // Spread bgImage into BackgroundImage:
        {...bgImage}
        preserveStackingContext
      >
        <div className="h-screen w-screen flex flex-col items-center" >
          <div id="info-block" class="flex flex-col items-center justify-center flex-1 w-full">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} className="w-1/4">
              <GatsbyImage image={icon} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="font-bigcaslon text-white text-3xl mt-6"
            >{name}</motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
              className="font-impact text-lg text-white"
              style={{ letterSpacing: '0.5em', marginRight: '-0.5em' }}>{date}</motion.div>
          </div>
          <motion.div
            animate={{
              y: [0, 5, 0, 5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity
            }}
            id="scroll-indicator"
            className="flex-1 flex flex-col items-center justify-end space-y-3 m-4">
            <div id="detail-box" className="text-l text-white border-white p-1 tracking-wider font-bebasneue" style={{ borderWidth: '1.5px', letterSpacing: '0.15em' }}>
              DETAILS
            </div>
            <div id="arrow" className="arrow-down">
            </div>
          </motion.div>
        </div>
      </BackgroundImage>
  )
}

export const pageQuery = graphql`
  query IndexPageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "landing-page" } }){
      frontmatter {
        wedIcon {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH,placeholder: TRACED_SVG, quality: 50)
          }
        }
        name 
        date
        bg {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality: 100)
          }
        }
      }
    }
  }
`