import React, { useEffect, useState } from "react";
import VideoPrev from "./videoComponents/VideoPrev";
import "../styles/componentStyles/DisplayMainPage.css";
import axios from "axios";

const DisplayMainVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
    console.log(API_KEY);
    const MAX_RESULTS = 12;

    const fetchRandomVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search`,
          {
            params: {
              key: API_KEY,
              part: 'snippet',
              type: 'video',
              maxResults: MAX_RESULTS,
              order: 'relevance',
            },
          }
        );

        const videoIds = response.data.items.map(item => item.id.videoId);
        const videosWithViews = await fetchVideosWithViews(videoIds, API_KEY);

        setVideos(videosWithViews);
        } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchRandomVideos();
  }, []);

  const fetchVideosWithViews = async (videoIds, apiKey) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos`,
        {
          params: {
            key: apiKey,
            part: 'snippet,statistics',
            id: videoIds.join(','),
          },
        }
      );

      return response.data.items;
    } catch (error) {
      console.error('Error fetching video views:', error);
      return [];
    }
  };

  return (
    <div className="displayMainVideos">
        {videos.map((video) => (
          <VideoPrev video={video} key={video.id.videoId}/>
        ))}
    </div>
  )
}

export default DisplayMainVideos;