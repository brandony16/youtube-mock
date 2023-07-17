import React, { useEffect, useRef, useState } from "react";
import VideoPrev from "./videoComponents/VideoPrev";
import "../styles/componentStyles/DisplayMainPage.css";
import axios from "axios";

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const DisplayMainVideos = () => {
  const [videos, setVideos] = useState([]);
  const [pageToken, setPageToken] = useState("");
  const [loading, setLoading] = useState(false);
  const observer = useRef();
  const [fetchedVideoIds, setFetchedVideoIds] = useState([]);
  const prevFetchedVideoIds = usePrevious(fetchedVideoIds);

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
    const MAX_RESULTS = 10;

    const fetchVideos = async (nextPageToken) => {
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
              order: "viewCount",
              pageToken: nextPageToken,
            },
          }
        );

        const newVideos = response.data.items.filter(
          (video) => !fetchedVideoIds.includes(video.id.videoId)
        );

        const videoIds = newVideos.map((video) => video.id.videoId);
        const videosWithDetails = await fetchVideosWithDetails(
          videoIds,
          API_KEY
        );

        setVideos((prevVideos) => [...prevVideos, ...videosWithDetails]);
        setFetchedVideoIds((prevIds) => [...prevIds, ...videoIds]);
        setPageToken(response.data.nextPageToken);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching videos:", error);
        setLoading(false);
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
            channelResponse.data.items[0]?.snippet?.thumbnails?.default?.url;
          video.channelImage = channelImage;
        }

        return videos;
      } catch (error) {
        console.error("Error fetching video details:", error);
        return [];
      }
    };

    observer.current = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && !loading && pageToken) {
          fetchVideos(pageToken);
        }
      },
      {
        threshold: 1,
      }
    );

    if (observer.current) {
      observer.current.observe(document.getElementById("loading"));
    }

    fetchVideos();
  }, []);

  return (
    <div className="displayMainVideos">
      {videos.map((video) => (
        <VideoPrev video={video} key={video.id} />
      ))}
      <div id="loading">{loading && "Loading..."}</div>
    </div>
  );
};

export default DisplayMainVideos;
