import React from "react"
import { Link, graphql } from "gatsby"

import PostCard from '../components/postCard'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Brent Clark | All posts" />
      <div className={`px-4 py-10 md:px-12 md:pt-12 xl:pt-24 xl:px-24`}>
        <h1 className="text-blue-600 text-4xl mb-6 font-semibold md:text-5xl">Blog</h1>
        {posts.map(({ node }) => {
          const {slug} = node.fields
          const title = node.frontmatter.title || slug
          const {date} = node.frontmatter
          const description = node.frontmatter.description || node.excerpt;

          return (
            <PostCard key={node.fields.slug} to={node.fields.slug} title={title} description={description} date={date}/>
          )
        })}
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
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
  }
`
