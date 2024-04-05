import { getAllPosts } from "../../../lib/posts"

import React from "react"

import PostCard from "components/postCard"
import Layout from "components/layout"
import SEO from "components/seo"
import PageWrapper from "components/PageWrapper"

const BlogIndex = ({ allPosts }) => {
  return (
    <Layout>
      <SEO title="All Posts" />
      <PageWrapper>
        <h1>Blog</h1>
        <div id="postsContainer">
          {allPosts.map(post => {
            const title = post.title || post.slug
            let url = `/blog/${post.slug}`

            return (
              <PostCard
              key={post.slug}
              to={url}
              title={title}
              description={post.description}
              date={post.date}
              />
            )
          })}
        </div>
      </PageWrapper>
    </Layout>
  )
}

async function getStaticProps() {
  const allPosts = getAllPosts(["slug", "title", "date", "description"])
  return {
    props: { allPosts },
  }
}


export { BlogIndex as default, getStaticProps }
