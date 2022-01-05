import React from "react";
import { graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

import { motion } from "framer-motion";


export default function VaccinationPageTemplate({
  data
}) {
  const {
    vaccinationIcon,
    vaccinationTextZhHK,
    vaccinationTextEnGB,
    bg
  } = data.markdownRemark.frontmatter

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
      <div className="h-screen w-screen flex flex-col items-center justify-start pt-20 space-y-12 font-twsung text-vaccination" >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeatDelay: 1,
            repeat: Infinity
          }}
          id="icon" className="w-1/12">
          <GatsbyImage imgStyle={{ filter: 'invert(31%) sepia(68%) saturate(1650%) hue-rotate(161deg) brightness(91%) contrast(98%)' }} image={icon} />
        </motion.div>
        <div id="text" className="text-xl font-thin">
          {vaccinationTextZhHK}
        </div>
        <div id="text" className="text-l">
          {vaccinationTextEnGB}
        </div>
      </div>
    </BackgroundImage>
  )
}

export const pageQuery = graphql`
  query VaccinationPageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "vaccination-page" } }){
      frontmatter {
        vaccinationIcon {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality: 50, placeholder: TRACED_SVG)
          }
        }
        vaccinationTextZhHK
        vaccinationTextEnGB
        bg {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality: 100)
          }
        }
      }
    }
  }
`