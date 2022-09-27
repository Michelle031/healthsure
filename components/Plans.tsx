import React from 'react'
import Plan from './Plan'


function Plans() {
  return (
    <div id='plans' className='flex flex-col justify-center items-center mt-15 my-10 space-y-4 min-h-screen'>
        <h1 className='text-3xl'>Our Plan For Your Strategies</h1>
        <p className='text-[#777] text-center '>See below at three main plans for your insurance, for you and <br /> your family. It starts from here! Make a choice </p>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 !mt-10'>
            <Plan id={"price_1LmhocH9dmkBLhng2KhwwUac"} plan='Lite Plan' price={29} healthcare="6" part={4}/>
            <Plan id={"price_1LmhppH9dmkBLhngvmWFXEyS"} plan='Basic Plan' price={49} healthcare="12" part={7}/>
            <Plan id={"price_1LmhtWH9dmkBLhngXDeoXHRu"} plan='Plus Plan' price={69} healthcare="Unlimited" part={7}/>
        
        </div>
    </div>
  )
}

export default Plans