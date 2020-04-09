import React from "react"
import { graphql } from "gatsby"
import Link from '../components/Link'
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home"/>

      <div id='header' className="h-auto mb-0 px-8 pt-20 pb-6 md:px-20 md:py-16 lg:py-32">
        <h1 id='header-text' className="max-w-lg text-white opacity-90 text-5xl md:text-7xl font-bold">Brent Clark</h1>
      </div>

      <div className="pt-4 pb-4 px-10 md:px-20 lg:px-20">
        <h3 className="text-4xl md:text-5xl font-bold ">UIs and APIs</h3>
        <p className="mt-5 text-gray-800 opacity-75 text-xl lg:text-2xl font-semibold leading-relaxed">
          Hello 👋
          <br />
          <br />
          I'm Brent, a software engineer with a career-long focus on user interfaces and APIs.  I'm fascinated by how these two realms play together to create happy customers. 
          <br />
          <br />
          Want to see more? <Link to={`/portfolio`}>check out my portfolio.</Link>
        </p>
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
  }
`
