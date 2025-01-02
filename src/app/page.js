'use client'
import Image from "next/image";
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import React, { useState, useEffect } from 'react';


import { useEffect, useState } from 'react';

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);  // Set to true after component mounts (client-side)
  }, []);

  if (!isClient) {
    // Optionally return a loader or empty div before mounting on the client
    return <div>Loading...</div>;
  }

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
