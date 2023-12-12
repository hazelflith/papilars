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
        <div class="content">
          <div class="path"></div>
          <div class="d-flex">
            <div class="about">
              <h2 class="text-center color-green">
                Tentang Kami
                <div class="accessories-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="95" height="95" viewBox="0 0 95 95" fill="none">
                    <line x1="19.5" y1="47" x2="19.5" y2="15" stroke="#879679" stroke-width="3"/>
                    <line x1="5.60728" y1="48.5571" x2="1.60728" y2="38.5571" stroke="#879679" stroke-width="3"/>
                    <line x1="80" y1="93.5" x2="69" y2="93.5" stroke="#879679" stroke-width="3"/>
                    <line x1="36.5604" y1="46.5787" x2="48.5604" y2="5.57865" stroke="#879679" stroke-width="3"/>
                    <line x1="50.6888" y1="55.2715" x2="80.6888" y2="1.27153" stroke="#879679" stroke-width="3"/>
                    <line x1="68.483" y1="78.139" x2="94.483" y2="68.5919" stroke="#879679" stroke-width="3"/>
                    <line x1="62.9793" y1="63.9008" x2="90.9793" y2="37.9008" stroke="#879679" stroke-width="3"/>
                  </svg>
                </div>
              </h2>
              <p><b class="color-green">PAPILARS</b> adalah <b class="color-green">Digital Creative Agency</b> yang menggabungkan <b class="color-green">Keahlian dan Teknologi.</b> Kombinasi tim dengan berbagai latar belakang menciptakan nilai tinggi dalam solusi layanan yang diimplementasikan. Layanan kami mencakup <b class="color-green">Desain dan Manajemen dalam ranah solusi kreatif, pemasaran, dan branding.</b></p>
            </div>
            <dotlottie-player src="https://lottie.host/2fb3c383-c696-483a-8a86-595550d08ac2/ZX9oOFzDn6.json" background="transparent" speed="1" class="animation-1" loop autoplay></dotlottie-player>
          </div>
        </div>
        <div class="gradient-overlay"></div>
        <spline-viewer url="https://prod.spline.design/NcZZD82sxOjmIaXw/scene.splinecode"></spline-viewer>
      </div>
      
      
    </main>
  )
}
