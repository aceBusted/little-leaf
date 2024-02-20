import React from 'react';
import layoutdata from "@/config/layoutdata.json";
import Image from 'next/image';
function Cardlayout() {
  return (
    <main className='flex items-center justify-center'>
      <section className='grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 gap-2'>
        <div className='p-20 border border-green-400 rounded-md flex flex-col gap-2 lg:col-span-3 lg:row-span-2 md:col-span-3 md:row-span-2 sm:col-span-1'>
          <span className='text-[32px] font-Poppins font-bold text-center'>Title 1</span>
          <span className='text-[18px] text-center'>Description</span>
        </div>
        <div className='p-20 border border-green-400 rounded-md flex flex-col gap-2 lg:col-span-1 lg:row-span-2 md:col-span-1 md:row-span-2 sm:col-span-1'>
          <span className='text-[32px] font-Poppins font-bold text-center'>Title 2</span>
          <span className='text-[18px] text-center'>Description</span>
        </div>
        <div className='p-20 border border-green-400 rounded-md flex flex-col gap-2 lg:col-span-2 md:col-span-2 sm:col-span-1'>
          <span className='text-[32px] font-Poppins font-bold text-center'>Title 3</span>
          <span className='text-[18px] text-center'>Description</span>
        </div>
        <div className='p-20 border border-green-400 rounded-md flex flex-col gap-2 lg:col-span-2 md:col-span-2 sm:col-span-1'>
          <span className='text-[32px] font-Poppins font-bold text-center'>Title 4</span>
          <span className='text-[18px] text-center'>Description</span>
        </div>
      </section>
    </main>

  );

}

export default Cardlayout;
