import { motion, useAnimation } from 'framer-motion'
import React from 'react'

function Featured() {
  const cards = [useAnimation(), useAnimation()]
  const handleHover = (index)=>{
    cards[index].start({y:"0"})
  }
  const handleHoverEnd = (index)=>{
    cards[index].start({y:"100%"})
  }

  return (
    <div className='w-full py-20'>
        <div className='w-full px-20 pb-20 border-b-[1px] border-zinc-700'>
            <h1 className='text-7xl font-neue tracking-tight'>Featured projects</h1>
        </div>
        <div className="px-20">
            <div className='cards w-full flex gap-4 mt-10'>
              <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)} className="cardcontainer relative w-1/2 h-[75vh]">
                <h1 className='absolute flex overflow-hidden left-full top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 leading-none ml-2 text-8xl text-[#CDEA68] font-founders'>
                  {"FYDE".split("").map((item, index)=>(
                    <motion.span initial={{y:"100%"}} animate={cards[0]} transition={{ease: [.22, 1, .36, 1], delay: index*0.05}} className='inline-block'>{item}</motion.span>
                  ))}
                </h1>
                <div className='card w-full h-full rounded-xl overflow-hidden'>
                  <img className='h-full w-full bg-cover bg-center' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                </div>
              </motion.div>
              <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverEnd(1)} className="cardcontainer relative w-1/2 h-[75vh]">
              <h1 className='absolute flex overflow-hidden right-full top-1/2 translate-x-1/2 -translate-y-1/2 z-10 leading-none mr-2 text-8xl text-[#CDEA68] font-founders'>
                {"VISE".split("").map((item, index)=>(
                  <motion.span initial={{y:"100%"}} animate={cards[1]} transition={{ease: [.22, 1, .36, 1], delay: index*0.05}} className='inline-block'>{item}</motion.span>
                ))}
              </h1>
                <div className='card w-full h-full rounded-xl overflow-hidden'>
                  <img className='h-full w-full bg-cover bg-center' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                </div>
              </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Featured