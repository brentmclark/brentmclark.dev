import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = "Brent M Clark"

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <section className="h-screen p-auto">
        <h1
          className={`text-blue-600 font-semibold py-24 pl-4 text-4xl w-full md:pl-16 md:py-32 md:text-5xl lg:py-24`}
        >
          404 error!
        </h1>
      </section>
    </Layout>
  )
}

export default NotFoundPage
