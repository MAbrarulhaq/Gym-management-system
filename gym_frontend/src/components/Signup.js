import React,{useState} from 'react'

import Modals from './Modals'




const Signup = () => {
 
    const [forgotpassword,setForgotPassword] = useState(false);
const handleClose= () => {
    setForgotPassword(prev=>!prev);
}



  return (
    <div className=' mt-20 ml-20 w-1/3 p-10 bg-gray-50 bg-opacity-50 h-[470px] overflow-y-auto border-2 border-slate-950'>
                <div className='text-center text-white font-sans text-3xl'>Register for GYM</div>
                <input type='text' className='w-full my-10 p-2 rounded-lg' placeholder='Enter Email' />
                <input type='text' className='w-full mb-10 p-2 rounded-lg' placeholder='Enter GYM Name' />
                <input type='text' className='w-full mb-10 p-2 rounded-lg' placeholder='Enter username' />
                <input type='password' className='w-full mb-10 p-2 rounded-lg' placeholder='Enter password' />
                <input type='file' className='w-full p-2 rounded-lg' ></input>
                <img alt='default' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPv3NvyRiaWCq9w8R9QqyJOJ9hNNAz1yKnsg&s' className='h-[200px] w-[250px] p-2 mb-1'/>

                <div className=' font-semibold text-center p-3 w-[80%] mx-auto rounded-lg border-2 text-white font-sans text-lg bg-slate-900 hover:bg-white hover:text-black cursor-pointer '>Register</div>
                <div className='m-2 font-semibold text-center p-3 w-[80%] mx-auto rounded-lg border-2 text-white font-sans text-lg bg-slate-900 hover:bg-white hover:text-black cursor-pointer' onClick={()=>handleClose()}>Forgot password</div>

                {forgotpassword && <Modals header="Forgot Password" handleClose={handleClose}/>}
     </div>
  )
}

export default Signup