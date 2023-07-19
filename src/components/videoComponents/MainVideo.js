import React from "react";

const MainVideo = () => {
  return (
    <div className="mainVideo">
      <video src="" className="video"></video>
      <div className="mainVideoInfo">
        <h3 className="mainVideoTitle">Placeholder</h3>
        <div className="videoAnalytics">
          <div className="videoAnalyticsLeft">
            <span class="material-symbols-outlined thin">account_circle</span>
            <div className="mainVideoChannelInfo">
              <h4 className="mainVideoChannel">Baby Sparta</h4>
              <p className="channelSubs subTxt">274.3M subscribers</p>
            </div>
            <button className="subscribe">Subscribe</button>
          </div>
          <div className="videoAnalyticsRight">
            <div className="likeWrap">
              <span class="material-symbols-outlined thin">thumb_up</span>
              <p className="likes">35.2M</p>
              <span class="material-symbols-outlined thin">thumb_down</span>
            </div>
            <div className="shareWrap">
              <span class="material-symbols-outlined thin">forward</span>
              <p className="share">Share</p>
            </div>
            <div className="downloadWrap">
              <span class="material-symbols-outlined thin">download</span>
              <p className="download">Download</p>
            </div>
            <div className="clipWrap">
              <span class="material-symbols-outlined thin">cut</span>
              <p className="cut">Clip</p>
            </div>
            <span class="material-symbols-outlined more">more_horiz</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainVideo;
