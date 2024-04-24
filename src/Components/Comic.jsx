import React from 'react'



import  { useEffect, useState } from 'react'
import axios from 'axios'
import marvel from "../../public/Images/navback.jpg"
import marvellogo from "../../public/Images/marvellogo.png"
import ComicCard from './ComicCard'
import marvel1 from "../../public/Images/marvelback.png"

const Comic = () => {

    const [url,setUrl]=useState("https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=2aa2f8a5de98c343cf5d2e7e6939d55c&hash=ef7f2e5c135f6b3c25225009828371e5")
  const [items,setItems]=useState()
  const [search,setSearch]=useState()
  const [loading,setLoading]=useState(false)
  
useEffect(()=>{
    const fetch=async()=>{
      setLoading(true)
      const res=await axios.get(url)

      setItems(res.data.data.results);
      console.log(res.data.data.results)
      setLoading(false)
      
      
    }
    fetch();
  },[url])

  
console.log(items)
const searchMarvel =()=>{
  setUrl(`https://gateway.marvel.com:443/v1/public/comic?titleStartsWith=${search}&ts=1&apikey=2aa2f8a5de98c343cf5d2e7e6939d55c&hash=ef7f2e5c135f6b3c25225009828371e5`)
  
}

  return (
    <>
    <div>
        {/* <div className=''>
            <img className='w-[100%] object-cover  mb-5 h-[550px] opacity-85' src={marvel} alt="" />
        </div> */}
       
       <div
        style={{
          backgroundImage:`url(${marvel})`
        }}
        className=' bg-cover bg-no-repeat flex items-center justify-around  mt-4'>
           <div className='flex justify-center items-center '>
           <img className='w-32 md:w-60' src={marvellogo} alt="logo" />
            <input 
            onChange={(e)=>setSearch(e.target.value)}
            onKeyPress={()=>searchMarvel()}
            className='  bg-black ml-2 w-[250px] outline-none md:w-[300px] h-[40px] rounded-xl border border-red-700 text-white text-2xl p-2' type="search" placeholder='Search Here' />
             </div>
            <div className='  object-cover '>
              <img className='hidden sm:block h-32 ' src={marvel1} alt="" />
            </div>
         

        </div>


        <div className={!loading?'width-[80%]   sm:grid sm:grid-cols-[repeat(auto-fill,minmax(230px,1fr))] grid  grid-cols-2 gap-1 m-3 min-h-screen':'flex justify-center min-h-screen'}>
          {!items ? <div className=' w-32 flex justify-center items-start mt-3 '><span className="loading loading-dots loading-lg mt-4 "></span></div>: <ComicCard data={items}
          loading={loading}/>}
          

        </div>
    </div>
    </>
  )
}

export default Comic