'use client'
import Image from "next/image";
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import React, { useState, useEffect } from 'react';


export default function Home() {
  
    if (typeof window !== 'undefined') {
      return (
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Hero />
            <Projects />
          </main>
          <Footer />
        </div>
      );
    }
    else return (
      <div>
        can't render page
      </div>
    )
  
    
}
