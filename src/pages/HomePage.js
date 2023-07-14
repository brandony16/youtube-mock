import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const HomePage = () => {
  return (
    <div className="homePage">
      <Header />
      <div className="mainBody">
        <Sidebar />
      </div>
    </div>
  )
}

export default HomePage;