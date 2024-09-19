import React, { useEffect, useState } from 'react'
import { fetchDSAQuestion } from '../Api/Api'
import Accordion from './Accordion';

const Dsa = () => {
  const [questions ,setQuestions] = useState();

  const getData = async()=>{
    try{
      const res =await  fetchDSAQuestion();
      setQuestions(res.data);
    }catch(e){
      console.log('getData',e)
    }
  }
  useEffect(()=>{
    getData()    
  },[])

  return (
    <div className='pl-60 border-l flex flex-col gap-20 pt-28'>
      <div className="progress w-80 bg-[#191919] p-5 rounded-lg ">progress</div>
      <div className="flex flex-col gap-5 max-xl:gap-[2rem]">
      {questions?.map((category)=>{
        return(
          <Accordion subQuestion = {category.sub_steps} topic={category.step_title} />
        )
      })}
      </div>
      
    </div>
  )
}

export default Dsa