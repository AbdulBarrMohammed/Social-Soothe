import React from 'react'

const Navbar = () => {
  return (
    <div class="flex justify-between p-5 items-center bg-white">
        <div className='flex gap-12 items-center'>
            <h1 className='text-2xl font-bold text-[#44423F]'>Social<span className='text-3xl'>.</span>Soothe</h1>
            <ul class="flex gap-5 cursor-pointer text-[#44423F]">
                <li className='hover:font-bold transition duration-300 ease-in-out'>About</li>
                <li className='hover:font-bold transition duration-300 ease-in-out'>FAQ</li>
                <li className='hover:font-bold transition duration-300 ease-in-out'>Reviews</li>
                <li className='hover:font-bold transition duration-300 ease-in-out'>Contact</li>
            </ul>
        </div>

        <ul class="flex gap-5 cursor-pointer text-[#44423F]">
            <li className='hover:font-bold transition duration-300 ease-in-out'>Sign up</li>
            <li className='hover:font-bold transition duration-300 ease-in-out'>Log in</li>
        </ul>

    </div>
  )
}

export default Navbar
