import React, { useEffect } from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import { Layout } from "../components/Layout"
import { Seo } from "../components/Seo"

const BlogPostTemplate = ({ data, location }) => {
  const sectionTitles = data.site.siteMetadata?.sectionTitles
  const social = data.site.siteMetadata?.social
  const post = data.markdownRemark
  const { previous, next } = data

  useEffect(() => {
    if (location.hash) {
      const scrollTo = document.querySelector("#post-top")
      scrollTo.scrollIntoView({ behavior: "smooth" })
    }
  }, [location])

  return (
    <Layout location={location} sectionTitles={sectionTitles} social={social}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Wrapper id="post-top">
        <article itemScope itemType="http://schema.org/Article">
          <header>
            <Headline itemProp="headline">{post.frontmatter.title}</Headline>
            <Date>{post.frontmatter.date}</Date>
          </header>
          <Content
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
          <hr />
        </article>
        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Wrapper>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
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
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`

const Wrapper = styled.div`
  width: 100%;
  padding: 35px 120px 50px;
  max-width: 1024px;
  margin: 0 auto;

  @media (max-width: 767px) {
    padding: 35px 35px 50px;
  }
`

const Headline = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`

const Date = styled.p`
  font-size: 1.2rem;
`

const Content = styled.section`
  margin-top: 50px;
  margin-bottom: 100px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid gray;
  }

  h1 {
    font-weight: 900;
    font-size: 2.488rem;
    color: black;
  }

  h2 {
    font-size: 2.074rem;
  }

  h3 {
    font-size: 1.728rem;
  }

  h4 {
    font-size: 1.44rem;
  }

  h5 {
    font-size: 1.2rem;
  }

  h6 {
    font-size: 1rem;
  }

  p {
    font-size: 1.5rem;
    line-height: 1.625;
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
    margin: 0 0 2rem 0;
    padding: 0;
  }

  ul,
  ol {
    margin-left: 0;
    margin-right: 0;
    padding: 0;
    margin-bottom: 2rem;
    list-style-position: outside;
    list-style-image: none;
  }

  ul li,
  ol li {
    padding-left: 0;
    margin-bottom: calc(2rem / 2);
  }

  li > p {
    margin-bottom: calc(2rem / 2);
  }

  li *:last-child {
    margin-bottom: 0;
  }

  li > ul {
    margin-left: 2rem;
    margin-top: calc(2rem / 2);
  }

  blockquote {
    color: #4f5969;
    margin-left: calc(-1 * 1.5rem);
    margin-right: 2rem;
    padding: 0 0 0 1.5rem;
    border-left: 0.25rem solid #005b99;
    font-size: 1.2rem;
    font-style: italic;
    margin-bottom: 2rem;
  }

  blockquote > :last-child {
    margin-bottom: 0;
  }

  blockquote > ul,
  blockquote > ol {
    list-style-position: inside;
  }

  table {
    width: 100%;
    margin-bottom: 2rem;
    border-collapse: collapse;
    border-spacing: 0.25rem;
  }

  table thead tr th {
    border-bottom: 1px solid #d1dce5;
  }

  hr {
    background: #d1dce5;
    height: 1px;
    border: 0;
  }
`
