import { LogOut } from "lucide-react";
import React from "react";
import useLogout from "../../hooks/useLogout";
import Loader from "../Loader";

const Logout = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="absolute top-4 right-4 m-6 cursor-pointer">
      {!loading ?(
          <><div className="text-pink-700 hover:text-red-600">
          <LogOut onClick={logout} />
        </div><p>Logout</p><span className="bottom-full mb-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-white text-base rounded py-1 opacity-0 group-hover:opacity-100 transition-opacity">
            Logout?
          </span></>
      ) :(
     <Loader/>
  )}
  </div>
)};

export default Logout;
