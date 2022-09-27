import React from 'react';
import { LockClosedIcon, ClockIcon, BoltIcon, CurrencyDollarIcon, BanknotesIcon, UserIcon} from "@heroicons/react/24/solid"


function Benefits() {
  return (
    <div id='about' className='w-full px-6 lg:px-14 py-5 my-8'>
       <div className='flex items-center justify-between py-5 my-7 px-3'>
        <div className='flex flex-col justify-center space-y-3'>
            <h2 className='text-md lg:text-lg px-4 py-3 rounded-full bg-white w-fit'>Our Benefits</h2>
            <p>We are different. Get benefits from our <br /> insurance benefits you can enjoy with family</p>
        </div>
        <h1 className='text-3xl ml-2 lg:ml-0 lg:text-6xl'>Benefits Provided By <br/> Our Service</h1>
       </div>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center place-content-between '>
        <div className="card group">
            <div className="icon-con"><ClockIcon className="icon"/></div>
            <h3>Always Ready To Protect You 24 Hours</h3>
            <p>Increase products sales and increase the amount of cash that comes in for further development</p>
        </div>
        <div className="card group">
            <div className="icon-con"><LockClosedIcon className="icon"/></div>
            <h3>Insurance Claims Easily and Quickly</h3>
            <p>Increase products sales and increase the amount of cash that comes in for further development</p>
        </div>
        <div className="card group">
            <div className="icon-con"><CurrencyDollarIcon className="icon"/></div>
            <h3>Cheaper and Provide The Best Quality</h3>
            <p>Increase products sales and increase the amount of cash that comes in for further development</p>
        </div>
        <div className="card group">
            <div className="icon-con"><BanknotesIcon className="icon"/></div>
            <h3>Affordable Prices</h3>
            <p> We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible</p>
        </div>
        <div className="card group">
            <div className="icon-con"><BoltIcon className="icon"/></div>
            <h3>Snappy Process</h3>
            <p>Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms</p>
        </div>
        <div className="card group">
            <div className="icon-con"><UserIcon className="icon"/></div>
            <h3>People First</h3>
            <p>Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.</p>
        </div>
       </div>
    </div>
  )
}

export default Benefits