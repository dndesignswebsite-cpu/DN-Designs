import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function header() {
  return (
    <div className='container'>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">NavbarX</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <NavLink to="/" className="nav-item nav-link ">Home</NavLink>
      </li>
      <li class="nav-item">
        <NavLink to="/about" className="nav-item nav-link ">About</NavLink>
      </li>
      <li class="nav-item">
        <NavLink to="/contact-us" className="nav-item nav-link ">Contact Us</NavLink>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default header
