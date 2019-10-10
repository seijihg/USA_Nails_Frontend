import React from 'react'
import LogoImg from './LogoImg'
import Navbar from './Navbar'


const NavbarContainer = (props) => {
  return (
    <div className="navbar_container">
      <div className="navbar">
        <LogoImg />
        <Navbar/>
      </div> 
    </div>
  )
}

export default NavbarContainer