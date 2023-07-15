import React from "react";
import ghMark from "../../assets/github-mark.png";

const About = () => {
  return (
    <div className="about sidebarElement">
      <a href="https://github.com/BabySparta/youtube-mock" className="aboutLink sideItemWrap">
        <img src={ghMark} alt="github" className="sideIcon" />
        <p className="sideItemLabel">Brandon Young</p>
      </a>
    </div>
  )
}

export default About;