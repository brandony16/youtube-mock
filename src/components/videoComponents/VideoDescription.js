import React from "react";
import "../../styles/componentStyles/VideoDescription.css";

const VideoDescription = ({ video }) => {
  const formatDate = (dateString) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const date = new Date(dateString);
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
  };

  const formatDescription = (description) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const formattedDescription = description.replace(urlRegex, (url) => {
      return `<a class="link" href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`;
    });

    return formattedDescription.replace(/\n/g, "<br>");
  };

  const formattedDescription = formatDescription(video.snippet.description);

  const formatNums = (views) => {
    if (views >= 1e9) {
      return `${(views / 1e9).toFixed(1)}B`;
    } else if (views >= 1e6) {
      return `${(views / 1e6).toFixed(1)}M`;
    } else if (views >= 1e3) {
      return `${(views / 1e3).toFixed(0)}K`;
    } else {
      return `${views}`;
    }
  };

  return (
    <div className="videoDescription">
      <div className="topDesc">
        <p className="views topDescTxt">
          {formatNums(video.statistics.viewCount) + " views"}
        </p>
        <p className="datePosted topDescTxt">
          {formatDate(video.snippet.publishedAt)}
        </p>
        {video.snippet.tags.map((tag) => (
          <p className="tags topDescTxt" key={tag}>
            {"#" + tag}
          </p>
        ))}
      </div>
      <p
        className="mainDesc"
        dangerouslySetInnerHTML={{ __html: formattedDescription }}
      />

      <div className="videoAnalyticsLeft">
        <img
          className="material-symbols-outlined thin descChannelIcon"
          src={video.channelImage}
          alt={video.snippet.channelTitle}
        />
        <div className="mainVideoChannelInfo">
          <h4 className="descChannel">{video.snippet.channelTitle}</h4>
          <p className="descChannelSubs">
            {formatNums(video.subs) + " subscribers"}
          </p>
        </div>
      </div>
      <div className="descBtnsWrap">
        <div className="descBtnWrap">
          <span className="material-symbols-outlined thin border filled btmDescTxt">
            play_arrow
          </span>
          <p className="topDescTxt btmDescTxt">Videos</p>
        </div>
        <div className="descBtnWrap">
          <span className="material-symbols-outlined thin border btmDescTxt">
            person
          </span>
          <p className="topDescTxt btmDescTxt">About</p>
        </div>
      </div>
    </div>
  );
};

export default VideoDescription;
