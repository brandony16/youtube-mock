import React, { useEffect, useState } from "react";
import VideoAnalytics from "./VideoAnalytics";
import VideoDescription from "./VideoDescription";
import "../../styles/componentStyles/MainVideo.css";
import Comments from "./Comments";
import { useParams } from "react-router-dom";
import axios from "axios";

const MainVideo = () => {
  const [videoData, setVideoData] = useState(null);
  const videoId = useParams();

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
    const fetchVideoData = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/youtube/v3/videos",
          {
            params: {
              key: API_KEY,
              part: "snippet",
              id: videoId,
            },
          }
        );

        setVideoData(response.data.items[0]);
        console.log(response.data.items[0]);  
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    };

    fetchVideoData();
  }, [videoId]);

  if (!videoData) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className="mainVideo">
      <video src="" className="video"></video>
      <div className="mainVideoInfo">
        <h3 className="mainVideoTitle">Placeholder</h3>
        <VideoAnalytics />
        <VideoDescription />
      </div>
      <Comments comments={["hi", "how", "are", "you"]}/>
    </div>
  );
};

export default MainVideo;
