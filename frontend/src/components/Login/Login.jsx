import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cors from 'cors';
import axios from 'axios';

function Login() {
  
    const [username , setuserName] = useState();
    const [email , setEmail] = useState();
    const [password , setPassword] = useState();

    const formSubmition = async (e)=>{
      console.log('Clicked')
      e.preventDefault();

      try {
        await axios.post('http://localhost:3000/data',{
            username,
            email,
            password
        })
        setuserName('');
        setEmail('');
        setPassword('');
      } catch (error) {
        console.log("Unable to send your data due to ==> ",error)
      }
    }

  return (
    <>
      <div className='h-screen bg-[rgb(21,23,25)] text-white flex flex-col justify-center items-center gap-14 '>
        <div className='flex justify-center items-center flex-col'>
        <h1 className='text-[4vh] font-bold'>Sign up for free 🤗</h1>
        <h1 className='text-[3vh] text-[rgb(164,165,165)]'>You will get 2 video and 10 text testimonial credits for FREE!</h1>
        </div>

        <div className="MrForm w-[28%] h-fit px-8 py-6 rounded-md bg-[rgb(37,40,44)]">
          <form className='flex flex-col gap-5' onSubmit={formSubmition}>
            <div>
            <label htmlFor="Name">First Name <span className='text-red-600'>*</span></label>
            <input 
            type="text" 
            name="Name" 
            required 
            placeholder='Your First Name' 
            className='w-full h-10 px-2 mt-1 outline-none text-black'
            value={username}
            onChange={(e)=>(setuserName(e.target.value))}
            />
            </div>

            <div>
            <label htmlFor="email">Email <span className='text-red-600'>*</span></label>

            <input 
            type="email" 
            name="email" 
            required 
            placeholder='Your@email.com' 
            className='w-full h-10 px-2 mt-1 outline-none text-black'
            value={email}
            onChange={(e)=>(setEmail(e.target.value))}
             />
            </div>
            <div>

            <label htmlFor="password">Password <span className='text-red-600'>*</span></label>
            
            <input 
            type="password" 
            name="password" 
            minLength='8' 
            placeholder='Password' 
            className='w-full h-10 px-2 mt-1 text-black outline-none'
            value={password}
            onChange={(e)=>(setPassword(e.target.value))}
            />
            </div>

            <button type="submit" className='w-full bg-blue-600 h-[2.6rem]'>Sign Up</button>
          </form>

          <div className='w-full flex justify-center mt-4'>
          <p className='text-[rgb(164,165,165)]'>Already have an account? <Link to="/Sign-In" className='text-blue-600 hover:text-white'>Sign In</Link></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login