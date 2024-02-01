import React from 'react';
import feature1 from "@/config/feature1.json" ;
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/carousel";

function Card() {
  return (
    <Carousel className="card-w-full  max-w-screen-center px-3 py-3 h-screen items-center m-3">
      <CarouselContent className='border-black justify-center'>
      <div className="flex ">
        <CarouselItem className="basis-1/3">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ease-in-out duration-300 hover:scale-105">
                <a href="#">
                    <img className="rounded-t-lg" src="feature2.avif"  />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Planet Over Profit 2024</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Maximize your power efficiency to minimize pollution and contribute to a cleaner planet.</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-700 dark:bg-green-700 dark:hover:bg-green-800 dark:focus:ring-green-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>           
        </CarouselItem>

        <CarouselItem className='basis-1/3'>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ease-in-out duration-300 hover:scale-105">
                <a href="#">
                    <img className="rounded-t-lg" src="feature2.avif"  />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Planet Over Profit 2024</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Our sustainable solutions empower you to lessen your environmental impact and pave the way for a greener future.</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-700 dark:bg-green-700 dark:hover:bg-green-800 dark:focus:ring-green-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
        </CarouselItem>  
        <CarouselItem className='basis-1/3'>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ease-in-out duration-300 hover:scale-105">
                <a href="#">
                    <img className="rounded-t-lg" src="feature2.avif"  />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Planet Over Profit 2024</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Empower yourself with eco-conscious choices to decrease pollution and foster a sustainable world.</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-700 dark:bg-green-700 dark:hover:bg-green-800 dark:focus:ring-green-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
        
        </CarouselItem>
        </div>
      <CarouselNext className='bg-green/200 border-green/200 z-50'/>
      <CarouselPrevious className='bg-green/200 border-green/200 z-50'/>
      </CarouselContent>     
    </Carousel>
  )
}

export default Card

