import React from 'react';
import layoutdata from "@/config/layoutdata.json";
import Image from 'next/image';
function Cardlayout() {
  return (
    <main className='flex items-center justify-center'>
      <section className='grid lg:grid-cols-3 md:grid-cols-4 sm:grid-cols-1 gap-2 justify-center'>
        <div className='p-20 border border-green-400 rounded-md flex flex-col gap-2 lg:col-span-1 lg:row-span-2 md:col-span-1 md:row-span-2 sm:col-span-1'>
          <span className='text-[19px] font-Poppins font-bold text-center'>Up to</span>
          <span className='text-[48px] font-Poppins font-bold text-center'>30%</span>
          <span className='text-[19px] font-Poppins font-bold text-center'>of energy saving</span>
        </div>
        <div className='p-20 border border-green-400 rounded-md flex flex-col gap-2 lg:col-span-1 lg:row-span-2 md:col-span-1 md:row-span-2 sm:col-span-1'>
          <span className='text-[19px] font-Poppins font-bold text-center'>Delivering</span>
          <span className='text-[48px] font-Poppins font-bold text-center'>60% </span>
          <span className='text-[19px] font-Poppins font-bold text-center'>Reduction in Emissions</span>
        </div>
        <div className='p-20 border border-green-400 rounded-md flex flex-col gap-2 lg:col-span-1 lg:row-span-2 md:col-span-1 md:row-span-2 sm:col-span-1'>
          <span className='text-[22px] font-Poppins font-bold text-center'>Present in more than</span>
          <span className='text-[48px] font-Poppins font-bold text-center'>50 +</span>
          <span className='text-[22px] font-Poppins font-bold text-center'>cities </span>
        </div>
        <div className='p-20 border border-green-400 rounded-md flex-col gap-2 lg:col-span-2 lg:row-span-2 md:col-span-1 md:row-span-2 sm:col-span-1 flex justify-center items-center'>
          <div className="lg:w-1/2 md:w-1/2 sm:w-full flex flex-col justify-center">
            <span className='text-[19px] font-Poppins font-bold text-center'>Sustainability Everywhere,Ensuring</span>
            <span className='text-[48px] font-Poppins font-bold text-center'>90%</span>
            <span className='text-[19px] font-Poppins font-bold text-center'>Carbon Footprint Reduction</span>
        </div>


        </div>
        <div className='p-20 border border-green-400 rounded-md flex flex-col gap-2 lg:col-span-1 lg:row-span-2 md:col-span-1 md:row-span-2 sm:col-span-1'>
          <span className='text-[19px] font-Poppins font-bold text-center'>Upto</span>
          <span className='text-[48px] font-Poppins font-bold text-center'>25%</span>
          <span className='text-[22px] font-Poppins font-bold text-center'>cost Reduction Anually</span>
        </div>
      </section>
    </main>



  );

}

export default Cardlayout;
