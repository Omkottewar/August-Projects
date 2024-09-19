import React, { useEffect, useState } from 'react'
import { fetchQuestion } from '../Api/Api';
import uparrow from '../assets/uparrow.png'
import downarrow from '../assets/downArrow.png'
import QuestionAccordion from './QuestionAccordion';

const Accordion = ({topic,subQuestion}) => {
    const [open,setOpen] = useState(false);
    const [subQuestions,setSubQuestions] = useState(false);

  return (  
    <div className="w-screen">
    <div className="flex flex-col w-8/12 bg-[#191919] border border-[#525050] shadow-xl  px-4 py-2 rounded-lg cursor:pointer" >
            <div className="flex justify-between" onClick={()=>setOpen(!open)}>
            <p className={`h-16 text-xl font-semibold${open?"text-[#EE4B2B]":'text-white'}`}>{topic}</p>
            <p   className='border content-center h-8 w-8 text-center'>{open?'-':'+'}</p>
            </div>
            {open?<div className='flex flex-col gap-2'>
                {subQuestion?.map((item)=>{
                    return(
                        <QuestionAccordion topic={item.sub_step_title} list = {item.topics}  />
                    )
                })}
            </div>:''}
        </div>
    </div>
        
        
  )
}

export default Accordion