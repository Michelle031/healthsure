import React, { useEffect, useState } from 'react'

function Hero() {
    const [current, setCurrent] = useState(1);

    const setImage = () => {
        if (current < 4) {
            setCurrent(current + 1);
        } else {
            setCurrent(1);
        }
    }

    useEffect(() => {
        setTimeout(setImage, 5000);
    }, [current])


  return (
    <div id='home' style={{background: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.4)),url(/images/img${current}.png)`}} className="hero w-full h-screen relative top-0 left-0 flex flex-col text-white justify-center px-14 space-y-4 lg:space-y-3 leading-loose text-center">
        <h3 className='text-sm lg:text-base'>EXPERTLY CRAFTED POLICIES</h3>
        <h1 className='font-bold text-5xl lg:text-6xl'><span className='text-green-500'>Insurance</span> cannot be <br/>complicated anymore</h1>
        <p className='text-md lg:text-base leading-7'>Your health and wellbeing are important to us. When it <br/> comes  to staying  well,  physically, and  financially, <br /> we are with you all the way. </p>
    </div>
  )
}

export default Hero