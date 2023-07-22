import React from "react";
import { NavLink } from "react-router-dom";
import shortsOutline from "../../assets/yt-shorts-outline.png";
import "../../styles/componentStyles/CollapsedSidebar.css";

const CollapsedSidebar = ({ isHome }) => {
  return (
    <div className="collapsedSidebar">
      <NavLink
        to="/"
        className="collapsedItemWrap"
      >
        <span
          className={
            "material-symbols-outlined sideIcon " + (isHome ? "filled" : "thin")
          }
        >
          home
        </span>
        <h3 className="collapsedItemLabel">Home</h3>
      </NavLink>
      <div className="collapsedItemWrap">
        <img src={shortsOutline} alt="shorts" className="shortsIcon sideIcon" />
        <h3 className="collapsedItemLabel">Shorts</h3>
      </div>
      <div className="collapsedItemWrap">
        <span className="material-symbols-outlined sideIcon thin">
          subscriptions
        </span>
        <h3 className="collapsedItemLabel">Subscriptions</h3>
      </div>
      <div className="collapsedItemWrap">
        <span className="material-symbols-outlined sideIcon thin">
          video_library
        </span>
        <h3 className="collapsedItemLabel">Library</h3>
      </div>
    </div>
  );
};

export default CollapsedSidebar;
