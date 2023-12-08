'use client'
import Image from 'next/image'
import { gsap } from "gsap";
import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import './globals.scss'
import localFont from 'next/font/local'
 
// Font files can be colocated inside of `pages`
const futura = localFont({ src: './components/futura.ttf' })
const futuraMD = localFont({ src: './components/futuramd.ttf' })


export default function Index() {
  const [isLoaded,setIsLoaded] = useState(false)
  gsap.registerPlugin(ScrollTrigger,MotionPathPlugin);
  useEffect(() => {
    setTimeout(() => {
      document.querySelector('spline-viewer').shadowRoot.querySelector('#logo').setAttribute('style', 'opacity:0');
      console.log('executed')
    }, 2000);
  }, [])
  useEffect(() => {
    if(!isLoaded) {
    let video1 = document.getElementsByClassName('video1')
    console.log(video1)
    video1[0].play()  
  }
  console.log(isLoaded)
  setIsLoaded(true)
  }, [isLoaded])
  
  

  return (
    <main>
      <div class="landing d-flex">
        <video muted loop playsinline class="video1 opacity-25">
          <source src="/videos/grouped.mp4" type="video/mp4"/>
        </video>
        <div class="d-inline-flex mx-auto my-auto">
          <div class="pa"></div>
          <div class="pi"></div>
          <div class="lars"></div>
        </div>
      </div>
      <div class="main-content">
        <spline-viewer url="https://prod.spline.design/NcZZD82sxOjmIaXw/scene.splinecode"></spline-viewer>
        <div class="content">
          <div class="path"></div>
        </div>
      </div>
      
      
    </main>
  )
}
