import React from "react";
import shortsOutline from "../../assets/yt-shorts-outline.png";
import { NavLink } from "react-router-dom";

const VideoTypes = ({ isHome }) => {
  return (
    <div className="videoTypes sidebarElement">
        <NavLink to="/" className={"sideItemWrap " + (isHome ? "activePage" : "")}>
          <span className={"material-symbols-outlined sideIcon " + (isHome ? "filled" : "thin")}>home</span>
          <h3 className={"sideItemLabel " + (isHome ? "bold" : "")}>Home</h3>
        </NavLink>
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