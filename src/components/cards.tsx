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

 
function Cards() {
  return (
    <div className='flex justify-center'>
    <Carousel className="w-full max-w-2xl">
    <CarouselContent>
      {compt.map((member) => (
        <CarouselItem key={member.name}>
          <div className="p-1">
            <Card>
            <CardHeader>
      <CardTitle>{member.title}</CardTitle>
      <CardDescription>{member.desc}</CardDescription>
      </CardHeader>

              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-4xl font-semibold "><img src={member.img} alt="" className='rounded-xl'/></span>
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

