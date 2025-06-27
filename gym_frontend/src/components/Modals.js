import React,{useState} from 'react'
import ClearIcon from '@mui/icons-material/Clear';

const Modals = ({handleClose, header}) => {
   
  const [otpvalidateion, setOtpValidation] = useState(false) 
  const [emailsubmit, setEmailSubmit] = useState(false)
  const [contentvalue, setContentValue] = useState("Send OTP")
  
  const handleSubmit = () => {
    if (!emailsubmit) {
      setEmailSubmit(true);
      setContentValue("VERIFY")
    }
    else if (emailsubmit && !otpvalidateion) {
      setOtpValidation(true);
      setContentValue("NEW PASSWORD")
    }

    
  }

  return (
    <div className='w-full h-[100vh] fixed bg-black bg-opacity-50   text-black top-0 left-0 '>  
      <div className=' w-1/2 h-[70%] m-auto mt-32 bg-white '>

            <div className='p-4 flex justify-between'>
            <div className='text-4xl  text-black'> {header}</div>
            <div className='cursor-pointer' onClick={()=>handleClose()}><ClearIcon sx={{fontSize:"48px"}}/></div>
            </div>

            <div className='text-2xl text-bold  pl-3 w-full'>
            <div>Enter email</div>
            <input type='text' className='w-1/2  p-1 ml-2 rounded-lg border-2 border-black' placeholder='Enter Email' />
            {/* <div className=' mt-3 font-semibold text-center p-2 w-[80%] mx-auto rounded-lg border-2 text-white font-sans text-base bg-slate-500 hover:bg-white hover:text-black cursor-pointer' onClick={()=>handleSubmit()}> Send OTP</div> */}
            </div>

            {
            emailsubmit && <div className='text-2xl text-bold p-2 pl-3 w-full'>
            <div>Enter your OTP</div>
            <input type='text' className='w-1/2  p-1 ml-2 rounded-lg border-2 border-black' placeholder='OTP' />
            {/* <div className=' mt-3 font-semibold text-center p-2 w-[80%] mx-auto rounded-lg border-2 text-white font-sans text-lg bg-slate-500 hover:bg-white hover:text-black cursor-pointer' onClick={()=>handleSubmit()}>verify</div> */}
            </div>
            }

{
            otpvalidateion && <div className='text-2xl text-bold p-2 pl-3 w-full'>
            <div>Enter Your New Password</div>
            <input type='text' className='w-1/2  p-1 ml-2 rounded-lg border-2 border-black' placeholder='New Password' />
            {/* <div className=' mt-3 font-semibold text-center p-2 w-[80%] mx-auto rounded-lg border-2 text-white font-sans text-lg bg-slate-500 hover:bg-white hover:text-black cursor-pointer' onClick={()=>handleSubmit()}>New Password</div> */}
            </div>
            }

            <div className=' mt-3 font-semibold text-center p-2 w-[80%] mx-auto rounded-lg border-2 text-white font-sans text-base bg-slate-500 hover:bg-white hover:text-black cursor-pointer' onClick={()=>handleSubmit()}>{contentvalue}</div>



      </div>
      
      
    </div>
  )
}

export default Modals