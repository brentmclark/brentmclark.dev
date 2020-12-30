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
        <h1 className="text-blue-600 text-4xl mb-6 font-semibold md:text-5xl">
          Blog
        </h1>
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
