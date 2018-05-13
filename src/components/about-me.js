import React from "react"
import "./about-me.css"

import meImage from "./elise.jpg"

class AboutMe extends React.Component {
  render() {
    return (
      <div className="about-me-container">
        <h2>Aboute me</h2>
        <div className="text-content">
          <div className="about-me-content">
            <p>I am fun, kind,  brave and hard-working. One proof of my bravery is when I to took the step to resign and start the path to becoming a front-end developer with the Technigo Bootcamp. I did it because I thought it was something I would enjoy working with, and I was right!
              I am now reddy to start my a career as a frontend developer. I am want to master the sills of programming and I am working hard to reach my goal.
            </p>
            <p>My working background is in customer service, providing technical knowledge and giving direct assistant to the ordering process. It has given me great knowledge in service mindset and keeping track of details in stressful situations.</p>
            <p>My academic background has given me tools for problem solving and logical thinking, which has helped me a lot in the process of learning programing. I also have with me the “design thinking” when it comes to product development and user-centered design. It is something I hope I can develop as a programmer and implement for the products I am gonna build.</p>
            <p>On the side I have a huge passion for nature and love to sped my free time outside. I am always up for a cycling or biking adventure.</p>
          </div>

          <img src={meImage} alt="project-image" />

        </div>

        {/* <h2>CV</h2>
          <div class="grid-container">
          <div class="grid-item wide tall">
            <h3>Education</h3>
            <h4>Bootcamp - Frontend developer | Technigo AB | 2018</h4>
            <p> Utbildningen är en 12 veckor intensivkurs för att ge verktygen till att kunna sadla om tlll junior utvecklare. Kursen täcker grundläggande programmering inom HTML, CSS, JavaScript, React, Node.js och verktyg till att strukturera och genomföra större projekt.  Agila metoder används såsom sprint-planering, demos och retrospective, för att efterlikna arbetsmiljön på IT företag och underlätta steget ut på arbetsmarknaden.</p>
            <h4>Civilingenjör Teknisk Design | Luleå Tekniska Universitet
            2008 - 2014</h4>
            <p> Maskiningenjörsutbildning men fokus på användarna design. Förutom ingenjörskunskap låg fokus på användarcentrerad design och produktutveckling. Områden som lades större vikt på var användarcentrerad design metoder, användarvänlighet, gränssnitt, 3D modellering i CAD och problemlösning.</p>
            <h4>Utbytesstudent, Canada |University of Saskatchewan | 2011</h4>
            <p> Mitt syfte med studierna var att utveckla min engelska och få nya kulturerfarenheter.  Kurserna jag läste var entreprenörskap och programmering.</p>
          </div>

          <div class="grid-item tall">
            <h3>IT-skills</h3>
            <h4> Java script ++++</h4>
            <h4></h4>
            <h4></h4>
            <h4></h4>
            <h4></h4>
            <h4></h4>
            <h4></h4>
            <h4></h4>
            <h4></h4>
            <h4></h4>
            <h4></h4>
            <h4></h4>
          </div>

          <div class="grid-item ">
            <h3>Launges</h3>
          </div>

          <div class="grid-item wide tall">
            <h3>Experience</h3>
          </div>

          <div class="grid-item ">
            <h3>DrivingLicense</h3>
          </div>
        </div> */}
      </div>
        )
        }
        }

        export default AboutMe
