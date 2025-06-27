import React,{useState,useEffect} from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LogoutIcon from '@mui/icons-material/Logout';


const Sidebar = () => {
    const [greeting, setGreeting] = useState("");
    const greetingmessege =()=>{
        const currenthours= new Date().getHours();
        if(currenthours < 12){
            setGreeting("Good Morning ")
        }
        else if(currenthours < 18){
            setGreeting("Good Afternoon ")
        }
        else if(currenthours < 21){
            setGreeting("Good Evening ")
        }
        else {
            setGreeting("Good Night")
        }

    }

    useEffect(()=>{
        greetingmessege()
    },[])   
    
  return (
    <div>
        <div className='w-1/4 h-[100vh] bg-black'>
            <div className='text-center text-white p-7 text-3xl font-serif '> Power Zone </div>

            <div className='flex gap-7 text-white '>
                <img alt='default' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPv3NvyRiaWCq9w8R9QqyJOJ9hNNAz1yKnsg&s' className='h-[100px] w-[100px] p-2 mt-1 ml-7 rounded-full border-2 border-white'/>
                <div>
                    <div className='text-xl mt-3'>{greeting}</div>
                    <div className='text-white font-bold'>admin</div>
                </div>
                
            </div>

            <div className="w-[90%] ml-4 border-t border-gray-500 my-12"></div>

            <div className=''>
                <div className=' ml-5 w-[90%] p-2 border-2 rounded-lg text-white bg-slate-900 text-xl font-semibold hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black'><HomeIcon sx={{fontSize:"32px"}} className='mr-4'/>  Dashboard</div>
                <div className=' ml-5 mt-4 w-[90%] p-2 border-2 rounded-lg text-white bg-slate-900 text-xl font-semibold hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black'><PeopleAltIcon sx={{fontSize:"32px"}} className='mr-4'/>  Member</div>
                <div className=' ml-5 mt-4 w-[90%] p-2 border-2 rounded-lg text-white bg-slate-900 text-xl font-semibold hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black'><LogoutIcon sx={{fontSize:"32px"}} className='mr-4'/>  LogOut</div>
            </div>
        
            

        </div>

        {/* <div>
            dashbo
        </div> */}
    </div>
  )
}

export default Sidebar