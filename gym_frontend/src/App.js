// import logo from './logo.svg';
import React from 'react';
import Home from './Pages/Home/Home';
import './App.css';
import {Routes,Route,useNavigate} from "react-router-dom";
import  {useState,useEffect } from "react";
import Dashboard from './Pages/Dashboard/Dashboard';
import Sidebar from "./components/Sidebar";

function App() {
 const navigate= useNavigate();
  const [isLogedIn, setIsLoggedIn] = useState();

  useEffect(() => {
    let isLogedIn=sessionStorage.getItem("isLogin");
    if(isLogedIn){
      setIsLoggedIn(true);
      navigate("/dashboard ");
    }
  }, [sessionStorage.getItem("isLogin")]) 







  return (
    
    <div className="flex">

      {
        isLogedIn && <Sidebar/>
      }




      <Routes>

      <Route path='/'element={<Home/>}/>
      <Route path='/dashboard'element={<Dashboard/>}/>
      
      </Routes>

    
   


    </div>
    
    
    
  );
}

export default App;
