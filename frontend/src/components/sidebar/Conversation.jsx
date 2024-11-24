import { Check } from 'lucide-react';
import React from 'react';
import logo from "../../assets/logo.png";

const Conversation = ({ conversation, idx }) => {
  if (!conversation) {
    return <div>Loading...</div>; 
  }

  return (
    <>
      <div className="flex items-center p-3 hover:bg-gray-800/50 cursor-pointer hover:bg-neutral-800">
        {/* Profile Picture */}
        <div className="relative w-12 h-12 flex-shrink-0">
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-gray-500/30">
            <img
              src={conversation.profilePic}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Chat Details */}
        <div className="flex-1 min-w-0 ml-3">
          <div className="flex justify-between items-start">
            {/* Name */}
            <div className="text-gray-100 font-medium text-base">
              {conversation?.fullName}
            </div>
            {/* Time */}
            <div className="text-gray-500 text-xs">
  {new Date(conversation.updatedAt).toLocaleString()}
</div>
          </div>

          {/* Last Message */}
          <div className="flex items-center gap-1 mt-0.5">
            {/* <Check className="w-4 h-4 text-teal-500" /> */}
            <span className="text-gray-400 text-sm truncate">{}</span>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-neutral-800 opacity-55"></div>
    </>
  );
};

export default Conversation;
