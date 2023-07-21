import React, { useEffect, useState } from "react";
import VideoAnalytics from "./VideoAnalytics";
import VideoDescription from "./VideoDescription";
import "../../styles/componentStyles/MainVideo.css";
import Comments from "./Comments";
import { useParams } from "react-router-dom";
import axios from "axios";

const MainVideo = ({ user }) => {
  const [videoData, setVideoData] = useState(null);
  const [comments, setComments] = useState([])
  const { videoId } = useParams();

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
        const response = await axios.get(
          "https://www.googleapis.com/youtube/v3/videos",
          {
            params: {
              key: API_KEY,
              part: "snippet,statistics",
              id: videoId,
            },
          }
        );

        const videoData = response.data.items[0];
        setVideoData(videoData);

        const channelResponse = await axios.get(
          "https://www.googleapis.com/youtube/v3/channels",
          {
            params: {
              key: API_KEY,
              part: "snippet,statistics",
              id: videoData.snippet.channelId,
            },
          }
        );

        const channelData = channelResponse.data.items[0];

        setVideoData((prevData) => ({
          ...prevData,
          channelImage: channelData.snippet.thumbnails.default.url,
          subs: channelData.statistics.subscriberCount,
          views: channelData.statistics.viewCount,
        }));
        const commentsResponse = await axios.get(
          "https://www.googleapis.com/youtube/v3/commentThreads",
          {
            params: {
              key: API_KEY,
              part: "snippet",
              videoId: videoId,
              maxResults: 20,
            },
          }
        );

        setComments(commentsResponse.data.items);
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    };
    fetchVideoData();
  }, [videoId]);

  if (!videoData) {
    return <div>Loading...</div>;
  }

  const videoEmbedUrl = `https://www.youtube.com/embed/${videoData.id}`;

  return (
    <div className="mainVideo">
      <iframe
        title="YouTube video player"
        src={videoEmbedUrl}
        className="video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="mainVideoInfo">
        <h3 className="mainVideoTitle">{videoData.snippet.title}</h3>
        <VideoAnalytics video={videoData} />
        <VideoDescription video={videoData} />
      </div>
      <Comments comments={comments} user={user} />
    </div>
  );
};

export default MainVideo;
