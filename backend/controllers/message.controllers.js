export const sendMessage = (req, res) => {
  try {
    const { message } = req.body;
    const { id } = req.params;
    const { senderId } = req.user._id;
  } catch (error) {
    console.log("Error in sendMessage Controller ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
  console.log("message sent", req.params.id);
};
