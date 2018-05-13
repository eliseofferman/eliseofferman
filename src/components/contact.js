import React from "react"
import "./contact.css"
import linkedin from "./linkedin.png"

class Contact extends React.Component {
  render() {
    return (
      <div className="contact-container">
        <div>
          <h2>GET IN TOUCH</h2>
          <h4>If you are intrested to have me in your tema, please feel free to get in touch.</h4>
          <p><span role="img" aria-labelledby="mobil-number">☎️ 0723413665</span></p>
          <p><span role="img" aria-labelledby="email">✉️ eliseofferman@hotmail.com</span></p>
          <a href="https://www.linkedin.com/in/elise-offerman-b6a22a31/" target="_blank" rel="noreferrer noopener"><img src={linkedin} alt="linkedin-link" height="30" width="30" /></a>
        </div>
      </div>
    )
  }
}

export default Contact
