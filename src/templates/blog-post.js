import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageWrapper from "../components/PageWrapper"
import { MDXRenderer } from "gatsby-plugin-mdx"


const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
  // const featuredImg = post.frontmatter.featuredImage.childImageSharp.sizes


  return (
    <Layout location={location} title={siteTitle} id="blog-container">
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <PageWrapper>
        <article>
          <header>
            <small className={`text-lg font-bold opacity-75 text-gray-700 my-2`}>
              {post.frontmatter.date}
            </small>
            <h1 className={`text-5xl font-semibold leading-snug text-blue-600`}>
              {post.frontmatter.title}
            </h1>
            
            {/* <p className={`text-lg font-bold opacity-75 text-gray-700 mb-8`}>
              {post.fields.readingTime.text}
            </p> */}
          </header>
          {/* <Img alt={post.frontmatter.altText} sizes={featuredImg} /> */}
          <MDXRenderer className={`leading-relaxed opacity-75 mt-10`}>{post.body}</MDXRenderer>
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
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
