import React from "react";
import "../../styles/componentStyles/VideoPrev.css";

const VideoPrev = ({ video }) => {
  return (
    <div className="videoWrap" >
      <img src="" alt="" className="thumbnail" />
      <div className="videoInfo">
        <img src="" alt="" className="videoChannel" />
        <h4 className="videoTitle">SIDEMEN RACE ACROSS EUROPE CHALLENGE</h4>
        <div className="videoSubInfo">
          <p className="channelName subTxt">Epic Gamer</p>
          <div className="timeViews">
            <p className="views subTxt">99.3M</p>
            <p className="dot subTxt">&#x2022;</p>
            <p className="postDate subTxt">2 months ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPrev;