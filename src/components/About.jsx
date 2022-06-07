import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { SectionWrapper } from "./common/SectionWrapper"
import { SectionTitle } from "./common/SectionTitle"

export const About = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      site {
        siteMetadata {
          author {
            name
            summaryJp
            summaryEn
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author

  return (
    <>
      {author?.name && (
        <SectionWrapper id="about">
          <SectionTitle title="ABOUT" />
          <Name>{author.name}</Name>
          <SummaryJp>{author?.summaryJp || null}</SummaryJp>
          <SummaryEn>{author?.summaryEn || null}</SummaryEn>
        </SectionWrapper>
      )}
    </>
  )
}

const Name = styled.h3`
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
