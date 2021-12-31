import React from "react";
import { graphql } from "gatsby";

import { Landing } from "../components/landing";
import { Welcome } from "../components/welcome";
import { Venue } from "../components/venue";
import { Rundown } from "../components/rundown";
import { Vaccination } from "../components/vaccination";
import ReactPageScroller from "react-page-scroller";

export default function IndexPageTemplate({
  data
}) {
  const { landing, welcome, venue, rundown, vaccination } = data

  return (<div className="w-screen h-screen">
    <ReactPageScroller
      containerHeight={'calc(var(--vh, 1vh) * 100)'} // for utilizing postcss vh fix
    >
      <Landing {...landing.frontmatter}></Landing>
      <Welcome {...welcome.frontmatter}></Welcome>
      <Venue {...venue.frontmatter}></Venue>
      <Rundown {...rundown.frontmatter}></Rundown>
      <Vaccination {...vaccination.frontmatter}></Vaccination>
    </ReactPageScroller>
  </div>)
}

export const pageQuery = graphql`
  query IndexPageQuery {
    landing:  markdownRemark(frontmatter: { templateKey: { eq: "landing-page" } }){
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
    welcome:  markdownRemark(frontmatter: { templateKey: { eq: "welcome-page" } }){
      frontmatter {
        welcomeHeader
        welcomeText
        bg {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH,  quality: 100)
          }
        }
      }
    }
    venue:  markdownRemark(frontmatter: { templateKey: { eq: "venue-page" } }){
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
        bg {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH,  quality: 100)
          }
        }
      }
    }
    rundown:  markdownRemark(frontmatter: { templateKey: { eq: "rundown-page" } }){
      frontmatter {
        headerZhHK
        headerEnGB
        rundown {
          time
          event
        }
        bg {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality: 100)
          }
        }
      }
    }
    vaccination:  markdownRemark(frontmatter: { templateKey: { eq: "vaccination-page" } }){
      frontmatter {
        vaccinationIcon {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality: 50, placeholder: TRACED_SVG)
          }
        }
        vaccinationText
        bg {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality: 100)
          }
        }
      }
    }
  }
`