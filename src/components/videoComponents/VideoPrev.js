import React from "react";

const VideoPrev = ({ video }) => {
  return (
    <div className="videoWrap" >
      <img src="" alt="" className="thumbnail" />
      <div className="videoInfo">
        <img src="" alt="" className="videoChannel" />
        <h4 className="videoTitle">Placeholder</h4>
        <div className="videoSubInfo">
          <p className="channelName">Epic Gamer</p>
          <div className="timeViews">
            <p className="views">99.3M</p>
            <p className="postDate">2 months Ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPrev;