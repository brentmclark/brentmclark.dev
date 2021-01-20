import Document, { Html, Head, Main, NextScript } from "next/document"
import React from "react"

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MHHQQG7"
        height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export { MyDocument as default }
