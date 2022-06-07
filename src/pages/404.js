import * as React from "react"
import { graphql } from "gatsby"

import { Layout } from "../components/Layout"
import { Seo } from "../components/Seo"

const NotFoundPage = ({ data, location }) => {
  const sectionTitles = data.site.siteMetadata?.sectionTitles
  const social = data.site.siteMetadata?.social

  return (
    <Layout location={location} sectionTitles={sectionTitles} social={social}>
      <Seo title="404: Not Found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        sectionTitles {
          title
          link
        }
        social {
          twitter
          facebook
        }
      }
    }
  }
`
