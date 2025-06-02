// src/components/Navigation.jsx
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <header className="header">
      <div className="logo">ZACHARIA NDINGURI</div>
      <nav>
        <ul className="nav-links">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/resume">Resume</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
