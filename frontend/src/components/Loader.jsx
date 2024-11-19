import React from 'react'

const Loader = () => {
  return (
<div className='flex items-center justify-center mx-auto h-screen'>
<div class="flex-col gap-4 w-full flex items-center justify-center">
  <div
    class="w-4 h-4 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full"
  >
    <div
      class="w-4 h-4 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"
    ></div>
  </div>
</div>

</div>
  )
}

export default Loader
