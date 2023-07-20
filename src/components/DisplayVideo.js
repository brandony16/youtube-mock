import React from "react";
import MainVideo from "./videoComponents/MainVideo";
import "../styles/componentStyles/DisplayVideo.css";

const DisplayVideo = ({ video }) => {
  return (
    <div className="displayVideo">
      <MainVideo />
    </div>
  )
}

export default DisplayVideo;