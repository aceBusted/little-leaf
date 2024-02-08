'use client';
import Cards from "@/components/cards";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Cardlayout from "@/components/cardlayout";

export default function Home() {
  return (
    <div>
      <Navbar />
     
      

      <Parallax pages={3} >
        <ParallaxLayer offset={0} speed={0.2}>
          <Hero />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.2}>
          <Cards />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.2}>
          <Cardlayout />
        </ParallaxLayer>
          
    </Parallax>
      
      
        

     
  
      
    </div>
  );
}

