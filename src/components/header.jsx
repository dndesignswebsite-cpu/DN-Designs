import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../assets/css/header.css'
import logo from '../assets/images/dn.png' 

function Header() {
  return (
    <div className="header-container">
    
      <div className="d-flex justify-content-between align-items-center px-3 py-2">
    
        <div className="logo">
          <NavLink to="/">
            <img 
              src={logo}
              alt="Logo" 
              style={{ height: '100px' }} 
              className='alogo'
            />
          </NavLink>
        </div>

    
        <button 
          className="btn btn-primary" 
          type="button" 
          data-bs-toggle="offcanvas" 
          data-bs-target="#offcanvasRight" 
          aria-controls="offcanvasRight"
        >
          ☰ 
        </button>
      </div>

      
      <div 
        className="offcanvas offcanvas-end" 
        tabIndex="-1" 
        id="offcanvasRight" 
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <button 
            type="button" 
            className="btn-close text-reset" 
            data-bs-dismiss="offcanvas" 
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <nav className="navbar navbar-light">
            <div id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active" data-bs-dismiss="offcanvas">
                  <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                </li>
                <li className="nav-item" data-bs-dismiss="offcanvas">
                  <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                </li>
                <li className="nav-item" data-bs-dismiss="offcanvas">
                  <NavLink to="/contact-us" className="nav-item nav-link">Contact Us</NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header
