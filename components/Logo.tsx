import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <Link href="/">
          <div className='flex space-x-2 items-center cursor-pointer'>
            <img src='/heart.svg' alt="heartbeat" className="scale-110 h-5 w-5"/>
            <h3 className='logo text-2xl font-bold'>Health<span className='text-green-500'>sure</span></h3>
        </div>
    </Link>
  )
}

export default Logo