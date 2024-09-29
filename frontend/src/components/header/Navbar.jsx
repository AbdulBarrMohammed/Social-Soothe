import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <div className="flex justify-between p-5 items-center bg-white fixed top-0 left-0 right-0 z-10 shadow-md">
        <div className='flex gap-12 items-center'>
            <h1 className='text-2xl font-bold text-[#44423F]' onClick={() => navigate("/")}>Social<span className='text-3xl'>.</span>Soothe</h1>
            <ul className="flex gap-5 cursor-pointer text-[#44423F]">
                <li className='hover:font-bold transition duration-300 ease-in-out'>About</li>
                <li className='hover:font-bold transition duration-300 ease-in-out'>FAQ</li>
                <li className='hover:font-bold transition duration-300 ease-in-out'>Reviews</li>
                <li className='hover:font-bold transition duration-300 ease-in-out'>Contact</li>
            </ul>
        </div>

        <ul className="flex gap-5 cursor-pointer text-[#44423F]">
            <li className='hover:font-bold transition duration-300 ease-in-out' onClick={() => navigate("/signup")}>Sign up</li>
            <li className='hover:font-bold transition duration-300 ease-in-out' onClick={() => navigate("/login")}>Log in</li>
        </ul>

    </div>
  )
}

export default Navbar
