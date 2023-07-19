import React from "react";
import SearchVideo from "./videoComponents/SearchVideo";
import "../styles/componentStyles/DisplaySearchResults.css";

const DisplaySearchResults = ({ videos }) => {
  return (
    <div className="searchResults">
      {videos.map((video) => (
        <SearchVideo key={video} />
      ))}
    </div>
  );
};

export default DisplaySearchResults;
