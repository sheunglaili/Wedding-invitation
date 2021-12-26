import React from "react";
import { getImage } from "gatsby-plugin-image";

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

export function Rundown({
  headerZhHK,
  headerEnGB,
  rundown,
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
      <div className="h-screen w-screen flex flex-col pt-16 pl-12 items-start justify-start" >
        <div id="header" >
          <div className="font-kozuka text-5xl text-black" style={{letterSpacing: '0.4em'}}>
            {headerZhHK}
          </div>
          <div className="font-znikomit text-3xl text-black">
            {headerEnGB}
          </div>
        </div>
        <div id="divider" className="w-1/12 border border-black my-12" />
        <div id="rundown" className="flex text-black justify-start items-start space-x-6">
          {rundown.map(({ time, event }) => {
            return (
              <div className="flex space-y-6 text-3xl" style={{ textOrientation: 'upright', writingMode: 'vertical-lr' }}>
                <div id="time">
                  {time}
                </div>
                <div id="event">
                  {event}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </BackgroundImage>
  )
}