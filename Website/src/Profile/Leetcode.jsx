import React, { useState,useEffect } from 'react'
import axios from 'axios';
import ProgressButton from './ProgressButton';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const Leetcode = () => {
    const[easyData,setEasy] = useState(null);
    const[mediumData,setMedium] = useState(null);
    const[hardData,setHard] = useState(null);
    const[total,setTotal] = useState(null);

    const fetchData = async () => {
        try {
            const res = await axios.get(`https://leetcode-stats-api.herokuapp.com/user7399La`);
            return res.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            return null; // Return a default value or handle the error as needed
        }
    };
    useEffect(() => {
        async function onLoad() {
            const data = await fetchData();
            setEasy(data.easySolved);
            setMedium(data.mediumSolved);
            setHard(data.hardSolved);
            setTotal(data.totalSolved)
        }
        onLoad();
    }, []);

  return (
    <>
    <h1 className='text-3xl'>Leetcode</h1>
    <div className="border border-gray-300 mt-3"></div>
    <div className='gap-10 xl:flex xl:flex-col  justify-between items-center mt-4'>  
    
        <div className="flex flex-col gap-5   justify-center items-center">
        <div style={{ width: 100, height: 100,marginTop:'30px' }}>
    <CircularProgressbar
    className=''
      value={(total/3253)*100}
      text={`${Math.floor((total/3253)*100)}%`}

      styles={buildStyles({
        textSize: '16px',
        pathColor: '#F43F5E',
        textColor: '#f88',
        trailColor: '#22C55E',
      })}
    />
  </div >
  <div className="flex flex-col gap-10 max-lg:flex-col ">
      <ProgressButton  className=' px-2 py-1 bg-[#212121]  border border-gray-500 w-32 flex items-center justify-between' > <span className='text-green-600 font-bold text-sm '>Easy</span> <span className='text-sm' >{easyData}</span> </ProgressButton>
      <ProgressButton  className=' px-2 py-1 bg-[#212121]  border border-gray-500 w-32 flex items-center justify-between' > <span className='text-orange-600 font-bold text-sm '>Medium  </span> <span className='text-sm' >{mediumData}</span> </ProgressButton>
      <ProgressButton  className=' px-2 py-1 bg-[#212121]  border border-gray-500 w-32 flex items-center justify-between' > <span className='text-red-600 font-bold text-sm'>Hard</span> <span className='text-sm' >{hardData}</span> </ProgressButton>
     </div>
     </div>
        
    </div>
    </>
    
  )
}

export default Leetcode