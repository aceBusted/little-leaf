import React from 'react';
import feature1 from "@/config/feature1.json" ;
import { Card, CardContent ,CardHeader ,CardTitle ,CardDescription ,CardFooter} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import compt from "@/config/feature1.json";
import { Button } from './ui/button';

 
function Cards() {
  return (
    <div className='flex justify-center hover:scale-105 transform transition-transform ease-in-out duration-100'>
    <Carousel className="w-full md:w-30 max-w-lg md:max-w-lg">
    <CarouselContent>
      {compt.map((member) => (
        <CarouselItem key={member.name} >
          <div className="p-1">
            <Card>
            <CardContent className="flex w-100 h-100 items-center justify-center p-4">
                <span className=" font-semibold"><img className="w-full h-[300px]  sm:h-[350px] rounded"src={member.img} alt="" /></span>
            </CardContent>
            <CardContent>
                <CardTitle className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{member.title}</CardTitle>
                <CardDescription className="mb-3 font-normal text-gray-700 dark:text-gray-400">{member.desc}</CardDescription>
                <Button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-700 dark:bg-green-700 dark:hover:bg-green-800 dark:focus:ring-green-800">Learn More</Button>
            </CardContent>
      
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
  </div>
      
  )
}

export default Cards

