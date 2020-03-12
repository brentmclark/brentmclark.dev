import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageWrapper from "../components/PageWrapper"
import PortfolioCard from "../components/PortfolioCard"
import ProfileImg from "../assets/profile-photo.jpg"


const Portfolio = ({ data }) => {

  const works = data.allMarkdownRemark.edges
  console.log(works)

  return (
    <Layout>
      <SEO title="Portfolio"/>
      <PageWrapper>
        <h1 className="text-blue-600 text-4xl mb-6 font-semibold md:text-5xl">Portfolio</h1>
        {
          works && works.map(({ node }) => {
            const { links } = node.frontmatter
            const { title } = node.frontmatter
            const { html } = node
            console.log(html)
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
              app_store
              google_play
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