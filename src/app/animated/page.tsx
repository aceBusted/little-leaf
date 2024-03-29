'use client'
import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Anime from '@/components/anime'

function Page() {
  return (
    <div>
    <Parallax pages={4} style={{ top: '0', left: '0' }}>
      <ParallaxLayer offset={0} speed={2.5}>
        <p>Parallax</p>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={2.5}>
        <p>AMan</p>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={2.5}>
        <p>thee</p>
      </ParallaxLayer>
      <ParallaxLayer offset={3} speed={2.5}>
        <Anime />
      </ParallaxLayer>

    </Parallax>
        
    </div>
  )
}

export default Page