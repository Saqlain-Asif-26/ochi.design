import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen flex gap-4 items-center px-20'>
      <div className='cardcontainer w-1/2 h-[60vh]'>
        <div className='card flex items-center justify-center relative rounded-xl w-full h-full bg-[#004D43]'>
          <img className='w-24' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
          <button className='absolute left-8 bottom-8 rounded-full px-4 py-1 border-2 text-sm border-[#CDEA68] text-[#CDEA68]'>&copy; 2024-2025</button>
        </div>
      </div>
      <div className='cardcontainer w-1/2 h-[60vh] flex gap-4'>
        <div className='card flex items-center justify-center relative rounded-xl w-1/2 h-full bg-[#212121]'>
          <img className='w-24' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
          <button className='absolute left-8 bottom-8 rounded-full px-4 py-1 border-2 text-sm text-zinc-100 uppercase'>rating 5.0 on clutch</button>
        </div>
        <div className='card flex items-center justify-center relative rounded-xl w-1/2 h-full bg-[#212121]'>
          <img className="w-24" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
          <button className='absolute left-8 bottom-8 rounded-full px-4 py-1 border-2 text-sm text-zinc-100 uppercase'>business bootcamp alumni</button>
        </div>
      </div>
    </div>
  )
}

export default Cards