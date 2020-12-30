import React from "react"
import PropTypes from "prop-types"
import Head from "next/head"
import {useRouter} from 'next/router'

const SEO = ({ description, title }) => {
  const {pathname, asPath} = useRouter()
  return (
    <Head>
      <title>{title} | brentmclark.dev</title>
      <link rel="canonical" href={`https://brentmclark.dev${pathname}`} />
      <meta name="description" content={description}/>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://brentmclark.dev/profile-photo.jpg" />
      <meta property="og:url" content={`https://brentmclark.dev${asPath}`} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@brent_m_clark" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://brentmclark.dev/profile-photo.jpg" />
      <meta name="twitter:image:alt" content="Brent M. Clark wearing headphones over his ears while sitting in a red chair.  The chair looks like it's from a spaceship.  Brent is looking up and to the left in attempt to look silly." />
    </Head>
  )
}

SEO.defaultProps = {
  description: 'brentmclark.dev',
  title: 'brentmclark.dev'
}

SEO.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default SEO
