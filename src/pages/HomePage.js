import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DisplayMainVideos from "../components/DisplayMainVideos";
import "../styles/pageStyles/HomePage.css";
import CollapsedSidebar from "../components/sidebarComponents/CollapsedSidebar";

const HomePage = ({ user, isCollapsed, setIsCollapsed }) => {
  return (
    <div className="homePage">
      <Header user={user} setIsCollapsed={setIsCollapsed} />
      <div className="mainBody">
        {isCollapsed ? (
          <Sidebar user={user} isHome={true} isCollapsed={isCollapsed} />
        ) : (
          <CollapsedSidebar isHome={true} />
        )}
        <DisplayMainVideos />
      </div>
    </div>
  );
};

export default HomePage;
