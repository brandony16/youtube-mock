import React from "react";
import VideoTypes from "./sidebarComponents/VideoTypes";
import UserSavedVideos from "./sidebarComponents/UserSavedVideos";
import "../styles/componentStyles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <VideoTypes />
      <UserSavedVideos />
      <div className="explore sidebarElement"></div>
      <div className="help sidebarElement"></div>
    </div>
  );
};

export default Sidebar;
