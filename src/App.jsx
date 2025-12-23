import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import DetailsGrid from './components/DetailsGrid';
import LearningOutcomes from './components/LearningOutcomes';
import Curriculum from './components/Curriculum';
import Footer from './components/Footer';
import Bonuses from './components/Bonuses';
import ProjectShowcase from './components/ProjectShowcase';
import Certificate from './components/Certificate';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <Countdown />
        <DetailsGrid />
        <LearningOutcomes />
        <ProjectShowcase />
        <Curriculum />
        <Bonuses />
        <Certificate />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;

