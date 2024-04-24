import axios from 'axios'
import React, { useEffect }  from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import marvel from "../../public/Images/marvel.jpg"

const MarvelComic = () => {

    const {id} = useParams()
    const [item,setItem]=useState()


    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const res = await axios.get(`https://gateway.marvel.com/v1/public/comics/${id}/stories?ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a`);
                setItem(res.data.data.results[0]);
                console.log(res.data.data.results[0]);
            } catch (error) {
                console.error('Error fetching character data:', error);
            }
        };

        fetchCharacter(); // Call the fetch function here
    }, []);
    console.log(id)
  return (
   <>
  {/* {
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
        className={`flex flex-col h-screen  justify-around sm:flex-row md:items-center  `}>

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
  } */}



   </>
  )
}

export default MarvelComic