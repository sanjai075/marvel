import axios from 'axios'
import React, { useEffect }  from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import marvel from "../../public/Images/marvel.jpg"

const Marvel = () => {

    const {id} = useParams()
    const [item,setItem]=useState()


    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const res = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=2aa2f8a5de98c343cf5d2e7e6939d55c&hash=ef7f2e5c135f6b3c25225009828371e5`);
                setItem(res.data.data.results[0]);
                console.log(res.data.data.results[0]);
            } catch (error) {
                console.error('Error fetching character data:', error);
            }
        };

        fetchCharacter(); // Call the fetch function here
    }, []);
  return (
   <>
  {
    (!item)? "": (
        <div
        style={
            {
                backgroundImage: `url(${marvel})`,
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Adjust opacity by changing the last value (0.5 in this case)
        backgroundBlendMode: 'multiply', // Optional: Blend mode for the background color and image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
                
            

            }
        }
        className={`flex flex-col h-screen  justify-around sm:flex-row md:items-center mt-3  `}>

            <div className=' p-2 rounded-2xl md:w-[400px] '>
            <img className='rounded-2xl' src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
            </div>

            <div className="text-white text-2xl m-5 ml-8  md:w-[500px] font-['Orwgano,cursive']">
                <h1 className='text-center sm:text-left text-3xl mb-5'>
                    {item.name}
                </h1>
              
                <h4 className='text-xl'>
                    {item.description}
                </h4>
            </div>

        </div>
    )
  }



   </>
  )
}

export default Marvel