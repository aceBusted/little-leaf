import React from 'react';
import feature1 from "@/config/feature1.json" ;

function Card() {
  return (
    <div className='bg-gray-200 flex items-center justify-center h-screen'>
      <div className='flex w-620 h-420 sm:w-320 h-661 basis-1/2 '>
        {feature1.map((member)=>(
          <div className="font-thin" key={member.name}>
           <div className=" transition-all duration-700 hover:scale-110 flex basis-1/2">
        <div className=' mx-2 bg-white rounded-md overflow-hidden shadow-md  '>
            <div className='bg-gray-700 text-white px-6 py-4'>  
            <h2 className='text-xl font-semibold'>{member.name}</h2>
            </div>
            <div className="">
              <img className='w-310 h-210 sm:w-170 h-332' src={member.img}/>
            </div>
          </div>
      </div>
          </div>
        ))}

        {/* This is tempalte div all the elements are renderd in one stlye no need to paste multiple times  */}
      {/* <div className=" transition-all duration-700 hover:scale-110">
        <div className='w-620 h-420 mx-2 bg-white rounded-md overflow-hidden shadow-md flex basis-1/2 sm:w-320 h-661 '>
            <div className='bg-gray-700 text-white px-6 py-4'>
            feature   <h2 className='text-xl font-semibold'>Feature 1</h2>
            </div>
            <div className="">
              <img className='w-310 h-210 sm:w-170 h-332' src='https://plus.unsplash.com/premium_photo-1681987448179-4a93b7975018?q=80&w=310&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            </div>
          </div>
      </div> */}
      </div>
    </div>
  )
}

export default Card