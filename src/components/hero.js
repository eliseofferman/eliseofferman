import React from "react"
import background from "images/flowers.jpg"
import "./hero.css"

class Hero extends React.Component {
  render() {
    return (
      <div className="hero-container">
        <img className="hero-image" src={background} />

        <div className="text-box">
          <h1>Welcome!</h1>
          <h4>
            My name is Elise Offerman and I am a junior frontend developer and a design engineer. Get to know me and my skills a bit better by have a look around on my website.
          </h4>
        </div>
        
      </div>
    )
  }
}

export default Hero
