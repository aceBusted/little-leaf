'use client';
import Cards from "@/components/cards";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script'
import Anime from "@/components/anime";
import Cardlayout from "@/components/cardlayout";

export default function Home() {
  return (
    <div>
      <Navbar />
       
      

      <Parallax pages={4} >
        <ParallaxLayer offset={0} speed={1}>
          <Hero />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1} className="w-auto">
          <Cards />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1}>
          <Anime />
        </ParallaxLayer> 
        <ParallaxLayer offset={3} speed={1}>
          <Cardlayout />
        </ParallaxLayer>
    </Parallax>


      
    <GoogleAnalytics gaId="G-C8T4WZVMKH" />

     
  
      
    </div>
  );
}

