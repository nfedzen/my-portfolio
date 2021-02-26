import React from "react"
import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"


export default function NavBar(){
  return (
    <header className="bg-gray-900">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink 
            to="/"
            exact
            activeClassName="text-gray-400"
            className="inflex-flex items-center py-6 px-3 mr-4 text-gray-100 hover:text-gray-600 text-4xl font-bold cursive tracking-widest"
          >
            Fedzen
          </NavLink>

          <NavLink 
            to="/post" 
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-100 hover:text-gray-600"
            activeClassName="text-gray-400 bg-gray-700"
          >
            Blog Posts
          </NavLink>

          <NavLink 
            to="/project" 
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-100 hover:text-gray-600"
            activeClassName="text-gray-400 bg-gray-700"
          >
            Projects
          </NavLink>

          <NavLink 
            to="/about" 
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-100 hover:text-gray-600"
            activeClassName="text-gray-400 bg-gray-700"
          > 
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon url="https://www.linkedin.com/in/nathan-fedzen/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
          <SocialIcon url="https://github.com/nfedzen" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
        </div>
      </div>
    </header>
  )
}