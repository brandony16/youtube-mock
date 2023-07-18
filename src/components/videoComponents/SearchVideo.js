import React from "react";

const SearchVideo = ({ video }) => {
  return (
    <div className="searchVideo">
      <img src="" alt="video" className="thumbnail" />
      <div className="searchVideoInfo">
      <div className="searchVidTitle">
        <h3 className="title">Placeholder</h3>
        <div className="videoSubInfo">
          <p className="channelName subTxt">Baby Sparta</p>
          <div className="timeViews">
            <p className="views subTxt">99.3M</p>
            <p className="dot subTxt">&#x2022;</p>
            <p className="postDate subTxt">2 minutes ago</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default SearchVideo;
