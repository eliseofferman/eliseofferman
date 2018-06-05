import React from "react"
import "./about-me.css"

import meImage from "images/elise.jpg"

class AboutMe extends React.Component {
  render() {
    return (
      <div className="about-me-container">
        <h2>Aboute me</h2>
        <div className="text-content">
          <div className="about-me-content">
            <p>I am fun, kind, brave and hard-working. A proof of my bravery is when I to took the step to resign and start the path to becoming a frontend developer at the Technigo Bootcamp. I did it because I felt it was something I would enjoy working with an develop within. After the 12 weeks of bootcamp I am now ready to start my a career as a frontend developer.
            </p>
            <p>My working background is in customer service, providing technical knowledge and giving direct assistant to the ordering process. It has given me great knowledge in service mindset and keeping track of details in stressful situations.</p>
            <p>My academic background has given me tools for problem solving and logical thinking, which has helped me a lot in the process of learning programing. I also have with me the “design thinking” when it comes to product development and user-centered design. It is something I hope I can develop as a programmer and implement for the products I am gonna build.</p>
            <p>On the side I have a huge passion for nature and love to sped my free time outside. I am always up for a cycling or biking adventure.</p>
          </div>
          <img src={meImage} alt="project-image" />
        </div>
      </div>
    )}}

        export default AboutMe
