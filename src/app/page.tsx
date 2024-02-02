'use client';
import Cards from "@/components/cards";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Parallax pages={2} >
      <ParallaxLayer offset={0} speed={3.5}>
        <Hero />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={3.5}>
    <Cards />
     
      </ParallaxLayer>
    </Parallax>
      
        

     
  
      
    </div>
  );
}

