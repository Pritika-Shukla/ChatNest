import React from "react";
import Sidebar from "../../components/rightSidebar/RightSidebar";
import LeftSidebar from "../../components/sidebar/LeftSidebar";
import MessageContainer from "../../components/messages/messageContainer";

const Home = () => {
  return (
    <div className="flex w-full h-full bg-neutral-950">
      <LeftSidebar />
      {/* <Sidebar/> */}
   <MessageContainer/>
    </div>
  );
};

export default Home;
