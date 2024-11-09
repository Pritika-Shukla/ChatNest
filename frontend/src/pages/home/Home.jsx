import React from "react";
import Sidebar from "../../components/messages/RightSidebar";
import LeftSidebar from "../../components/sidebar/LeftSidebar";

const Home = () => {
  return (
    <div className="flex w-full h-full bg-neutral-950">
      <LeftSidebar />
      <Sidebar />
    </div>
  );
};

export default Home;
