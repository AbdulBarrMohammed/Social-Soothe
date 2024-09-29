import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const SignUp = () => {

  //navigation
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState(null)
  const [username, setUsername] = useState(null);
  const [gender, setGender] = useState(null);




  //handle submit of sign up form
  const handleSubmit = async (e, endpoint) => {
    e.preventDefault()
    console.log(`http://localhost:8000/${endpoint}`);
    console.log("submot button pressed")

    const response = await fetch(`http://localhost:8000/${endpoint}`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ email, password, username, gender})
    })

    const data = await response.json()
    console.log(data)
  }


  return (
   <div className= "flex items-center justify-center h-screen">
    <div className='flex flex-col justify-center items-center'>
        <h2 className='text-3xl font-bold py-10'>Social.Soothe</h2>
        <form className='flex flex-col gap-5 ' onSubmit={(e) => handleSubmit(e, 'signup')}>
          <div className='flex flex-col gap-5'>
            <input className="border-solid border border-[#cccccc] p-2 w-80 rounded-sm font-medium"
            name="email"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}/>

            <input className="border-solid border border-[#cccccc] p-2 rounded-sm font-medium"
            name="username"
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}/>

            <input className="border-solid border border-[#cccccc] p-2 rounded-sm font-medium"
             name="password"
             type="password"
             placeholder="Password"
             onChange={(e) => setPassword(e.target.value)}/>

            <select className="border-solid border p-2 rounded-sm" onChange={(e) => setGender(e.target.value)}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Non-binary">Non-binary</option>
            </select>

            <button className="bg-[#EE7B30] text-white  p-2 rounded-md text-lg font-bold shadow-md" type= "submit">Sign up</button>
          </div>

          <div className='text-center'>
            <p>Have an account? <a className='font-bold cursor-pointer' onClick={() => navigate("/login")}>Log in</a></p>
          </div>


        </form>
    </div>
   </div>
  )
}

export default SignUp
