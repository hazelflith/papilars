import { Inter } from 'next/font/google'
import Script from "next/script";
import 'bootstrap/dist/css/bootstrap.css'
import Header from "./components/header.js";
import Footer from "./components/footer.js";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Papilars',
  description: 'Digital Creative Agency',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script type="module" src="https://unpkg.com/@splinetool/viewer@0.9.510/build/spline-viewer.js"></Script>
      <Script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></Script>
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
