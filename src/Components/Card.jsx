import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Card = ({data}) => {

    let navigate = useNavigate()

    return (
   <>
  {
    data?.map((item)=>{
        return (
            <div 
            onClick={()=> navigate(`/${item.id}`)}
            className='bg-[#B41F23] text-white relative mt-3 p-1' key={item.id}>
            <img className='w-[100%] h-[75%] hover:scale-105 transition-all duration-300 ease-out' src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
            <div className='text-center sm:pt-4'>
                <h3 className='sm:text-xl text-sm '>{item.title || item.name}</h3>
            </div>
           </div>
        )
    })
  }
   </>
  )
}

export default Card