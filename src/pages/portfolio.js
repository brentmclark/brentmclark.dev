import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageWrapper from "../components/PageWrapper"
import PortfolioCard from "../components/PortfolioCard"


const Portfolio = ({ data }) => {

  const works = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Portfolio"/>
      <PageWrapper>
        <h1 className="text-4xl mb-6 font-semibold md:text-5xl">Portfolio</h1>
        {
          works && works.map(({ node }) => {
            const { links } = node.frontmatter
            const { title } = node.frontmatter
            const { html } = node
            const featuredImg = node.frontmatter.image.childImageSharp.fluid

            return (
              <PortfolioCard links={links} image={featuredImg} title={title} description={html}/>
            )

          })
        }
      </PageWrapper>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "work"}}}) {
      edges {
        node {
          id
          frontmatter {
            links {
              source
              web
            }
            title
            image {
              childImageSharp {
                fluid(quality: 90, maxWidth: 3000) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          html
        }
      }
    }
  }
`

export default Portfolio