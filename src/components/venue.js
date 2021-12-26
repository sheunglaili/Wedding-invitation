import React from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

export function Venue({
  headerZhHK,
  headerEnGB,
  address,
  venueIcon,
  venue,
  restaurant,
  bg
}) {
  const image = getImage(bg)
  const bgImage = convertToBgImage(image)

  const parsedVenueIcon = getImage(venueIcon)

  return (
    <BackgroundImage
      Tag="section"
      // Spread bgImage into BackgroundImage:
      {...bgImage}
      preserveStackingContext
    >
      <div className="h-screen w-screen flex flex-col pt-16 pl-12 items-start justify-start" >
        <div id="header" >
          <div className="font-kozuka text-4xl text-white" style={{letterSpacing: '0.4em'}}>
            {headerZhHK}
          </div>
          <div className="font-znikomit text-3xl text-white">
            {headerEnGB}
          </div>
        </div>
        <div id="divider" className="w-1/12 border border-white my-12" />
        <div id="location" className="flex flex-col w-full">
          <div className="text-white text-2xl">
            {address}
          </div>
          <div id="venue-icon" className="w-9/12">
            <GatsbyImage image={parsedVenueIcon} />
          </div>
          <div className="text-white text-2xl">
            {restaurant}
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}