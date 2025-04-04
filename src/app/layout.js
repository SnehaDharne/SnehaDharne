'use client'

import { useEffect, useState } from 'react'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
        setMounted(true)
      }, [])

  return (
    <html lang="en">
        <body
        className={`__variable_4d318d __variable_ea5f4b __variable_4d318d __variable_ea5f4b antialiased ${
          mounted ? ' vsc-initialized' : '' 
        }`} >
        {children}
      </body>
    </html>
  );
}


