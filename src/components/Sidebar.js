import React from "react";
import VideoTypes from "./sidebarComponents/VideoTypes";
import UserSavedVideos from "./sidebarComponents/UserSavedVideos";
import SideSignIn from "./sidebarComponents/SideSignIn";
import Subscriptions from "./sidebarComponents/Subscriptions";
import Explore from "./sidebarComponents/Explore";
import Help from "./sidebarComponents/Help";
import About from "./sidebarComponents/About";
import "../styles/componentStyles/Sidebar.css";

const Sidebar = ({ user }) => {
  return (
    <div className="sidebar">
      <VideoTypes />
      <UserSavedVideos />
      {user ? (
        <Subscriptions channels={["hi", "how", "are", "you"]} />
      ) : (
        <SideSignIn />
      )}
      <Explore />
      <Help />
      <About />
    </div>
  );
};

export default Sidebar;
