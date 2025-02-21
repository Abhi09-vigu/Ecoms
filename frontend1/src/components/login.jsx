import React from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import Loginpage from "../pages/login";

function Login(props) {

    let [hide,sethide]=useState(true)
    const handlehide=()=>{
      sethide(!hide)
    }
    

  return (
    <>
      <div className="border-2 w-[550px]">
        <h1 className="text-3xl font-bold text-center">
          Login to your account
        </h1>

        <div className="w-7/10 h-85 m-auto mt-10 mb-10 shadow-lg">
          <label htmlFor="" className="block ml-10 mt-10">
            Email address
          </label>
          <input
            type="text"
            className="border-1 w-8/10 block m-auto h-8 rounded-md"
          />
          <label htmlFor="" className="block ml-10 mt-5 ">
            Password
          </label>
          <div className="flex  w-8/10 m-auto">
            <input
              type= {hide?"password":"text"}
              className="border-1 w-[88%] block m-auto h-8 rounded-tl-md rounded-bl-md "/>

              {hide?<FaRegEye className="border-1 h-8 ml-0 mr-5 w-6" onClick={handlehide}/>:<FaRegEyeSlash className="border-1 h-8 ml-0 mr-5 w-6" onClick={handlehide}/>}
            
          </div>

          <div className="flex m-auto mt-5  w-[80%]  justify-between ">
            <div className="flex  w-[48%]">
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
                
            </div>
              
            <h6 className="font-semibold text-blue-700">Forgot password</h6>
          </div>

          <button
           
            type="submit"
            className=" w-8/10 block m-auto bg-blue-500 rounded-m mt-5 h-8 rounded-md"
          >
            {" "}
            <p className="text-xl font-bold text-white">Login</p>

          </button>


          <h6 onClick={props.x} className="ml-9">Not have any account?</h6>
        </div>
      </div>
     
    </>
  );
}
export default Login;