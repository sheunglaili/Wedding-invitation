import React from "react";
import { getImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

export function Welcome({
  welcomeHeader,
  welcomeText,
  bg
}) {
  const image = getImage(bg)
  const bgImage = convertToBgImage(image)

  console.log(welcomeText)

  return (
    <BackgroundImage
      Tag="section"
      // Spread bgImage into BackgroundImage:
      {...bgImage}
      objectPosition="top"
      preserveStackingContext
    >
      <div className="h-screen w-screen flex flex-col items-center justify-end">
        <div id="welcome-block" className="flex flex-col items-center pb-4"> 
        <div id="header" className="flex-1 text-5xl text-sky-500 py-8 border-b border-sky-500">
          {welcomeHeader}
        </div>
        <div id="welcome-text" className="whitespace-pre-wrap text-center py-8 text-xl text-sky-500 leading-loose">
          {welcomeText}
        </div>
        </div>
      </div>
    </BackgroundImage>
  )
}