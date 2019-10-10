import React from 'react'

const Navbar = (props) => {
  return (
    <div className="nav_buttons">
      <ul>
        <li>Home</li>
        <li>Services</li>
        <li>Prices</li>
        <li>About</li>
        <li>Blog</li>
        <li>Contact</li>
        <li>
          <i class="fas fa-user fa-lg"></i>
        </li>
        
      </ul>
    </div>
  )
}

export default Navbar