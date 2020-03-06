import React, { useState } from "react"
import emailjs from "emailjs-com"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => {

  const [disableButton, setDisableButton] = useState(false)
  const [displayMessage, setDisplayMessage] = useState(null)
  const [messageType, setMessageType] = useState(null)

  const [email, setEmail] = useState('')
  const [fullname, setFullname] = useState('')
  const [message, setMessage] = useState('')

  const button_background_class = disableButton === true ? 'bg-gray-600' : 'bg-blue-600'
  const button_hover_class = disableButton === true ? '' : 'hover:bg-blue-700'
  const button_cursor_class = disableButton === true ? 'cursor-not-allowed' : 'cursor-pointer'

  const message_color_class = messageType === 'success' ? 'text-green-600' : 'text-red-600'


  const handleEmailSend = (e) => {
    e.preventDefault()
    setDisableButton(true)
    setDisplayMessage(null)

    const SERVICE_ID = `brent_blog`
    const TEMPLATE_ID = `contact_form`
    const USER_ID = `user_IzkVc56lW2umPWjkS01p2`;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text)

        setDisableButton(false)
        setDisplayMessage('Your message was sent successfully and I will get back as soon as possible')
        setMessageType('success')
        setMessage('')
        setEmail('')
        setFullname('')
      }, (error) => {
        console.log(error.text)

        setDisableButton(false)
        setDisplayMessage('An error occcured. Please try again.')
        setMessageType('error')
      })
  }

  return (
    <Layout>
      <SEO title={`Contact`}/>
      <section className={`px-4 py-10 md:px-12 md:pt-12 xl:pt-24 xl:px-24`}>
        <h1 className="text-blue-600 text-4xl mb-6 font-semibold md:text-5xl">Contact</h1>
        <p className={`opacity-75 leading-relaxed text-gray-700 md:text-xl`}>
          Have a question? Looking to work together? Want to grab a cup of coffee? Feel free to contact me!
        </p>
        <form className="w-full h-auto mt-6" onSubmit={handleEmailSend}>
          <input type="text" className="p-2 bg-white w-full font-semibold mb-6" placeholder={`Full Name (required)`}
                 name={`fullname`} value={email} onChange={e => setEmail(e.target.value)} required/>
          <input type="email" className="p-2 bg-white w-full font-semibold mb-6" placeholder={`Email (required)`} name={`email`} value={fullname} onChange={e => setFullname(e.target.value)} required/>
          <textarea name="" id="" cols="30" rows="8" className="w-full bg-white p-2 font-semibold mb-6"
                    placeholder={`Message (required)`} value={message} onChange={e => setMessage(e.target.value)} required></textarea>
          {displayMessage && <p className={`w-full mb-6 ${message_color_class} font-semibold`}>{displayMessage}</p>}
          <button
            className={`text-white rounded py-2 ${button_background_class} ${button_hover_class} ${button_cursor_class} w-full font-semibold opacity-75 md:w-40`}
            name={`message`}>Send Message
          </button>
        </form>
      </section>
    </Layout>
  )
}

export default ContactPage