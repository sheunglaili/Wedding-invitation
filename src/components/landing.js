import React from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

export function Landing({
  wedIcon,
  name,
  date,
  bg
}) {
  const image = getImage(bg)
  const bgImage = convertToBgImage(image)

  const icon = getImage(wedIcon)

  return (
    <BackgroundImage
      Tag="section"
      // Spread bgImage into BackgroundImage:
      {...bgImage}
      preserveStackingContext
    >
      <div className="h-screen w-screen flex flex-col items-center" >
        <div id="info-block" class="flex flex-col items-center justify-center flex-1 w-full">
          <div className="w-1/4">
            <GatsbyImage image={icon} />
          </div>
          <div className="font-znikomit text-white text-3xl mt-6">{name}</div>
          <div className="font-impact text-xl text-white" style={{ letterSpacing: '0.5em' }}>{date}</div>
        </div>
        <div id="scroll-indicator" className="flex-1 flex flex-col items-center justify-end space-y-3 m-4">
          <div id="detail-box" className="text-l text-white border-white p-1 tracking-wider font-bebasneue" style={{borderWidth: '1.5px', letterSpacing: '0.15em'}}>
            DETAILS
          </div>
          <div id="arrow" className="arrow-down">
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}