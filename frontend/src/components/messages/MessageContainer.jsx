import React from "react";

const MessageContainer = ({ conversation,index  }) => {
  return (
    <div className="bg-neutral-800 w-full h-20 border-b border-blue-800 flex items-center">
      {/* <img
        src={conversation.profilePic}
        alt="Profile"
        className="w-16 h-16 object-cover rounded-full ml-4"
      /> */}
      <p className="text-white ml-4">{conversation.username}</p>
    </div>
  );
};

export default MessageContainer;

