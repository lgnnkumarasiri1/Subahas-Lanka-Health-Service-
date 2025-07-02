import React, { Component } from 'react';
import { VideoEmbed } from './VideoEmbed';
import { AnimatedSection } from './AnimatedSection';
import { WhatsappButton } from './WhatsappButton';
export const TestimonialsSection = () => {
  // Educational videos about alkaline water
  const educationalVideos = [{
    id: 'PUWSeeL3nG8',
    title: 'Benefits of Alkaline Water'
  }, {
    id: 'LZJ3mjMvoO0',
    title: 'Alkaline Water and Health'
  }, {
    id: 'pSsLvybZlBY',
    title: 'Understanding Alkaline Water'
  }];
  return <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-[#1E3A8A] to-[#A2CBFF]/20">
    <div className="container mx-auto px-4">
      <AnimatedSection animation="fade-up">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Educational Resources
          </h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            These videos will teach you more about
            the science behind alkaline water and its benefits.
          </p>
          <div className="w-24 h-1 bg-[#A2CBFF] mx-auto mt-4"></div>
        </div>
      </AnimatedSection>
      {/* Highlighted education banner */}
      <AnimatedSection animation="fade-up" delay={200}>
        <div className="mb-12 p-4 bg-[#A2CBFF]/30 border-l-4 border-[#A2CBFF] rounded-r-lg">
          <div className="flex items-center">
            <svg className="w-8 h-8 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-white font-medium">
              These videos contain{' '}
              <span className="font-bold text-[#A2CBFF]">
                educational content
              </span>{' '}
              not reviews from customers, but about alkaline water.
              Watch to find out more about the science behind alkaline water.
            </p>
          </div>
        </div>
      </AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {educationalVideos.map((video, index) => <AnimatedSection key={video.id} animation="fade-up" delay={index * 200}>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-[#A2CBFF]/30">
            {/* Video ribbon */}
            <div className="relative">
              <VideoEmbed videoId={video.id} title={video.title} />
              <div className="absolute top-2 right-2 bg-[#1E3A8A] text-white text-xs px-2 py-1 rounded-full">
                Educational
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#1E3A8A] mb-2">
                {video.title}
              </h3>
              <p className="text-gray-600">
                Information on alkaline water and how it can help your health.
              </p>
            </div>
          </div>
        </AnimatedSection>)}
      </div>
      <AnimatedSection animation="fade-up" delay={600}>
        <div className="mt-20 bg-[#1E3A8A] text-white p-8 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Research on alkaline water in science
              </h3>
              <p className="mb-4">
                Many scientific research have looked
                into the possible health benefits of alkaline water.
                Studies show that it might help with:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Highlighted research item */}
                <div className="bg-white/10 p-4 rounded-lg relative overflow-hidden">
                  <div className="absolute -right-6 -top-6 w-12 h-12 bg-[#A2CBFF] opacity-30 rounded-full"></div>
                  <h4 className="font-semibold text-[#A2CBFF] mb-2 relative z-10">
                    Acid Reflux Relief
                  </h4>
                  <p className="text-sm relative z-10">
                    Research shows that alkaline water may
                    aid with stomach acid and ease symptoms.
                  </p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-[#A2CBFF] mb-2">
                    Enhanced Hydration
                  </h4>
                  <p className="text-sm">
                    Studies show that it hydrates cells better than normal water.
                  </p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-[#A2CBFF] mb-2">
                    Antioxidant Properties
                  </h4>
                  <p className="text-sm">
                    May help lower oxidative stress
                    and damage from free radicals in the body.
                  </p>
                </div>
                {/* Highlighted research item */}
                <div className="bg-white/10 p-4 rounded-lg relative overflow-hidden">
                  <div className="absolute -right-6 -top-6 w-12 h-12 bg-[#A2CBFF] opacity-30 rounded-full"></div>
                  <h4 className="font-semibold text-[#A2CBFF] mb-2 relative z-10">
                    Blood Pressure Support
                  </h4>
                  <p className="text-sm relative z-10">
                    Some studies say that it might be good for heart health.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Scientific research on water" className="rounded-lg shadow-lg w-full max-w-xs object-cover" />
            </div>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection animation="fade-up" delay={800}>
        <div className="mt-20 text-center px-4 sm:px-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Ready to Experience the Benefits?
          </h3>
          <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto mb-8">
            Our alkaline water machines have helped thousands of people feel better and be healthier.
          </p>

          {/* Highlighted Call-to-Action */}
          <div className="inline-block relative mb-10">
            <div className="absolute -inset-1 rounded-full blur opacity-70"></div>
            <div className="relative rounded-full p-1">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 p-2">
                {/* WhatsApp Button */}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    const phoneNumber = '+94727074081';
                    const message = "Hello, I'm interested in your alkaline water machine.";
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                  className="w-full sm:w-auto bg-[#1E3A8A] hover:bg-[#152a66] text-white font-medium py-3 px-8 rounded-full transition-all transform hover:scale-105 text-base sm:text-lg flex items-center justify-center"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>

                  Order Now
                </a>

                {/* Learn More Button */}
                <a
                  href="https://waterfilterguru.com/what-is-an-alkaline-water-filter/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[#A2CBFF] hover:bg-[#8bb8f0] text-[#1E3A8A] font-medium py-3 px-8 rounded-full transition-all transform hover:scale-105 text-base sm:text-lg"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={1000}>
        <div className="mt-20 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-[#1E3A8A] mb-4">
                Our Commitment to Quality
              </h3>
              <p className="text-gray-700 mb-6">
                We at Subahas Lanka Health Service are dedicated
                to giving you the best alkaline water machines possible.
                We put our products through a lot of tests to make sure
                they fulfill international safety and performance standards.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#1E3A8A] mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Advanced filtration technology</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#1E3A8A] mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Precision pH control</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#1E3A8A] mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Long-lasting, durable components</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#1E3A8A] mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Comprehensive customer support</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#A2CBFF]/20">
              <img src="/kangan_new.png" alt="Kangen Water" className="w-full h-full object-contain p-4" />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>;
};