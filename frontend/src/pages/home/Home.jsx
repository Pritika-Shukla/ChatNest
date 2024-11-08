import React from "react";
import SearchInput from "../../components/sidebar/SearchInput";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex w-full h-screen bg-neutral-950">
      <SearchInput />
      <Sidebar />
    </div>
  );
};

export default Home;
