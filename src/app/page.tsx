'use client';
import Cards from "@/components/cards";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Anime from "@/components/anime";
import Image from "next/image";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

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
          <Anime/>
        </ParallaxLayer>
    </Parallax>
      
        

     
  
      
    </div>
  );
}

