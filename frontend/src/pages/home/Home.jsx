import React from "react";
import SearchInput from "../../components/sidebar/SearchInput";
import Sidebar from "../../components/sidebar/Sidebar";
import Logout from "../../components/sidebar/Logout";

const Home = () => {
  return (
    <div className="flex w-full h-full bg-neutral-950">
      <SearchInput />
      <Sidebar />
      <Logout/>
    </div>
  );
};

export default Home;
