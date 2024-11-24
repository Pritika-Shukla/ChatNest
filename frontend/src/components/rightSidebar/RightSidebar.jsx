import React from "react";
import Logout from "./Logout.jsx";
import DisplayFullName from "./FullName.jsx";
import GlobeDemo from "../GlobeDemo.jsx";

const Sidebar = () => {
  return (
    <div className="flex-1 h-full text-white  bg-inherit z-10  p-4">
      <GlobeDemo />
      <Logout />
      <DisplayFullName/>
    </div>
  );
};

export default Sidebar;                                 
