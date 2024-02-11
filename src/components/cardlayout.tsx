import React from 'react';
import layoutdata from "@/config/layoutdata.json";

function Cardlayout() {
  
  const itemWidths = ['lg:w-full', 'lg:w-1/2', 'lg:w-full', 'lg:w-1/2'];
  const colours = ['bg-green-400', 'bg-green-300', 'bg-green-300', 'bg-green-400'];
  
  return (
    <div className="flex rounded-xl items-center justify-center object-center w-full">
      <div className='grid grid-rows-2 grid-cols-2 gap-3 w-10/12 h-96'>
        {layoutdata.map((member, index) => (
          <div key={index} className={`border-2 rounded-xl p-2 flex flex-col items-center justify-center ${colours[index]} ${itemWidths[index]} flex-grow`}>
            <h1 className='text-xl'>{member.title}</h1>
            <p className='text-center'>{member.description}</p>
          </div>
        ))}
      </div>                    
    </div>
  );

}

export default Cardlayout;
