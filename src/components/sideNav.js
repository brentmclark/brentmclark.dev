import React from "react"
import ProfileImg from "../assets/profile-photo.png"
import Github from "../assets/github-brands.svg"
import NavLink from './navLink'
import SocialIcon from './socialIcon'
import FeatherIcon from "feather-icons-react"


const SideNav = () => {
  return (
    <div className={`flex w-full h-full py-6 flex-col items-center justify-between text-center`}>
      <header>
        <img src={ProfileImg} alt="profile photo of Brent Clark"
             className={`border-gray-200 border-solid border-2 h-32 w-32 rounded-full mx-auto`}/>
        <a className="text-white tracking-wide text-3xl font-semibold no-underline">Brent Clark </a>
        <p className={`text-gray-300 text-sm italic font-thin mt-2`}>Software Engineer</p>
      </header>

      <nav className={`w-full`}>
        <ul className="first:border-t-0">
          <li className={`border-gray-100 border-solid border-b m-0 py-4`}>
            <NavLink to={`/`}>Home</NavLink>
          </li>
          <li className={`border-gray-100 border-solid border-b m-0 py-4`}>
            <NavLink to={`/`}>Home</NavLink>
          </li>
          <li className={`border-gray-100 border-solid border-b m-0 py-4`}>
            <NavLink to={`/`}>Home</NavLink>
          </li>
          <li className={`m-0 py-4`}>
            <NavLink to={`/`}>Home</NavLink>
          </li>
        </ul>
      </nav>

      <footer className="flex justify-center items-center w-full">
        <a href="https://github.com/brent" className={`mx-2`}>
          <i className="fab fa-github hover:text-gray-100 text-md" style={{color: '#c3c3c3'}}></i>
        </a>
        <a href="https://linkedin.com/brent" className={`mx-2`}>
          <i className="fab fa-linkedin-in hover:text-gray-100 text-md" style={{color: '#c3c3c3'}}></i>
        </a>
      </footer>
    </div>
  )
}

export default SideNav