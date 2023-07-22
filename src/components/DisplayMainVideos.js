import React, { useEffect, useState } from "react";
import VideoPrev from "./videoComponents/VideoPrev";
import "../styles/componentStyles/DisplayMainPage.css";
import axios from "axios";

const DisplayMainVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded) {
      const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
      const MAX_RESULTS = 40;

      const fetchVideos = async () => {
        try {
          setLoading(true);
          const response = await axios.get(
            `https://www.googleapis.com/youtube/v3/search`,
            {
              params: {
                key: API_KEY,
                part: "snippet",
                type: "video",
                maxResults: MAX_RESULTS,
                order: "relevance",
              },
            }
          );

          const newVideos = response.data.items.filter(
            (video) =>
              !videos.some((existingVideo) => existingVideo.etag === video.etag)
          );

          const videoIds = newVideos.map((video) => video.id.videoId);
          const videosWithDetails = await fetchVideosWithDetails(
            videoIds,
            API_KEY
          );

          setVideos([...videosWithDetails]);
          setIsLoaded(true);
        } catch (error) {
          console.error("Error fetching videos:", error);
        } finally {
          setIsLoaded(true);
        }
      };

      const fetchVideosWithDetails = async (videoIds, apiKey) => {
        try {
          const response = await axios.get(
            `https://www.googleapis.com/youtube/v3/videos`,
            {
              params: {
                key: apiKey,
                part: "snippet,statistics,contentDetails",
                id: videoIds.join(","),
              },
            }
          );

          const videos = response.data.items;

          for (const video of videos) {
            const channelId = video.snippet.channelId;
            const channelResponse = await axios.get(
              `https://www.googleapis.com/youtube/v3/channels`,
              {
                params: {
                  key: apiKey,
                  part: "snippet",
                  id: channelId,
                },
              }
            );
            if (channelResponse.data.items) {
              const channelImage =
                channelResponse.data?.items[0]?.snippet?.thumbnails?.default
                  ?.url;
              video.channelImage = channelImage;
            }
          }

          return videos;
        } catch (error) {
          console.error("Error fetching video details:", error);
          return [];
        }
      };

      fetchVideos();
    }
  }, []);

  return (
    <div className="displayMainVideos">
      {videos.map((video) => (
        <VideoPrev video={video} key={videos.indexOf(video)} />
      ))}
      {loading && <div id="loading">Loading...</div>}
    </div>
  );
};

export default DisplayMainVideos;
