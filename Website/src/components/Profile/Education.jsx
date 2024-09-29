import React from 'react'

const Education = () => {
  return (
    <div className='border border-gray-500  h-[45.9rem]  p-4   rounded-md'>
      <h1 className='text-3xl'>Education & Certifications</h1>
      <div className="border border-gray-300 mt-3"></div>

    <div className="pl-5 flex flex-col ">
    <div className="flex justify-between mt-10 mb-5 items-center">
      <p className='text-xl font-semibold'>Fellowship in <br />Fullstack Development, Crio </p>
      <p className='font-semibold text-xl'>present</p>
      </div>
      <ul >
        <li className=''>Creating full-Scale responsive Web Applications</li>
        <li>Working with backend to create websites</li>
      </ul>
      <div className="flex justify-between mt-10 mb-5 items-center">
      <p className='text-xl font-semibold'>B.E. in  Mechanical Engg </p>
      <p className='font-semibold text-lg '>July 2023</p>
      </div>
      <ul className='list'>
        <li>Yeshwantrao Chavan college of Engg, Nagpur</li>
        <li>Completed BE in Mechanical Engineering</li>
        <li>Current CGPA - 8.56</li>
      </ul>

  <div className="flex justify-between items-center mt-10">
  <p className='text-xl font-semibold'>Diploma in ME Engg</p>
  <p className='font-semibold text-lg'>2017–2020</p>
  </div>
      <ul className='list'>
        <li>Government Polytechnic, Nagpur</li>
        <li>Percentile – 89.65%</li>
      </ul>
</div>
      
    </div>
  )
}

export default Education