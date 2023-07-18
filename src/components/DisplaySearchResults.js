import React from "react";
import SearchVideo from "./videoComponents/SearchVideo";

const DisplaySearchResults = ({ videos }) => {
  return (
    <div className="searchResults">
      <div className="videoResults">
        {videos.map((video) => (
          <SearchVideo key={video} />
        ))}
      </div>
    </div>
  )
}

export default DisplaySearchResults