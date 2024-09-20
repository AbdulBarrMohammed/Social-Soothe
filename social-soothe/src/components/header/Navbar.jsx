import React from 'react'

const Navbar = () => {
  return (
    <div class="flex justify-between p-5 items-center">
        <div className='flex gap-12 items-center'>
            <h1 className='text-2xl font-bold'>Social<span className='text-[#326EF2] text-3xl'>.</span>Soothe</h1>
            <ul class="flex gap-5 cursor-pointer">
                <li className='hover:text-[#4AA2F8] transition duration-300 ease-in-out'>About</li>
                <li className='hover:text-[#4AA2F8] transition duration-300 ease-in-out'>FAQ</li>
                <li className='hover:text-[#4AA2F8] transition duration-300 ease-in-out'>Reviews</li>
                <li className='hover:text-[#4AA2F8] transition duration-300 ease-in-out'>Contact</li>
            </ul>
        </div>

        <ul class="flex gap-5 cursor-pointer">
            <li className='hover:text-[#4AA2F8] transition duration-300 ease-in-out'>Sign up</li>
            <li className='hover:text-[#4AA2F8] transition duration-300 ease-in-out'>Log in</li>
        </ul>

    </div>
  )
}

export default Navbar
