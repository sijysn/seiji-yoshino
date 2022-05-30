/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author

  return (
    <Wrapper>
      {author?.name && (
        <p>
          <strong>{author.name}</strong> {author?.summary || null}
        </p>
      )}
      <StaticImage
        formats={["auto", "webp", "avif"]}
        src="../images/profile1.jpg"
        quality={95}
        alt="Profile picture"
        imgStyle={{
          width: "100%",
          objectFit: "contain",
        }}
      />
    </Wrapper>
  )
}

export default Bio

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`
