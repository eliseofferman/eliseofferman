import React from "react"
import { Link } from "react-router-dom"
import "./portfolio.css"
import data from "../data"

class Portfolio extends React.Component {
  render() {
    return (
      <div className="portfolio-container">
        <h2>My projects</h2>

        <div className="projects-container">
          {data.map(project => (
            <div className="project-container" key={project.id}>
              <Link to={`/projects/${project.id}`}>
                <img src={project.image} alt="project-img" />
                <h3>{project.name}</h3>
              </Link>
            </div>
          ))}
        </div>

      </div>

    )
  }
}

export default Portfolio
