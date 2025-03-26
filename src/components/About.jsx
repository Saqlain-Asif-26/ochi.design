import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.1" className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='font-neue text-[4vw] leading-[4.5vw] tracking-tight'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className='w-full flex gap-5 mt-20 border-t-[1px] pt-10 border-[#a1b562]'>
          <div className='w-1/2'>
            <h1 className='text-7xl'>Our Approach</h1>
            <button className='px-10 py-6 mt-10 bg-zinc-900 rounded-full text-white flex items-center gap-10 uppercase'>Read More <div className='w-2 h-2 rounded-full bg-zinc-100'></div></button>
          </div>
          <div className='w-1/2 h-[70vh] overflow-hidden rounded-3xl'>
            <img className='w-full h-full' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
          </div>
        </div>
    </div>
  )
}

export default About