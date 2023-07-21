import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import "../../styles/componentStyles/RelatedVideos.css";

const RelatedVideos = () => {
  const [relatedVideos, setRelatedVideos] = useState([]);
  const videoId = useParams();

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

    const fetchRelatedVideos = async () => {
      try {
        const relatedVideosResponse = await axios.get(
          "https://www.googleapis.com/youtube/v3/search",
          {
            params: {
              key: API_KEY,
              part: "snippet",
              type: "video",
              relatedToVideoId: videoId,
              maxResults: 20,
            },
          }
        );

        const videoIds = relatedVideosResponse.data.items.map(
          (video) => video.id.videoId
        );

        const videoDetailsResponse = await axios.get(
          "https://www.googleapis.com/youtube/v3/videos",
          {
            params: {
              key: API_KEY,
              part: "snippet,statistics",
              id: videoIds.join(","),
            },
          }
        );

        setRelatedVideos(videoDetailsResponse.data.items);
      } catch (error) {
        console.error("Error fetching related videos:", error);
      }
    };

    fetchRelatedVideos();
  }, [videoId]);

  const findHowLongAgo = (video) => {
    const publishedAt = new Date(video.snippet.publishedAt);
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - publishedAt.getTime();
    const secondsAgo = Math.floor(timeDifference / 1000);
    const minutesAgo = Math.floor(secondsAgo / 60);
    const hoursAgo = Math.floor(minutesAgo / 60);
    const daysAgo = Math.floor(hoursAgo / 24);
    const monthsAgo = Math.floor(daysAgo / 30);
    const yearsAgo = Math.floor(monthsAgo / 12);

    if (yearsAgo >= 1) {
      return yearsAgo === 1 ? "1 year ago" : `${yearsAgo} years ago`;
    } else if (monthsAgo >= 1) {
      return monthsAgo === 1 ? "1 month ago" : `${monthsAgo} months ago`;
    } else if (daysAgo >= 1) {
      return daysAgo === 1 ? "1 day ago" : `${daysAgo} days ago`;
    } else if (hoursAgo >= 1) {
      return hoursAgo === 1 ? "1 hour ago" : `${hoursAgo} hours ago`;
    } else if (minutesAgo >= 1) {
      return minutesAgo === 1 ? "1 minute ago" : `${minutesAgo} minutes ago`;
    } else {
      return "Just now";
    }
  };

  const formatViews = (views) => {
    if (views >= 1e9) {
      return `${(views / 1e9).toFixed(1)}B views`;
    } else if (views >= 1e6) {
      return `${(views / 1e6).toFixed(1)}M views`;
    } else if (views >= 1e3) {
      return `${(views / 1e3).toFixed(0)}K views`;
    } else {
      return `${views} views`;
    }
  };

  return (
    <div className="relatedVideos">
      {relatedVideos.map((video) => (
        <NavLink
          to={`/watch/${video.id}`}
          className="relatedVideoWrap"
          key={video.id}
        >
          <div className="searchThumbnailWrap">
            <img
              src={video.snippet.thumbnails.high.url}
              alt={video.snippet.title}
              className="searchThumbnail"
            />
          </div>
          <div className="relatedVideoInfo">
            <div className="topSearchInfo">
              <h3 className="relatedTitle">{video.snippet.title}</h3>
            </div>
            <div className="channelSearchInfo">
              <p className="relatedChannelName subTxt">{video.snippet.channelTitle}</p>
              <span className="material-symbols-outlined filled searchCheckIcon">
                check_circle
              </span>
            </div>
            <div className="timeViews searchViews">
              <p className="views subTxt searchTxt">
                {formatViews(video.statistics.viewCount)}
              </p>
              <p className="dot subTxt searchTxt">&#x2022;</p>
              <p className="postDate subTxt searchTxt">
                {findHowLongAgo(video)}
              </p>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default RelatedVideos;
