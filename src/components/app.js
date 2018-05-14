import React from "react"
import { HashRouter, Route, Link } from "react-router-dom"
import Header from "./header"
import Hero from "./hero"
import StartContent from "./start-content"
import Portfolio from "./portfolio"
import AboutMe from "./about-me"
import Contact from "./contact"
import Footer from "./footer"
import Project from "./project"
import "./app.css"

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div className="manin-container">
          <Header />
          <Route exact path="/" component={Hero} />
          <Route exact path="/" component={StartContent} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route path="/aboutme" component={AboutMe} />
          <Route path="/projects/:projectId" component={Project} />
          <Footer />
        </div>
      </HashRouter>
    )
  }
}

export default App
