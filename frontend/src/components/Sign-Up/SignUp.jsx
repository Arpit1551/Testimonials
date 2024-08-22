import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  const [email , setEmail] = useState();
  const [password , setPassword] = useState();

  return (
    <>
      <div className='h-screen bg-[rgb(21,23,25)] text-white flex flex-col justify-center items-center gap-20'>
        <h1 className='text-[4vh] font-bold'>Welcome back 👋</h1>

        <div className="MrForm w-[28%] h-fit px-8 py-6 rounded-md bg-[rgb(37,40,44)]">
          <form action="#" className='flex flex-col gap-5'>
            <div>
            <label htmlFor="email">Email</label>
            <input 
            type="email" 
            name="email" 
            required 
            placeholder='Your email' 
            className='w-full h-10 px-2 mt-1 outline-none text-black' 
            onChange={(e)=>(setEmail(e.target.value))}
            />
            </div>
            <div>
            <label htmlFor="password">Password</label>
            <input 
            type="password" 
            name="password" 
            minLength='8' 
            placeholder='Password' 
            className='w-full h-10 px-2 mt-1 text-black outline-none'
            onChange={(e)=>(setPassword(e.target.value))}
            />
            </div>
            <p className='text-blue-600 cursor-pointer hover:text-white'>Forgot Password ?</p>
            <button type="submit" className='w-full bg-blue-600 h-[2.6rem]'>Sign In</button>
          </form>

          <div className='w-full flex justify-center mt-4'>
          <p>Don't have an account? <Link to={'/Sign-Up'} className='text-blue-600 hover:text-white'>Sign up</Link></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp