import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ComicCard = ({data,loading}) => {

    let navigate = useNavigate()

    return (
   < >
  {
    loading?<div><span className="loading loading-dots loading-lg"></span></div>:
    data?.map((item)=>{
        return (
            <div 
            // onClick={() => navigate(`/${item.id}/${item.title}`)}

            className='bg-[#B41F23] text-white relative mt-3 p-1  ' key={item.id}>
            <img className='w-[100%] h-[75%] hover:scale-105 transition-all duration-300 ease-out' src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
            <div className='text-center pt-1'>
                <h3 className='sm:text-xl  '>{item.title || item.name}</h3>
            </div>
           </div>
        )
    })
  }
   </>
  )
}

export default ComicCard