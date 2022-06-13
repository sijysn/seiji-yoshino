import React from "react"
import { graphql } from "gatsby"

import { About } from "../components/About"
import { Layout } from "../components/Layout"
import { Seo } from "../components/Seo"
import { ProfileImages } from "../components/ProfileImages"
import { Blog } from "../components/Blog"

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes
  const title = data.site.siteMetadata?.title
  const sectionTitles = data.site.siteMetadata?.sectionTitles
  const social = data.site.siteMetadata?.social

  return (
    <Layout location={location} sectionTitles={sectionTitles} social={social}>
      <Seo title={title} />
      <ProfileImages />
      <About />
      <Blog posts={posts} />
    </Layout>
  )
}

export default BlogIndex

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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
