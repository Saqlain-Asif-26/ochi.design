import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.8" className='w-full h-screen mb-64 pt-1 overflow-hidden'>
        <div className='textstructure mt-32 px-20'>
          {["We create", "eye opening", "presentations"].map((item, index)=>{
            return <div className="masker">
              <div className='w-fit flex items-center'>
                {index === 1 && (
                  <motion.dev initial={{width: 0}} animate={{width: "9vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration: 1}} className='mr-[1vw] rounded-md w-[9vw] h-[5.8vw] relative top-[0.5vw]  bg-cover bg-fix bg-[url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")]'></motion.dev>
                )}
                <h1 className='flex items-center uppercase font-founders leading-[7.5vw] h-full text-[9vw]'>{item}</h1>
              </div>
            </div>
          })}
        </div>
        <div className='border-t-[1px] border-zinc-700 mt-12 flex justify-between items-center py-5 px-20'>
          {["For public ad private componies", "From the first pitch to IPO"].map((item, index)=><p className='text-md tracking-tight font-light leading-none'>{item}</p>)}
          <div className='start flex items-center gap-2'>
            <div className='cursor-pointer uppercase px-5 py-2 border-[1px] border-zinc-400 font-light text-md rounded-full'>start the project</div>
            <div className='cursor-pointer h-10 w-10 border-[1px] flex justify-center items-center border-zinc-400 rounded-full'>
              <span className='rotate-[45deg]'>
                <FaArrowUpLong />
              </span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default LandingPage