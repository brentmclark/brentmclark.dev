import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title={`Contact`}/>
      <section className={`px-4 py-10 md:px-12 md:pt-12 xl:pt-24 xl:px-24`}>
        <h1 className="text-blue-600 text-4xl mb-6 font-semibold md:text-5xl">Contact</h1>
        <p className={`opacity-75 leading-relaxed text-gray-700 md:text-xl`}>
          Have a question? Looking to work together? Want to grab a cup of coffee? Feel free to contact me!
        </p>
        <form className="w-full h-auto mt-6">
          <input type="text" className="p-2 bg-white w-full font-semibold mb-6" placeholder={`Email`}/>
          <textarea name="" id="" cols="30" rows="8" className="w-full bg-white p-2 font-semibold mb-6" placeholder={`Message`}></textarea>
          <button className="text-white rounded py-2 bg-blue-600 hover:bg-blue-500 w-full font-semibold opacity-75 md:w-40">Send Message</button>
        </form>
      </section>
    </Layout>
  )
}

export default ContactPage