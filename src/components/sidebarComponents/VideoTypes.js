import React from "react";
import shortsOutline from "../../assets/yt-shorts-outline.png";

const VideoTypes = () => {
  return (
    <div className="videoTypes sidebarElement">
        <div className="sideItemWrap activePage">
          <span className="material-symbols-outlined sideIcon filled">home</span>
          <h3 className="sideItemLabel bold">Home</h3>
        </div>
        <div className="sideItemWrap">
          <img src={shortsOutline} alt="shorts" className="shortsIcon sideIcon" />
          <h3 className="sideItemLabel">Shorts</h3>
        </div>
        <div className="sideItemWrap">
          <span className="material-symbols-outlined sideIcon thin">subscriptions</span>
          <h3 className="sideItemLabel">Subscriptions</h3>
        </div>
      </div>
  )
}

export default VideoTypes;