import React from "react";
import Footer from "./Footer";
import { useEffect,useState } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
const Layout = () => {
  
  useEffect(() => {  
    toast.custom(<div style={{backgroundColor:"aquamarine",color:"black", height:"50px",borderRadius:"10px",padding:"10px" ,fontWeight:"bolder"}}>"all features need some time to work due to use of free service of render . please wait for 1-2 min. "</div>)
    console.log("done")
  }, [])
    
  return (
    <div>
      
      <Navbar/>
      
      <Outlet style={{ minHeight: "70vh" }}/>
      <Toaster/>
      <Footer />
    </div>
  );
};

export default Layout;
