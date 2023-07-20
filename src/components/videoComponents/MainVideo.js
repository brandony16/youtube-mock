import React from "react";
import VideoAnalytics from "./VideoAnalytics";
import VideoDescription from "./VideoDescription";
import "../../styles/componentStyles/MainVideo.css";

const MainVideo = () => {
  return (
    <div className="mainVideo">
      <video src="" className="video"></video>
      <div className="mainVideoInfo">
        <h3 className="mainVideoTitle">Placeholder</h3>
        <VideoAnalytics />
        <VideoDescription />
      </div>
    </div>
  );
};

export default MainVideo;
