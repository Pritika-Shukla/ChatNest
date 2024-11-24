import { MessageCircleDashedIcon } from "lucide-react";
import { useEffect, useState } from "react";

const DisplayFullName = () => {
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    // Retrieve the stored value from local storage
    const storedUser = localStorage.getItem("auth-User");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setFullName(user.fullName);
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center text-center">
      <span className="text-gray-400 text-3xl truncate">
        Welcome {fullName || "Guest"} 👋
      </span>
      <span className="mt-3 flex items-center gap-2 text-2xl text-gray-400">
        Select a chat to start messaging
        <MessageCircleDashedIcon className=" text-gray-400" />
      </span>
    </div>
  );
};

export default DisplayFullName;
