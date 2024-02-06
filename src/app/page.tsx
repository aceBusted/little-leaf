'use client';
import Cards from "@/components/cards";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
// import Footer from "@/components/footer";
import Image from "next/image";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script'

export default function Home() {
  return (
    <div>
      <Navbar />
     
      

      <Parallax pages={2} >
        <ParallaxLayer offset={0} speed={0.2}>
          <Hero />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.2}>
          <Cards />
        </ParallaxLayer>
        <ParallaxLayer>
        {/* <Footer /> */}
        </ParallaxLayer>
    
    </Parallax>

      
    <GoogleAnalytics gaId="G-C8T4WZVMKH" />

     
  
      
    </div>
  );
}

