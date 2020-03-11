import React from 'react'

const PageWrapper = ({children}) => {
  return (
    <section className={`pt-20 px-4 pb-8 md:px-12 md:pt-24 lg:px-16 lg:pt-16 xl:px-24`}>
      {children}
    </section>
  )
}

export default PageWrapper