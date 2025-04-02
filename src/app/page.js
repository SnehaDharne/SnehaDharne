'use client'
import Navigation from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import AcademicJourney from '../components/EduExperience'
import Achievements from "@/components/Achievements";
import { Experience } from "@/components/Experience";
import DataVisualization from "@/components/DataVisualization";
import React, { useState, useEffect } from 'react';

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
      <Navigation />
      {/* <main className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-700 to-teal-600"> */}
      <main className="min-h-screen bg-black">
        <Hero />
        <DataVisualization />
        <AcademicJourney />
        <Experience />
        <Achievements />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
