import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DisplaySearchResults from "../components/DisplaySearchResults";
import CollapsedSidebar from "../components/sidebarComponents/CollapsedSidebar";

const SearchPage = ({ user, isCollapsed, setIsCollapsed }) => {
  return (
    <div className="homePage">
      <Header user={user} setIsCollapsed={setIsCollapsed} />
      <div className="mainBody">
        {!isCollapsed ? (
          <Sidebar user={user} isHome={true} isCollapsed={isCollapsed} />
        ) : (
          <CollapsedSidebar isHome={true} />
        )}
        <DisplaySearchResults />
      </div>
    </div>
  );
};

export default SearchPage;
