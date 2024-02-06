import React from "react";
import Image from "next/image";

const Card = ({ title, description }) => (
  
  <div className="w-full p-8 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105">
    <h3 className="text-lg sm:text-2xl font-bold text-gray-800">{title}</h3>
    <p className="mt-2 text-sm sm:text-lg text-gray-800">{description}</p>
  </div>
);
function Anime()
{
  return (
    <div className="bg-green-500 dark:bg-green-500" id="section-features">
      <div className="mx-auto max-w-2xl py-12 px-4 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-cold tracking-tight text-white sm:text-4xl">Features</h2>
          <p className="mt-4 text-white text-xl">These are the features</p>
        </div>
        </div>
          <div className="mt-16 mb-8 lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"> 
            <div className="lg:col-start-1 mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4">
              <h3 className="text-lg sm:text-2xl font-bold text-white">Bio, Links</h3>
              <p className="mt-2 text-sm sm:text-lg text-white">
                discover about all the resources present 
              </p>
            </div>

            <div className="lg:col-start-8 xl:col-start-5 xl:col-span-4 flex justify-end">
              <Card
              title="Additional Feature"
              description="Custom content for the additional feature..."
            />
            </div>  
            </div>
          

          <div className="mt-16 mb-8 lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-8">
            <div className="lg:col-start-8 xl:col-start-9 mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4">
              <h3 className="text-lg sm:text-2xl font-bold text-white">Tags</h3>
              <p className="mt-2 text-sm sm:text-lg text-white">
                search through the names 
              </p>
              </div>
            <div className="lg:col-start-8 xl:col-start-5 xl:col-span-4 flex justify-end">
              <Card
              title="Additional Feature"
              description="Custom content for the additional feature..."
            />
              </div>
          </div>

          
          <div className="mt-16 mb-8 lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
            <div className="lg:col-start-1 mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4">
            <h3 className="text-lg sm:text-2xl font-bold text-white">Code</h3>
            <p className="mt-2 text-sm sm:text-lg text-white">Searching is easy
            </p>
            </div>
            <div className="lg:col-start-8 xl:col-start-5 flex-auto xl:col-span-4 flex justify-end">
              <Card
              title="Additional Feature"
              description="Custom content for the additional feature..."
            />
              </div>
           </div>

           <div className="mt-16 mb-8 lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-8">
            <div className="lg:col-start-8 xl:col-start-9 mt-6 lg;mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4">
              <h3 className="text-lg sm:text-2xl font-bold text-white">Reporting</h3>
              <p className="mt-2 text-sm sm:text-lg text-white">
                check out your profile
              </p>
              </div>
            <div className="lg:col-start-8 xl:col-start-5 xl:col-span-4 flex justify-end">
              <Card
              title="Additional Feature"
              description="Custom content for the additional feature..."
            />
              </div>
          </div>



          </div>
         
        
      
      
    
  )
}

export default Anime