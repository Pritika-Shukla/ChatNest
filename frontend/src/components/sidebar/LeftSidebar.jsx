import React from 'react'
import SearchInput from './SearchInput'
import Logout from '../messages/Logout'
import Conversations from './Conversations'

const LeftSidebar = () => {
  return (
    <div className="w-full max-w-md min-w-[400px] h-full border-r-2 border-neutral-800 flex-shrink-0 relative overflow-y-auto bg-neutral-950 ">

      <SearchInput/>
   <div className="overflow-y-auto h-[calc(100vh-140px)] scrollbar-hide text-white">
      <Conversations/>
      </div>
    </div>
  )
}

export default LeftSidebar
