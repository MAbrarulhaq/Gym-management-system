import React from 'react'
import Signup from '../../components/Signup'
import Login from '../../components/Login_Temp'

const Home = () => {
  return (
    <div className="w-full h-[100vh]">
      <div className='text-white bg-black p-5 border-slate-900 border-4'>
        GYM Management System
      </div>


      <div className=' w-full bg-cover flex justify-center h-[100%] bg-[url("https://img.freepik.com/free-photo/3d-render-spotlights-grunge-brick-wall_1048-6284.jpg?ga=GA1.1.490855881.1729749418&semt=ais_hybrid")]'>
        <div className='p-12 w-full flex gap-40'>
        <Login/>
        <Signup/>

        </div>
      </div>

     </div>
    
  
  )
}

export default Home