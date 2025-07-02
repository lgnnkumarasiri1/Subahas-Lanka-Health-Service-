import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { HistorySection } from './components/HistorySection';
import { DoctorsSection } from './components/DoctorsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';
export function App() {
  return <div className="w-full min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <HistorySection />
        <DoctorsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>;
}