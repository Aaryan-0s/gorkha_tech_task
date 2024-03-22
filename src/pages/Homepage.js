import React from "react";
import Announcement from "../components/Announcement";
import Header from "../components/Header";
import SearchBar from "../components/Searchbar";

const Homepage = () => {
  return (
    <div className="bg-[#070719] overflow-y-auto">
      <Announcement message="This is an important announcement!" />

      <Header />

      <div className="min-h-[calc(100vh_-_65px_-_36px)] bg-[#769FCD] dark:bg-[#070719] flex justify-center items-center">
        <SearchBar />
      </div>
    </div>
  );
};

export default Homepage;
