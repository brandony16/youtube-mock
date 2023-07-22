import React from "react";
import Header from "../components/Header";
import DisplayVideo from "../components/DisplayVideo";

const VideoPage = ({ user, setIsCollapsed }) => {
  return (
    <div className="videoPage">
      <Header user={user} setIsCollapsed={setIsCollapsed}/>
      <DisplayVideo user={user} />
    </div>
  )
}

export default VideoPage;