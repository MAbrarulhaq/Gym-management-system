import React from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const  navigate =   useNavigate();
  const handlelogin= () => {
      sessionStorage.setItem("isLogin", "true")
      navigate("/dashboard")
  } 

  return (
            <div className=' mt-20 ml-20 w-1/3 p-10 bg-gray-50 bg-opacity-50 h-fit border-2 border-slate-950'>
                <div className='text-center text-white font-sans text-3xl'>Login</div>
                <input type='text' className='w-full my-10 p-2 rounded-lg' placeholder='Enter username' />
                <input type='password' className='w-full mb-10 p-2 rounded-lg' placeholder='Enter password' />
                <div className=' font-semibold text-center p-3 w-[80%] mx-auto rounded-lg border-2 text-white font-sans text-lg bg-slate-900 hover:bg-white hover:text-black cursor-pointer' onClick={()=>handlelogin()}> Login</div>
            </div>
        
  )
}

export default Login