import React from "react";
import Header from "../components/Header";
import DisplayVideo from "../components/DisplayVideo";

const VideoPage = ({ user }) => {
  return (
    <div className="videoPage">
      <Header user={user}/>
      <DisplayVideo />
    </div>
  )
}

export default VideoPage;