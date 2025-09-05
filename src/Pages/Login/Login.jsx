import React from 'react'
import './Login.css'
import { useState } from 'react'

const Login = () => {
const [showPassword, setShowPassword] = useState('Sign Up')

  return (
    <div className="login sm:flex flex-col justify-center items-center gap-10 py-20 px-30">
      <h1 className='text-3xl font-bold italic ml-10 sm:ml-0 mb-7 sm:mb-0 '>{showPassword}</h1>
      <form className='flex flex-col justify-center items-center sm:ml-13 '>
        {showPassword === 'Sign Up' && <input className='h-10 border-2 rounded-t-md border-gray-400 w-90 mb-7 placeholder:p-3 ' type="text" required placeholder='Username' />}
<input className='h-10 border-2 rounded-b-md  border-gray-400 w-90 mb-7 placeholder:p-3 ' type="Email" required placeholder='Email' />
<input className='h-10 border-2 rounded-b-md border-gray-400 w-90 placeholder:p-3' type="password" required placeholder='password' />

      </form>
      <div className="text flex justify-between w-90 translate-x-[-60px]  sm:translate-x-[0px] sm:ml-13 translate-y-[-20px] sm:translate-y-[-70px] text-black-400 ">
        <p>Forget your password?</p>
        {showPassword === 'Sign Up' ? <p className='cursor-pointer' onClick={()=>setShowPassword('Login')}>Login here</p> : <p className='cursor-pointer' onClick={()=>setShowPassword('Sign Up')}>Create Account</p>}
      </div>
      
      <button className='border-2 border-gray-400 bg-black
      sm:ml-13 sm:translate-y-[-90px] translate-x-[60px] sm:translate-x-[0px] text-white py-3 px-5 rounded-xl shadow-2xl cursor-pointer hover:text-black hover:bg-white transition ease-in-out duration-500'>Sign Up</button>

    </div>
  )
}

export default Login