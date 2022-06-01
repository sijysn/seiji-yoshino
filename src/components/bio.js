/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled, { keyframes } from "styled-components"

export const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summaryJp
            summaryEn
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
    <Wrapper id="about">
      {author?.name && (
        <Description>
          <Name>{author.name}</Name>
          <SummaryJp>{author?.summaryJp || null}</SummaryJp>
          <SummaryEn>{author?.summaryEn || null}</SummaryEn>
        </Description>
      )}
      <SlideBox>
        <ImageWrapper>
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
        </ImageWrapper>
        <ImageWrapper>
          <StaticImage
            formats={["auto", "webp", "avif"]}
            src="../images/profile2.jpg"
            quality={95}
            alt="Profile picture"
            imgStyle={{
              width: "100%",
              objectFit: "contain",
            }}
          />
        </ImageWrapper>
        <ImageWrapper>
          <StaticImage
            formats={["auto", "webp", "avif"]}
            src="../images/profile3.jpg"
            quality={95}
            alt="Profile picture"
            imgStyle={{
              width: "100%",
              objectFit: "contain",
            }}
          />
        </ImageWrapper>
      </SlideBox>
    </Wrapper>
  )
}

const changeImage = keyframes`
  0% { 
    opacity: 0;
  }
  30% { 
    opacity: 1;
  }
  35% { 
    opacity: 1;
  }
  50% { 
    opacity: 0;
    z-index: 9;
  }
  100% { 
    opacity: 0;
  }
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 120px;
`

const Description = styled.div`
  width: 100%;
  padding-right: 30px;
`

const Name = styled.h2`
  font-size: 2.4rem;
  letter-spacing: 0.45em;
  line-height: 1em;
`

const SummaryJp = styled.p`
  font-size: 1.2rem;
  padding-top: 35px;
  line-height: 2.35em;
  letter-spacing: 0.3em;
  white-space: pre-wrap;
`

const SummaryEn = styled.p`
  font-size: 1rem;
  padding-top: 35px;
  line-height: 2.15em;
  letter-spacing: 0.15em;
  white-space: pre-wrap;
`

const SlideBox = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  padding-right: 10px;
  overflow: hidden;
`

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  animation: ${changeImage} 30s 0s infinite;

  &:nth-of-type(2) {
    animation-delay: 10s;
  }

  &:nth-of-type(3) {
    animation-delay: 20s;
  }
`
