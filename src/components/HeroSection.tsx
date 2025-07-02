import React from 'react';
import { WhatsappButton } from './WhatsappButton';
import { AnimatedSection } from './AnimatedSection';
export const HeroSection = () => {
  return <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-cover bg-center" style={{
    backgroundImage: "url('https://uploadthingy.s3.us-west-1.amazonaws.com/gkcCqB2sDmJt3cN2x13k1Q/hero_back.jpg')"
  }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <AnimatedSection className="md:w-1/2 mb-8 md:mb-0" animation="fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E3A8A] mb-4">
              Better health with pure alkaline water
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
               Our high-quality water machines can turn your
              regular water into mineral-rich alkaline water. 
               Get greater hydration and feel better overall.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsappButton text="Order Now" className="text-lg px-8 py-3" />
              <a href="https://waterfilterguru.com/what-is-an-alkaline-water-filter/" target="_blank" rel="noopener noreferrer" className="bg-[#A2CBFF] hover:bg-[#8bb8f0] text-[#1E3A8A] font-medium py-3 px-8 rounded-full transition-all transform hover:scale-105 text-lg text-center">
                Learn More
              </a>
            </div>
          </AnimatedSection>
          <AnimatedSection className="md:w-1/2" animation="slide-in-right" delay={300}>
            <div className="relative">
              {/* Enagic Kangan Water image */}
              <img src="/enagic_water.png" alt="Enagic Kangan Water Machine" className="rounded-lg shadow-2xl w-full relative" />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <p className="text-[#1E3A8A] font-bold">Premium Quality</p>
                <p className="text-gray-600">Advanced Filtration Technology</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedSection animation="fade-up" delay={400}>
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#A2CBFF]">
              <div className="w-14 h-14 bg-[#A2CBFF]/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#1E3A8A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1E3A8A] mb-2">
                Balanced pH Levels
              </h3>
              <p className="text-gray-600">
                Our machines make water with the 
                right amount of alkaline for healthier bodily balance.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={600}>
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#A2CBFF]">
              <div className="w-14 h-14 bg-[#A2CBFF]/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#1E3A8A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1E3A8A] mb-2">
                Rich in Minerals
              </h3>
              <p className="text-gray-600">
                 Full of important minerals that help keep you healthy and hydrated
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={800}>
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#A2CBFF]">
              <div className="w-14 h-14 bg-[#A2CBFF]/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#1E3A8A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1E3A8A] mb-2">
                Long-lasting Quality
              </h3>
              <p className="text-gray-600">
                 Machines that last for years and 
                 provide reliable service thanks to their excellent technology.
              </p>
            </div>
          </AnimatedSection>
        </div>
        {/* Highlighted Feature Banner */}
        <AnimatedSection animation="fade-up" delay={1000}>
          <div className="mt-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-[#A2CBFF] opacity-20 animate-pulse"></div>
            <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-[#A2CBFF] shadow-lg">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-3/4 mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-[#1E3A8A] mb-2">
                    ✨ Special Promotion
                  </h3>
                  <p className="text-gray-700">
                    Get a{' '}
                    <span className="font-bold text-[#1E3A8A]">
                      10% discount
                    </span>{' '}
                    on your alkaline water machine purchase with us!
                  </p>
                </div>
                <WhatsappButton text="Claim Offer" className="text-lg px-8 py-3" />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>;
};