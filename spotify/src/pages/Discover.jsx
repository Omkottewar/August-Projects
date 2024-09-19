import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';
import axios from 'axios'
const Discover = () => {
   const genreTitle = 'Pop'

   const fetchData = async()=>{
    
   }

    return (
   
        <div className="flex flex-col">
        <div className="w-full flex justify-between items-center flex-col mt-4 mb-10 sm:flex-row  ">
          <h2 className="font-bold text-3xl text-white text-left">Discover {genreTitle}</h2>
  
         <select name="" id=""
         onChange=''
         value=''
         className='bg-black text-gray-300
          p-3 text-sm rounded-lg outline-none mt-5 sm:mt-0 '
         >
          {genres.map((genre)=>{
            return (<option key={genre.value} value={genre.value}>{genre.title}</option>)
          })}
         </select>
        </div>
        <div className="flex flex-wrap sm:justify-start justify-center gap-8">
          {[1,2,3,4,5,6,7].map((song,i)=>{
            return (
            <SongCard key={song.key} song={song} i={i}/>
            )
            
          })}
        </div>
      </div>
    )

};

export default Discover;
