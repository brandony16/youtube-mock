import React, { useEffect, useState } from "react";
import SearchVideo from "./videoComponents/SearchVideo";
import "../styles/componentStyles/DisplaySearchResults.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const DisplaySearchResults = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const { keyword } = useParams();

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
    const MAX_RESULTS = 10;

    const fetchVideos = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search`,
          {
            params: {
              key: API_KEY,
              q: keyword,
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

        setVideos((prevVideos) => [...prevVideos, ...videosWithDetails]);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    const fetchVideosWithDetails = async (videoIds, apiKey) => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos`,
          {
            params: {
              key: apiKey,
              part: "snippet,statistics",
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
          const channelImage =
            channelResponse.data?.items[0]?.snippet?.thumbnails?.default?.url;
          video.channelImage = channelImage;
        }

        return videos;
      } catch (error) {
        console.error("Error fetching video details:", error);
        return [];
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="searchResults">
      {videos.map((video) => (
        <SearchVideo key={video.etag} video={video} />
      ))}
    </div>
  );
};

export default DisplaySearchResults;
