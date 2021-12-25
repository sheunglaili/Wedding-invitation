import React from "react";
import { getImage } from "gatsby-plugin-image";

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

export function Rundown({
  bg
}) {
  const image = getImage(bg)
  const bgImage = convertToBgImage(image)

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
      <div className="h-screen w-screen" ></div>
    </BackgroundImage>
  )
}