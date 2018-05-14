import React from "react"
import data from "../data"
import "./project.css"

class Project extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      project: null
    }
  }

  componentDidMount() {
    const projects = data.find(project => (
      project.id === this.props.match.params.projectId
    ))
    this.setState({
      project: projects
    })
  }

  render() {
    if (this.state.project) {
      return (
        <div className="project">
          <img src={ this.state.project.image } alt="project-image" />
          <div className="project-content">
            <h3>{this.state.project.name}</h3>
            <h4>{this.state.project.description}</h4>
            <a href={this.state.project.link2} target="_blank" rel="noreferrer noopener">Link to see the project in the <b>web browser</b> </a>
            <br/>
            <a href={this.state.project.link} target="_blank" rel="noreferrer noopener">Link to <b>code</b> on <b>Github</b> </a>
          </div>
        </div>
      )
    } else {
      return <div>Loading project..</div>
    }
  }

}

export default Project
