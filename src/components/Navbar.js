import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core';

export default function Navbar(props) {
  /*const orangeStyle = {
    backgroundColor: '#ffa929',
    borderColor: '#5bc2c2',
    width: '100px'
  }
  const seaStyle = {
    backgroundColor: '#006d8f',
    borderColor: '#5bc2c2',
    color: 'white',
    width: '100px'
  }
  const reefStyle = {
    backgroundColor: '#d1ef9f',
    borderColor: '#5bc2c2',
    width: '100px'
  }*/
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
      <div className="container-fluid">
        <Link className="navbar-brand ms-5" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-uppercase" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ms-5">
              <Link className="nav-link mx-3 active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item ms-5">
              <Link className="nav-link mx-3" to="/about">{props.aboutText}</Link>
            </li>
            <li class="nav-item dropdown ms-5">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Contact Details
              </a>
              <ul class="dropdown-menu" >
                <li><a class="dropdown-item" href="https://instagram.com/_.sharmaag7._?igshid=ZDdkNTZiNTM=" target='_blank'>Instagram</a></li>
                <li><a class="dropdown-item" href="https://www.facebook.com/gsharmaaa7" target='_blank'>Facebook</a></li>
                <li><a class="dropdown-item" href="https://www.linkedin.com/in/guddu-sharma-850783203" target='_blank'>Linkedin</a></li>
                <li><hr class="dropdown-divider"/></li>
                <li><a class="dropdown-item">Thank You for Visiting</a></li>
              </ul>
            </li>
            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle mx-3" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Choose Color Palette
              </a>
              <ul className="dropdown-menu ms-4">
                <li><button type="button" className="ms-3 my-1 btn" style={orangeStyle}>Blaze</button></li>
                <li><button type="button" className="ms-3 my-1 btn" style={seaStyle}>Sea</button></li>
                <li><button type="button" className="ms-3 my-1 btn" style={reefStyle}>Reef</button></li>
              </ul>
            </li>  */}
          </ul>
          {/* <form className="d-flex" role="search"> 
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>*/}
          <div className={`form-check form-switch my-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = { title: PropTypes.string.isRequired }

Navbar.defaultProps = { title: 'Set title here' }