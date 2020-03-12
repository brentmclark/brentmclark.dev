import React from "react"
import { Link, graphql } from "gatsby"

import PostCard from '../components/postCard'
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageWrapper from "../components/PageWrapper"
import { rhythm } from "../utils/typography"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="All posts" />
      <PageWrapper>
        <h1 className="text-blue-600 text-4xl mb-6 font-semibold md:text-5xl">Blog</h1>
        {posts.map(({ node }) => {
          const {slug} = node.fields
          const title = node.frontmatter.title || slug
          const {date} = node.frontmatter
          const {text} = node.fields.readingTime
          const description = node.frontmatter.description || node.excerpt;

          return (
            <PostCard key={node.fields.slug} readingTime={text} to={node.fields.slug} title={title} description={description} date={date}/>
          )
        })}
      </PageWrapper>
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
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "post" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
            readingTime {
              text
            }
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            featuredImage {
              childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`