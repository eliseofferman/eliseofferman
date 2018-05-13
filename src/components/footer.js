import React from "react"
import { Link } from "react-router-dom"
import "./footer.css"

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <button className="button"><Link to="/contact"><p>Contact me</p></Link></button>
      </div>
    )
  }
}

export default Footer
