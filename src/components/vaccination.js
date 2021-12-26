import React from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

export function Vaccination({
  vaccinationIcon,
  vaccinationText,
  bg
}) {
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
      <div className="h-screen w-screen flex flex-col items-center justify-start pt-20 space-y-12" >
        <div id="icon" className="w-1/6">
          <GatsbyImage image={icon} />
        </div>
        <div id="text" className="text-xl">
          {vaccinationText}
        </div>
      </div>
    </BackgroundImage>
  )
}