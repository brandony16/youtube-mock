import React from "react";
import VideoPrev from "./videoComponents/VideoPrev";
import "../styles/componentStyles/DisplayMainPage.css";

const DisplayMainVideos = ({ videos }) => {
  return (
    <div className="displayMainVideos">
        {videos.map((video) => (
          <VideoPrev video={video} key={video}/>
        ))}
    </div>
  )
}

export default DisplayMainVideos;