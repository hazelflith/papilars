import Link from "next/link";
import localFont from 'next/font/local'


const futura = localFont({ src: './futura.ttf' })
const futuraMD = localFont({ src: './futuramd.ttf' })

export default function Footer() {
    return (
      <>
        <div className={`${futura.className} footer py-5 my-5`}>
          <div className="row opacity-50">
            <div className="col-lg-6">
              <p>Jl. Praja Dalam E No.37, RT.7/RW.5,</p>
              <p> Kby. Lama Sel., Kec. Kby. Lama, Kota</p>
              <p> Jakarta Selatan, Indonesia</p>
            </div>
            <div className="col-lg-6">
              <div className="d-flex justify-content-lg-end">
                <p>four.studio@gmail.com</p>
                <img className="ms-2 align-self-center" src="/images/mail.png" alt=""></img>
              </div>
              <div className="d-flex justify-content-lg-end">
                <p>628119590159</p>
                <img className="ms-2 align-self-center" src="/images/phone.png" alt=""></img>
              </div>
            </div>
          </div>
          <div className={`${futuraMD.className} row mt-3`}>
            <div className="col d-flex gap-4">
              <div className="footer-brand">PAPILARS</div>
              <div className="footer-link ms-3">Instagram</div>
              <div className="footer-link ms-3">Twitter</div>
            </div>
            <div className="col d-flex justify-content-lg-end gap-4">
              <div className="footer-link">
                <a href={"https://api.whatsapp.com/send?phone=" + process.env.NEXT_PUBLIC_CONTACT} >Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }