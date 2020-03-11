import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageWrapper from "../components/PageWrapper"
import PortfolioCard from "../components/PortfolioCard"
import ProfileImg from "../assets/profile-photo.jpg"



const Portfolio = () => {

  return (
    <Layout>
      <SEO title="Portfolio"/>
      <PageWrapper>
        <h1 className="text-blue-600 text-4xl mb-6 font-semibold md:text-5xl">Portfolio</h1>
        <PortfolioCard image={ProfileImg} title='LaL Paris' description=' Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...' link={`/`}/>
        <PortfolioCard image={ProfileImg} title='LaL Paris' description=' Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...' link={`/`}/>
      </PageWrapper>
    </Layout>
  )
}

export default Portfolio