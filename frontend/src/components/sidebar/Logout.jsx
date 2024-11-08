import { LogOut } from 'lucide-react'
import React from 'react'

const Logout = () => {
  return (
    <div className="relative group m-6 cursor-pointer">
      <div className="text-pink-700 hover:text-red-600">
        <LogOut />
      </div>
      
      <span className=" bottom-full mb-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap  text-white text-base rounded py-1  opacity-0 group-hover:opacity-100 transition-opacity">
        Logout?
      </span>
    </div>
  )
}

export default Logout
