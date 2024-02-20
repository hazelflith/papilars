'use client'
import Image from 'next/image'
import { gsap } from "gsap";
import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import './globals.scss'
import localFont from 'next/font/local'
import ReactWOW from 'react-wow'


 
// Font files can be colocated inside of `pages`
const futura = localFont({ src: './components/futura.ttf' })
const futuraMD = localFont({ src: './components/futuramd.ttf' })

/* eslint-disable */
export default function Index() {
  const [isLoaded,setIsLoaded] = useState(false)
  gsap.registerPlugin(ScrollTrigger,MotionPathPlugin);
  useEffect(() => {
    // setTimeout(() => {
    //   document.querySelector('spline-viewer').shadowRoot.querySelector('#logo').setAttribute('style', 'opacity:0');
    //   console.log('executed')
    // }, 2000);
    let mm = gsap.matchMedia();
    
    gsap.to(".pa", {
      autoAlpha: 1,
      delay: 0
    })
    gsap.to(".pi", {
      autoAlpha: 1,
      delay: .5
    })
    gsap.to(".lars", {
      autoAlpha: 1,
      delay: 1
    })
    gsap.to(".video1", {
      autoAlpha: .25,
      delay: 2,
      duration: 1.25,
      ease: 'expo.out'
    })
    gsap.to(".tagline", {
      autoAlpha: 1,
      delay: 2,
      duration: 1.25,
      ease: 'expo.out'
    })
    mm.add("(min-width: 500px)", () => {
      gsap.to(".heading", {
        marginLeft: "5%",
        delay: 4,
        duration: 2,
        ease: 'expo.out'
      })
      gsap.to(".tagline", {
        textAlign: "left",
        delay: 4,
        duration: 2,
        ease: 'expo.out'
      })
      gsap.to(".sub-heading", {
        autoAlpha: 1,
        delay: 5,
        duration: 1.25,
        ease: 'expo.out'
      })
      gsap.to(".path", {
        autoAlpha: 1,
        delay: 5,
        duration: 1.25,
        ease: 'expo.out'
      })
      gsap.to(".path", {
        display: 'block',
        delay: 4.9,
      })
    });
    
    // gsap.to(".main-content", {
    //   height: 2829,
    //   delay: 4.9,
    // })
    
    // gsap.to(".gradient-overlay", {
    //   display: 'block',
    //   delay: 4.9,
    // })
    gsap.to(".navbar", {
      autoAlpha: 1,
      delay: 2,
      duration: 1.25,
      ease: 'expo.out'
    })
    gsap.to(".inside-content", {
      display: 'block',
      delay: 5.5,
    })
    gsap.to(".footer", {
      autoAlpha: 1,
      delay: 5.5,
      duration: 1.25,
      ease: 'expo.out'
    })
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
    <main class={futura.className}>
      <div class="landing d-flex">
        <video muted loop playsinline class="video1">
          <source src="/videos/grouped.mp4" type="video/mp4"/>
        </video>
        <div class="heading">
          <div class="d-flex heading-wrapper mx-auto">
            <div class="pa"></div>
            <div class="pi"></div>
            <div class="lars"></div>
          </div>
          <h3 class="color-green tagline">"Digital Berdaya Saing"</h3>
        </div>
        <div class="sub-heading text-end color-green">
          <h4>Dengan pengalaman lebih dari 2 tahun, kami</h4>
          <h4>menawarkan solusi kreatif digital untuk</h4>
          <h4>menggapai keinginan anda.</h4>
          <div class="action d-flex">
            
            <div class="btn-action btn-action2 btn-outline-green hover-blockRight ms-auto mt-2">
              HUBUNGI KAMI
              <div class="el-block"></div>
              <div class="el-loader"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="content d-none d-lg-block">
        <div class="path"></div>
        <div class="inside-content">
          <div class="d-flex tentang-kami">
            <div class="about">
              <h2 class={`${futuraMD.className} text-center color-green`}>
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
            <div class="animation-1">
              <dotlottie-player src="https://lottie.host/2fb3c383-c696-483a-8a86-595550d08ac2/ZX9oOFzDn6.json" background="transparent" speed="1" class="w-85" loop autoplay></dotlottie-player>
            </div>
          </div>
          <div class="section-break"></div>
          <div class="services">
            <div class="d-flex">
              <h2 class={`${futuraMD.className} ms-auto services-title`}>
                <div class="services-headline color-green">Services</div>
                <div class="accessories-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="434" height="97" viewBox="0 0 434 97" fill="none">
                    <path d="M2 2L432 42.7593H147.608L432 59.9815H219.844L381.378 72.6111L300.611 80.6481L366.59 91.5556L339.288 95" stroke="#879679" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </h2>
            </div>
            <div class="d-flex gap-4">
              <div class="w-100">
                <div class="service-1">
                  <div class="service-icon-1"></div>
                  <div class="service-text-1">
                    <h4 class="text-center color-green"><b>Social Media Management</b></h4>
                    <p class="text-center">Lorem ipsum dolor sit amet consectetur. Vel nunc fames mollis purus ullamcorper quam. Eget faucibus tristique et cursus pretium in nisl consequat ut. </p>
                  </div>
                </div>
              </div>
              <div class="w-100">
                <div class="service-2">
                  <div class="service-icon-2"></div>
                  <div class="service-text-2">
                    <h4 class="text-center color-green"><b>Creative Design & UI/UX</b></h4>
                    <p class="text-center">Lorem ipsum dolor sit amet consectetur. Vel nunc fames mollis purus ullamcorper quam. Eget faucibus tristique et cursus pretium in nisl consequat ut. </p>
                  </div>
                </div>
              </div>
              <div class="w-100">
                <div class="service-3">
                  <div class="service-icon-3"></div>
                  <div class="service-text-3">
                    <h4 class="text-center color-green"><b>Website Development</b></h4>
                    <p class="text-center">Lorem ipsum dolor sit amet consectetur. Vel nunc fames mollis purus ullamcorper quam. Eget faucibus tristique et cursus pretium in nisl consequat ut. </p>
                  </div>
                </div>
              </div>
              <div class="w-100">
                <div class="service-4">
                  <div class="service-icon-4"></div>
                  <div class="service-text-4">
                    <h4 class="text-center color-green"><b>Paid Advertisements</b></h4>
                    <p class="text-center">Lorem ipsum dolor sit amet consectetur. Vel nunc fames mollis purus ullamcorper quam. Eget faucibus tristique et cursus pretium in nisl consequat ut. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="section-break-small"></div>
          <div class="portofolios">
            <div class="portofolio-title d-flex align-items-center ms-5">
              <div class="accessories-3 ms-4 me-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="88" height="17" viewBox="0 0 88 17" fill="none">
                  <path d="M2 1.5H86" stroke="#879679" stroke-width="3" stroke-linecap="round"/>
                  <path d="M55 8.5L86 8.5" stroke="#879679" stroke-width="3" stroke-linecap="round"/>
                  <path d="M75 15L86 15" stroke="#879679" stroke-width="3" stroke-linecap="round"/>
                </svg>
              </div>
              <h2 class={`${futuraMD.className} color-green `}>Portofolio</h2>
              <div class="accessories-4 mx-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="88" height="17" viewBox="0 0 88 17" fill="none">
                  <path d="M86 1.5H2" stroke="#879679" stroke-width="3" stroke-linecap="round"/>
                  <path d="M33 8.5L2 8.5" stroke="#879679" stroke-width="3" stroke-linecap="round"/>
                  <path d="M13 15L2 15" stroke="#879679" stroke-width="3" stroke-linecap="round"/>
                </svg>
              </div>
            </div>
            <div class={`${futuraMD.className} portofolio-grid`}>
              <div class="porto-1"><p>UI/UX Design</p><p>NIKE Mobile App</p></div>
              <div class="porto-2"><p>Website Development</p><p>harisp.com</p></div>
              <div class="porto-3"><p>UI/UX Design</p><p>Registration Page</p></div>
              <div class="porto-4"><p>Product Design</p><p>Greeya Asih</p></div>
              <div class="porto-5"><p>Website Development</p><p>dreamguru.id</p></div>
              <div class="porto-6"><p>Website Development</p><p>meteraionline.id</p></div>
              <div class="contact" id='contact'>
                <dotlottie-player src="https://lottie.host/5103d5de-883e-4255-9aa5-eb66d2f8282c/lmB3nFFKIo.json" background="transparent" speed="1" loop autoplay class="animation-2"></dotlottie-player>
                <div class="contact-title ms-auto">
                  <h3 class={`${futuraMD.className} text-center`}>Siap untuk mendigitalisasi usaha anda bersama <span class="color-green">PAPILARS</span>?</h3>
                </div>
                <div class="d-flex mx-auto mt-3">
                  <div class="btn-action btn-outline-green hover-blockRight">
                    HUBUNGI KAMI
                    <div class="el-block"></div>
                    <div class="el-loader"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mobile-content d-lg-none">
        <div class="about">
          <h2 class={`${futuraMD.className} text-lg-center color-green mb-2`}>
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
        <div class="section-break"></div>
        <div class="services">
          <div class="d-flex">
            <h2 class={`${futuraMD.className} services-title`}>
              <div class="services-headline color-green">Services</div>
              <div class="accessories-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="434" height="97" viewBox="0 0 434 97" fill="none">
                  <path d="M2 2L432 42.7593H147.608L432 59.9815H219.844L381.378 72.6111L300.611 80.6481L366.59 91.5556L339.288 95" stroke="#879679" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </h2>
          </div>
          <div class="row mt-3">
            <div class="col-12">
              <div class="service-1 gap-2">
                <div class="service-icon-1"></div>
                <div class="service-text-1">
                  <h4 class="color-green"><b>Social Media Management</b></h4>
                  <p class="">Lorem ipsum dolor sit amet consectetur. Vel nunc fames mollis purus ullamcorper quam. Eget faucibus tristique et cursus pretium in nisl consequat ut. </p>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="service-2 gap-2">
                <div class="service-icon-2"></div>
                <div class="service-text-2">
                  <h4 class=" color-green"><b>Creative Design & UI/UX</b></h4>
                  <p class="">Lorem ipsum dolor sit amet consectetur. Vel nunc fames mollis purus ullamcorper quam. Eget faucibus tristique et cursus pretium in nisl consequat ut. </p>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="service-3 gap-2">
                <div class="service-icon-3"></div>
                <div class="service-text-3">
                  <h4 class=" color-green"><b>Website Development</b></h4>
                  <p class="">Lorem ipsum dolor sit amet consectetur. Vel nunc fames mollis purus ullamcorper quam. Eget faucibus tristique et cursus pretium in nisl consequat ut. </p>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="service-4 gap-2">
                <div class="service-icon-4"></div>
                <div class="service-text-4">
                  <h4 class=" color-green"><b>Paid Advertisements</b></h4>
                  <p class="">Lorem ipsum dolor sit amet consectetur. Vel nunc fames mollis purus ullamcorper quam. Eget faucibus tristique et cursus pretium in nisl consequat ut. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section-break"></div>
        <div class="portofolio-mobile">
          <div class="portofolio-title d-flex align-items-center justify-content-center">
              <div class="accessories-3 ms-4 me-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="88" height="17" viewBox="0 0 88 17" fill="none">
                  <path d="M2 1.5H86" stroke="#879679" stroke-width="3" stroke-linecap="round"/>
                  <path d="M55 8.5L86 8.5" stroke="#879679" stroke-width="3" stroke-linecap="round"/>
                  <path d="M75 15L86 15" stroke="#879679" stroke-width="3" stroke-linecap="round"/>
                </svg>
              </div>
              <h2 class={`${futuraMD.className} color-green `}>Portofolio</h2>
              <div class="accessories-4 mx-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="88" height="17" viewBox="0 0 88 17" fill="none">
                  <path d="M86 1.5H2" stroke="#879679" stroke-width="3" stroke-linecap="round"/>
                  <path d="M33 8.5L2 8.5" stroke="#879679" stroke-width="3" stroke-linecap="round"/>
                  <path d="M13 15L2 15" stroke="#879679" stroke-width="3" stroke-linecap="round"/>
                </svg>
              </div>
            </div>
            <div class="section-break"></div>
          <div class="row gy-3">
            <div class="col-6">
              <div class="porto-1">
                <div class="text">
                  <p>UI/UX Design</p><p>NIKE Mobile App</p>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="porto-2">
                <div class="text">
                  <p>Website Development</p><p>harisp.com</p>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="porto-3">
                <div class="text">
                  <p>UI/UX Design</p><p>Registration Page</p>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="porto-4">
                <div class="text">
                  <p>Product Design</p><p>Greeya Asih</p>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="porto-5">
                <div class="text">
                  <p>Website Development</p><p>dreamguru.id</p>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="porto-6">
                <div class="text">
                  <p>Website Development</p><p>meteraionline.id</p>
                </div>
              </div>
            </div>
          </div>
          <div class="section-break"></div>
          <div class="contact" id='contact'>
            <dotlottie-player src="https://lottie.host/5103d5de-883e-4255-9aa5-eb66d2f8282c/lmB3nFFKIo.json" background="transparent" speed="1" loop autoplay class="animation-2"></dotlottie-player>
            <div class="contact-title mx-auto">
              <h3 class={`${futuraMD.className} text-center`}>Siap untuk mendigitalisasi usaha anda bersama <span class="color-green">PAPILARS</span>?</h3>
            </div>
            <div class="d-flex mt-3">
              <div class="btn-action btn-outline-green hover-blockRight mx-auto">
                HUBUNGI KAMI
                <div class="el-block"></div>
                <div class="el-loader"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="main-content">
        <div class="gradient-overlay"></div>
        <spline-viewer url="https://prod.spline.design/NcZZD82sxOjmIaXw/scene.splinecode"></spline-viewer>
      </div> */}
      
      
    </main>
  )
}
