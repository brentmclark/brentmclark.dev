import React from 'react'

const PortfolioCard = ({image, title, description, link}) => {
  return (
    <div className="md:flex md:items-center md:justify-between last:border-b-0 border-gray-600 border-solid border-b-2 py-8">
      <img src={image} alt="" className="text-center w-full md:w-5/12"/>
      <div className={` md:w-7/12 md:px-4`}>
        <h3 className="text-blue-600 font-semibold text-2xl">{title}</h3>
        <p className="my-4 text-gray-800 opacity-75 leading-relaxed">{description}</p>
        <div className="md:flex md:flex-wrap">
          <a href={link} className="w-full md:w-auto block text-center text-white hover:text-white rounded-sm p-2 text-sm font-semibold bg-blue-600 hover:bg-blue-700 mt-4 md:mt-0 md:mb-4 md:mr-4">App Store</a>
          <a href={link} className="w-full md:w-auto block text-center text-white hover:text-white rounded-sm p-2 text-sm font-semibold bg-blue-600 hover:bg-blue-700 mt-4 md:mt-0 md:mb-4 md:mr-4">App Store</a>
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard