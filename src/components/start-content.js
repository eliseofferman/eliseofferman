import React from "react"
import { Link } from "react-router-dom"
import "./start-content.css"
import data from "../data"

class StartContent extends React.Component {
  render() {
    return (
      <div>
        <div className="start-contatiner">
          <h2>Projects</h2>
          <div className="projects-container">
            {data.map((project, index) => {
              if(index === 1 || index === 2 || index === 3) {
                return <div className="project-container" key={project.id}>
                  <Link to={`/projects/${project.id}`}>
                    <img src={project.image} alt="project-img" />
                    <h3>{project.name}</h3>
                  </Link>
                </div>
              }
            })}
          </div>
          <button className="button"><Link to="/portfolio"> <h4>See all my projects</h4></Link></button>
        </div>
        <div className="skills-contatiner">
          <h2>My developer skills</h2>
          <h3>Html</h3>
          <h3>CSS</h3>
          <h3>JavaScript</h3>
          <h3>React.js</h3>
          <h3>Node.js</h3>
          <h3>MongoDB</h3>
        </div>

      </div>
    )
  }
}

export default StartContent
