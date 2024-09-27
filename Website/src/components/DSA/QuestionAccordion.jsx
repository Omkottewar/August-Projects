import { CheckBox } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import article from '../../assets/article.svg'
import { Link } from 'react-router-dom';


const QuestionAccordion = ({topic,list}) => {
    const [open,setOpen] = useState(false);
    const [subQuestions,setSubQuestions] = useState(false);
  return (
    <div className="w-full">
    <div className="flex flex-col w-[98%] bg-[#2e2e2e] border border-[#5c5c5e] px-4 py-2 rounded-lg cursor:pointer" >
            <div className="flex justify-between" onClick={()=>setOpen(!open)}>
            <p className={`h-16 text-xl font-semibold${open?"text-[#EE4B2B]":'text-white'}`}>{topic}</p>
            <p className='border content-center h-8 w-8 text-center'>{open?'-':'+'}</p>
            </div>
            {open?<div>
              
                        <div className="grid grid-cols-4 grid-rows-2 rounded-xl overflow-hidden">
                        <div className="col-span-1 border border-[#8b8a8a] text-center">STATUS</div>
                        <div className="col-span-1 border border-[#8b8a8a] text-center">PROBLEM</div>
                        <div className="col-span-1 border border-[#8b8a8a] text-center">ARTICLE</div>
                        <div className="col-span-1 border border-[#8b8a8a] text-center">DIFFICULTY</div>
                        {list?.map((item)=>{
                            console.log(item)
                            let diff = ''
                            if(item.difficulty===0){
                                diff = "easy";
                            }else if(item.difficulty===1){
                                diff = "medium"
                            }else{
                                diff ="hard"
                            }
                            return(
                                <>
                                 <div className="col-span-1 border border-[#8b8a8a] text-center">check</div>
                        <div className="col-span-1 border border-[#8b8a8a] text-center">{item.question_title}</div>
                        <div className="col-span-1 border border-[#8b8a8a] text-center flex justify-center items-center py-1">{<Link><img className='w-8' src={article} /></Link>}</div>
                        <div className="col-span-1 border border-[#8b8a8a] text-center content-center">{diff}</div>
                                </>
                               
                            )
                        })}
                      </div>
            </div>:''}
        </div>
    </div>
  )
}

export default QuestionAccordion