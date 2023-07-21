import React from "react";
import MainVideo from "./videoComponents/MainVideo";
import "../styles/componentStyles/DisplayVideo.css";
import RelatedVideos from "./videoComponents/RelatedVideos";

const DisplayVideo = ({ user }) => {
  return (
    <div className="displayVideo">
      <MainVideo user={user} />
      <RelatedVideos />
    </div>
  )
}

export default DisplayVideo;