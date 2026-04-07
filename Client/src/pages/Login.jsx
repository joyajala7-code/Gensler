import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";


export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  return (
   <div className='grid w-full h-screen place-items-center bg-cyan-400'>
 <div className="w-107.5 bg-white p-8 rounded-2xl shadow-lg">
    {/* Header Title */}
   <div className="flex justify-center mb-4">
    <h2 className="text-3xl font-semibold text-center">{isLogin ? "Login" : "Sign Up"}</h2>
   </div>
    {/* tab control */}

    <div className="relative flex  h-12 mb-6 border-gray-300 rounded-full overflow-hidden">
      <button onClick={()=> setIsLogin(true)} className={`w-1/2 text-lg font-medium transition-all z-10 ${isLogin ? "text-white" : "text-black"}`}>
        Login
        </button>

      <button onClick={()=> setIsLogin(false)} className={`w-1/2 text-lg font-medium transition-all z-10 ${!isLogin ? "text-white" : "text-black"}`}>
        Sign Up
      </button>

      <div className={`absolute top-0 h-full w-1/2 rounded-full bg-linear-to-r from-blue-700 via-cyan-600 to-cyan-200 ${isLogin ? "left-0" : "left-1/2"}`}></div>

    </div>

    {/* form section */}
    <form className="space-y-4">
      {!isLogin && (
        <input type="text" placeholder="Username" name="" id="" required className="w-full p-3 border-b-2 border-gray-300 focus:outline-none focus:border-cyan-500 placeholder:text-gray-400"/>
      )}

      {/* Shared input field */}
      <input type="email" placeholder="Email Address" name="" id="" required className="w-full p-3 border-b-2 border-gray-300 focus:outline-none focus:border-cyan-500 placeholder:text-gray-400"/>
      <input type="password" placeholder="Password" name="" id="" required  className="w-full p-3 border-b-2 border-gray-300 focus:outline-none focus:border-cyan-500 placeholder:text-gray-400"/>

      {/*Sign Up field */}
      {!isLogin && (
        <input type="password" placeholder="Confirm Password" name="" id="" required className="w-full p-3 border-b-2 border-gray-300 focus:outline-none focus:border-cyan-500 placeholder:text-gray-400" />
      )}

      {/* Forget Password for Login */}
      {isLogin && (

       <div className="text-right"> 
        <p className="text-cyan-600 hover:underline">Forget Password</p>
       </div> 

      )}

     {/* Shared button  */}
        <button className="w-full p-3 bg-linear-to-r from-blue-700 via-cyan-600 to-cyan-200 text-white rounded-full text-lg font-medium hover:opacity-90 transition">
        {isLogin ? "Login" : "Sign Up"}
        </button>

        {/* Switch Link */}
        <p className="text-center text-gray-600 ">{isLogin ? "Don't have an account? " : "Already have an account? "}
          <a href="#" onClick={(e)=> setIsLogin(!isLogin)} className="text-gray-600 hover:underine">
            {isLogin ? "Sign Up Now" : "Login"}
            </a>
        </p>
    </form>
</div>
</div>

  )
}
