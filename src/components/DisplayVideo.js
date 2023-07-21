import React from "react";
import MainVideo from "./videoComponents/MainVideo";
import "../styles/componentStyles/DisplayVideo.css";
import ReccomendSimilarVids from "./videoComponents/ReccomendSimilarVids";

const DisplayVideo = ({ user }) => {
  return (
    <div className="displayVideo">
      <MainVideo user={user} />
      <ReccomendSimilarVids />
    </div>
  )
}

export default DisplayVideo;