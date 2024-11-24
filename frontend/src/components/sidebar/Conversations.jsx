import React from "react";
import Conversation from "./Conversation";
import useGetConversation from "../../hooks/useGetConversation";
import Loader from "../Loader";

const Conversations = () => {
  const { loading, conversations } = useGetConversation();
  return (
    <div>
      {loading ? <Loader /> : null}

      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id} 
          conversation={conversation}
          lastIdx={idx === conversations.length - 1}
        />
      ))}
    </div>
  );
};

export default Conversations;
