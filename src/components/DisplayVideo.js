import React from "react";
import MainVideo from "./videoComponents/MainVideo";
import "../styles/componentStyles/DisplayVideo.css";

const DisplayVideo = ({ user }) => {
  return (
    <div className="displayVideo">
      <MainVideo user={user} />
    </div>
  )
}

export default DisplayVideo;