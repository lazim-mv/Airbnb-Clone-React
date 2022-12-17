import React from "react";
// import group from "../images/Group.png";

function Hero() {
  // const myStyle={
  //   backgroundImage:"url('../images/Group.png')",
  // }

  return (
    <div className="hero">
      <div className="hero-img">
        <div className="group-img">
          {/* <img className="img-collage" src={group} alt="" /> */}
        </div>
      </div>
      <h1 className="hero-heading">Online Experiences</h1>
      <p className="hero-para">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}

export default Hero;
