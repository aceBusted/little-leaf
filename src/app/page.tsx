'use client';
import Card from "@/components/cards";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Parallax pages={2} >
      <ParallaxLayer offset={0} speed={2.5}>
        <Hero />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={2.5}>
      <Card />
      </ParallaxLayer>
    </Parallax>
      
        

     
  
      
    </div>
  );
}

