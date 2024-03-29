import React from "react"
import TranstionLink from "gatsby-plugin-transition-link"
import styled from "styled-components"

export const Post = ({ post }) => {
  const title = post.frontmatter.title || post.fields.slug

  return (
    <TranstionLink
      to={post.fields.slug}
      entry={{
        appearAfter: 1,
        length: 1,
      }}
      itemProp="url"
      className="post"
    >
      <Article itemScope itemType="http://schema.org/Article">
        <header>
          <Title>
            <span itemProp="headline">{title}</span>
          </Title>
          <Date>{post.frontmatter.date}</Date>
        </header>
        <section>
          <Description
            dangerouslySetInnerHTML={{
              __html: post.frontmatter.description || post.excerpt,
            }}
            itemProp="description"
          />
        </section>
      </Article>
    </TranstionLink>
  )
}

const Article = styled.article`
  background-color: #fff;
  padding: 24px;
  border-radius: 6px;
  box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.5);
  transition: background-color 0.3s ease-in-out;

  :not(:last-of-type) {
    margin-bottom: 24px;
  }

  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`
const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 8px;
  letter-spacing: 2px;
`

const Date = styled.div`
  font-size: 1rem;
  color: gray;
  margin-bottom: 16px;
`

const Description = styled.p`
  font-size: 1.3rem;
  letter-spacing: 0.3rem;
  line-clamp: 4;
  overflow: hidden;
  display: box;
  box-orient: vertical;
`
