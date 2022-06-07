import React from "react"

import { Post } from "./Post"
import { SectionWrapper } from "./common/SectionWrapper"
import { SectionTitle } from "./common/SectionTitle"

export const Blog = ({ posts }) => {
  return (
    <SectionWrapper id="blog">
      <SectionTitle title="BLOG" />
      {posts.length === 0 ? (
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      ) : (
        <ol>
          {posts.map(post => (
            <Post key={post.fields.slug} post={post} />
          ))}
        </ol>
      )}
    </SectionWrapper>
  )
}
