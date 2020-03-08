import React from "react"
import { graphql } from "gatsby"
import Link from '../components/Link'

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home"/>

      <div id='header' className="-top-2-rem bg-teal-500 h-auto mb-0 px-4 py-24 md:py-32 lg:py-40 md:px-20 md:py-16 border-red-600 border-solid border-b-10">
        <h1 id='header-text' className="max-w-lg text-white opacity-90 text-6xl xl:text-11xl font-bold">Brent Clark</h1>
      </div>

      <div className="py-12 px-10 md:px-20 lg:px-20">
        <h3 className="text-4xl lg:text-5xl text-blue-600 font-bold ">Software Engineer</h3>
        <p className="mt-5 text-gray-800 opacity-75 text-xl lg:text-2xl font-semibold leading-relaxed">
          Hello. My name is Daniel, software developer since 2011, with experience in e-learning, agricultural
          monitoring, tourism, and fintech. My current focus is building backend solutions in a Cloud Native
          environment. In my spare time I contribute to open source golang projects. To see what I've been up to lately, <Link to={`/blog`}>check out my blog.</Link>
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
