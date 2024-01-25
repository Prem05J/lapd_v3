import type { Metadata } from 'next'
import Navbar from '@/component/Navbar'
import Footer from '@/component/Footer'
import { Poppins } from 'next/font/google'
import GoToTop from "../component/GoToTop/GoToTop"
import { Inter } from 'next/font/google'
import "../app/global.module.css"
import "./globals.css"



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lapd',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html>
 

      <head>
        {/* AOS Animation */}
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
       
      
      </head>
    
      <body style={{ margin: "0px"}} className={inter.className}>
      
        <Navbar />
        <GoToTop />
        {children}
        <Footer />
   
        
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>
          AOS.init();
        </script>
       
      </body>


    </html>

  )
}
