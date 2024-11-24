import React from "react";
import useGetConversation from "../../hooks/useGetConversation";
import MessageContainer from "./messageContainer";

const Messages = () => {
  const { loading, conversations } = useGetConversation();

  if (loading) {
    return <p className="text-white">Loading conversations...</p>;
  }

  if (!conversations.length) {
    return <p className="text-white">No conversations available.</p>;
  }

  return (
    <div className="space-y-4">
      {conversations.map((conversation, index) => (
        <MessageContainer
          key={index}
          conversation={conversation}
        />
      ))}
    </div>
  );
};

export default Messages;
