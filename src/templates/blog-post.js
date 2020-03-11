import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"


import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageWrapper from "../components/PageWrapper"

import { rhythm, scale } from "../utils/typography"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
  const featuredImg = post.frontmatter.featuredImage.childImageSharp.sizes


  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <PageWrapper>
        <article>
          <header>
            <h1 className={`text-5xl font-semibold leading-snug text-blue-600`}>
              {post.frontmatter.title}
            </h1>
            <p className={`text-lg font-bold opacity-75 text-gray-700 my-2`}>
              {post.frontmatter.date}
            </p>
            <p className={`text-lg font-bold opacity-75 text-gray-700 mb-8`}>
              {post.fields.readingTime.text}
            </p>
          </header>
          <Img alt={post.frontmatter.altText} sizes={featuredImg} />
          <section dangerouslySetInnerHTML={{ __html: post.html }} className={`leading-relaxed opacity-75 mt-10`}/>
        </article>

        <nav className={`mt-4`}>
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
      </PageWrapper>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featuredImage {
          childImageSharp {
            sizes(maxWidth: 1000, maxHeight: 600) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`
