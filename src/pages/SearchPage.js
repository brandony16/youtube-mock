import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DisplaySearchResults from "../components/DisplaySearchResults";

const SearchPage = ({ user }) => {
  return (
    <div className="homePage">
      <Header />
      <div className="mainBody">
        <Sidebar user={user}/>
        <DisplaySearchResults videos={["hi", "how", "are", "you"]}/>
      </div>
    </div>
  )
}

export default SearchPage;