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
            My name is Elise Offerman and I am a front-end developer and a mechanical design engineer.
          </h4>
        </div>

      </div>
    )
  }
}

export default Hero
