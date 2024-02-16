'use client'
import React, { useEffect } from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import localFont from 'next/font/local'
 
// Font files can be colocated inside of `pages`
const myFont = localFont({ src: './futuramd.ttf' })

export default function Header() {
    const router = useRouter();
    useEffect(()=>{
      
    },[])
    return (
      <>
        <nav className={`${myFont.className} navbar pt-3 d-none d-lg-flex sticky`} id="navbar">
          <div className="navbar-brand">
              <a href="/" alt="logo">
                <div className="logo" style={{ background: `url(/images/logo.png)` , backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></div>
              </a>
          </div>
          <div class="ms-auto d-lg-block d-none">
            <div class="d-flex gap-4 align-items-center">
              <a href="/" className={router.pathname == "/" ? "active" : ""}>Beranda</a>
              <a href="/klien" className={router.pathname == "/klien" ? "active" : ""}>Klien</a>
              <a href="/portofolio" className={router.pathname == "/portofolio" ? "active" : ""}>Portofolio</a>
              <a href="/tentang" className={router.pathname == "/tentang" ? "active" : ""}>Tentang Kami</a>

              <Link href={"https://api.whatsapp.com/send?phone=" + "6282126913015"} className="btn btn-round">
                Kontak
              </Link>
            </div>
          </div>
        </nav>
        <nav role="navigation" className="d-lg-none d-block navbar-mobile">
          <div class="d-flex">
            <div id="menuToggle" className="d-lg-none d-block">
              <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
            <ul id="menu">
              <div className="navbar-brand">
                <div className="logo" style={{ background: `url(/images/logo.png)` , backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></div>
              </div>
              <div>
                <Link href="/" className={router.asPath == "/" ? "active" : ""}>
                  Beranda
                </Link>
              </div>
              <div>
                <Link href="#tentang" className={router.pathname == "#tentang" ? "active" : ""}>
                  Klien
                </Link>
              </div>
              <div>
                <Link href="#faq" className={router.pathname == "#faq" ? "active" : ""}>
                  Portofolio
                </Link>
              </div>
              <div>
                <Link href={"https://api.whatsapp.com/send?phone=" + "6282126913015"}>
                  Tentang Kami
                </Link>
              </div>
            </ul>
            </div>
            <div className="navbar-brand ms-auto me-4 mt-3">
              <div className="logo" style={{ background: `url(/images/logo.png)` , backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></div>
            </div>
          </div>
        </nav>
      </>
    )
  }