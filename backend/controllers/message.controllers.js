import Conversation from "../models/conversation.model.js";
import Message from "../models/message.models.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id; 

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] }
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId]
      });
    }

    const newMessage = await Message.create({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
      await conversation.save();
    }

    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(200).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage Controller: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
  console.log("Message sent to receiver:", req.params.id);
};

export const getMessage = async (req, res, next) => {
  try {
    const { id: userToChat } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChat] },
    }).populate("messages");

    if(!conversation){
      return res.status(200).json([]);
    }
    const messages =conversation.messages
    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getMessage Controller: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};