import React, { useEffect, useRef, useState } from 'react'

function Eyes() {
    const [rotateLeft, setRotateLeft] = useState(0)
    const [rotateRight, setRotateRight] = useState(0)
    const leftEyeRef = useRef(null)
    const rightEyeRef = useRef(null)


    useEffect(()=>{
        window.addEventListener("mousemove", (e)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;
            
            if(leftEyeRef){
                const leftEyeRect = leftEyeRef.current.getBoundingClientRect();
                const leftEyeCenterX = leftEyeRect.left + leftEyeRect.width / 2;
                const leftEyeCenterY = leftEyeRect.top + leftEyeRect.height / 2;

                const deltaXLeft = mouseX - leftEyeCenterX;
                const deltaYLeft = mouseY - leftEyeCenterY;

                var angleLeft = Math.atan2(deltaYLeft, deltaXLeft) * (180/Math.PI);
                setRotateLeft(angleLeft-180);
            }

            if(rightEyeRef){
                const rightEyeRect = rightEyeRef.current.getBoundingClientRect();
                const rightEyeCenterX = rightEyeRect.left + rightEyeRect.width / 2;
                const rightEyeCenterY = rightEyeRect.top + rightEyeRect.height / 2;

                const deltaXRight = mouseX - rightEyeCenterX;
                const deltaYRight = mouseY - rightEyeCenterY;

                var angleRight = Math.atan2(deltaYRight, deltaXRight) * (180/Math.PI);
                setRotateRight(angleRight-180);   
            }
        })
    })
  return (
    <div className='eyes relative w-full h-screen overflow-hidden bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
            <div className='flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full relative'>
                <div ref={leftEyeRef} style={{transform: `translate(-50%, -50%) rotate(${rotateLeft}deg)`}} className='flex items-center absolute top-1/2 left-1/2 w-full h-10'>
                    <div className='ml-8 w-32 h-32 relative bg-zinc-900 rounded-full'>
                        <div className='w-6 h-6 bg-zinc-100 rounded-full absolute top-1/2 left-2 -translate-y-[50%]'></div>
                    </div>
                </div>
                
            </div>
            <div className='flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full relative'>
                <div ref={rightEyeRef} style={{transform: `translate(-50%, -50%) rotate(${rotateRight}deg)`}} className='flex items-center absolute top-1/2 left-1/2 w-full h-10'>
                    <div className='ml-8 w-32 h-32 relative bg-zinc-900 rounded-full'>
                        <div className='w-6 h-6 bg-zinc-100 rounded-full absolute top-1/2 left-2 -translate-y-[50%]'></div>
                    </div>
                </div>    
            </div>
        </div>
    </div>
  )
}

export default Eyes