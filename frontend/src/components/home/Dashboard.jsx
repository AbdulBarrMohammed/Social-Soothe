import React from 'react'
import { useEffect } from 'react'

const Dashboard = () => {

    /*
    const getData = async () => {
        try {
            const response = await fetch(`http://localhost:8000/dashboard/${username}`)
            const json = await response.json()
            console.log(json)

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => getData, []) */

  return (
   <>
   <div className='flex  py-16 h-screen'>
      <aside className=' bg-[#F9F6F4] h-screen'>
        <ul className='py-10 flex flex-col'>
            <div className='flex gap-4 px-10 py-2 items-center hover:bg-[#D1CCC9] transition duration-300 ease-in-out'>
                <img src={"/public/images/home-outline.svg"} className='h-7'/>
                <li className='font-semibold text-lg'>Dashboard</li>
            </div>

            <div className='flex gap-4 px-10 py-2 items-center hover:bg-[#D1CCC9] transition duration-300 ease-in-out'>
                <img src={"/public/images/notebook-outline.svg"} className='h-7'/>
                <li className='font-semibold text-lg'>Journal</li>
            </div>

            <div className='flex gap-4 px-10 py-2 items-center hover:bg-[#D1CCC9] transition duration-300 ease-in-out'>
                <img src={"/public/images/clock-time-nine-outline.svg"} className='h-7'/>
                <li className='font-semibold text-lg'>Breathing exercise</li>
            </div>

            <div className='flex gap-4 px-10 py-2 items-center hover:bg-[#D1CCC9] transition duration-300 ease-in-out'>
                <img src={"/public/images/progress-helper.svg"} className='h-7'/>
                <li className='font-semibold text-lg'>Social Soothe challenge</li>
            </div>

            <div className='flex gap-4 px-10 py-2 items-center hover:bg-[#D1CCC9] transition duration-300 ease-in-out'>
                <img src={"/public/images/heart-outline (1).svg"} className='h-7'/>
                <li className='font-semibold text-lg'>Daily affirmations</li>
            </div>

            <div className='flex gap-4 px-10 py-2 items-center hover:bg-[#D1CCC9] transition duration-300 ease-in-out'>
                <img src={"/public/images/book-open-page-variant-outline.svg"} className='h-7'/>
                <li className='font-semibold text-lg'>Articles</li>
            </div>
        </ul>
      </aside>
   </div>
   </>
  )
}

export default Dashboard
