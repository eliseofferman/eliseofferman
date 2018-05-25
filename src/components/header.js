import React from "react"
import { Link } from "react-router-dom"
import logoName from "images/name-large.png"
import "./header.css"

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header-container">
          <Link to="/">
            <img className="name-large" src={logoName} alt="logo-elise-offerman" />
          </Link>

          <label for="hamburger" className="hamburger-label">
            <div className="bar"> </div>
            <div className="bar"> </div>
            <div className="bar"> </div>
          </label>

          <input id="hamburger" type="checkbox" className="hamburger-checkbox" />

          <ul className="menu-container">
            <li>
              <Link to="/portfolio"> Portfolio </Link>
            </li>
            <li>
              <Link to="/aboutme"> About Me </Link>
            </li>
            <li>
              <Link to="/contact"> Contact </Link>
            </li>
          </ul>

        </div>
      </header>
    )
  }
}

export default Header
