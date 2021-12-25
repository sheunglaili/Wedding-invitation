import React from "react";
import { getImage } from "gatsby-plugin-image";

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

export function Vaccination({
  bg
}) {
  const image = getImage(bg)
  const bgImage = convertToBgImage(image)

  return (
    <BackgroundImage
      Tag="section"
      // Spread bgImage into BackgroundImage:
      {...bgImage}
      preserveStackingContext
    >
      <div className="h-screen w-screen" ></div>
    </BackgroundImage>
  )
}