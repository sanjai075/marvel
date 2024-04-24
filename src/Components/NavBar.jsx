import React from 'react'
import { Link } from 'react-router-dom'
import back from "../../public/Images/navbacksmall.jpg"
import back1 from "../../public/Images/navback2.jpg"

const NavBar = () => {
  return (
    <div  

    style={{
        backgroundImage:`url(${back})`
    }}
    className='text-white  bg-no-repeat  bg-cover h-16  flex justify-end items-center '>
     
     

        
         
             <div className='flex justify-around sm:justify-center sm:gap-20 font-bold sm:text-2xl sm:w-[60%] w-[50%]  '>
                  <Link className=' hover:text-red-700 transition-all duration-200 ease-out' to={"/"}>Home</Link>
                  <Link className=' hover:text-red-700 transition-all duration-200 ease-out' to={"/comic"}>Comics</Link>
                 <Link className=' hover:text-red-700 transition-all duration-200 ease-out' to={"/series"}>Series</Link>
             </div>
         </div>


  )
}

export default NavBar