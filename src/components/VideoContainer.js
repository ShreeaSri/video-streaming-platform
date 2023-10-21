import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/config";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const response = await fetch(YOUTUBE_API);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      setVideos(data.items);
      // Process the JSON data here
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return <div>VideoContainer</div>;
};

export default VideoContainer;
