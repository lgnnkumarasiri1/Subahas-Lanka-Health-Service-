import React from 'react';
import { AnimatedSection } from './AnimatedSection';
export const HistorySection = () => {
  return <section id="history" className="py-16 md:py-24 bg-gradient-to-b from-white to-[#A2CBFF]/10">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-4">
              The History of Water Purification
            </h2>
            <div className="w-24 h-1 bg-[#A2CBFF] mx-auto"></div>
          </div>
        </AnimatedSection>
        {/* Highlighted intro section */}
        <AnimatedSection animation="fade-up" delay={100}>
          <div className="mb-16 p-6 bg-[#1E3A8A]/5 rounded-lg border-l-4 border-[#1E3A8A] shadow-md">
            <p className="text-lg text-[#1E3A8A]">
              <span className="font-semibold">For thousands of years</span>,
              The History of Water Purification: 
              People have always known how important 
              clean water is. The move from simple filtration 
              to modern alkaline water technologies is one 
              of the most important health breakthroughs in history.
            </p>
          </div>
        </AnimatedSection>
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#A2CBFF] to-[#1E3A8A]"></div>
          {/* Timeline items */}
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center">
              <AnimatedSection className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0" animation="slide-in-left">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-2">
                    Ancient Civilizations
                  </h3>
                  <p className="text-gray-700">
                    The ancient Egyptians found out that 
                    boiling water made it cleaner as far 
                    back as 2000 BCE. They also used alum to 
                    get rid of particles that were floating in the water.
                  </p>
                </div>
              </AnimatedSection>
              <div className="hidden md:block w-8 h-8 bg-[#1E3A8A] rounded-full border-4 border-[#A2CBFF] absolute left-1/2 transform -translate-x-1/2"></div>
              <div className="md:w-1/2 md:pl-12"></div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12"></div>
              <div className="hidden md:block w-8 h-8 bg-[#1E3A8A] rounded-full border-4 border-[#A2CBFF] absolute left-1/2 transform -translate-x-1/2"></div>
              <AnimatedSection className="md:w-1/2 md:pl-12 mb-8 md:mb-0" animation="slide-in-right">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-2">
                    Hippocrates and Filtration
                  </h3>
                  <p className="text-gray-700">
                    Around 500 BCE, Hippocrates, the father of medicine, 
                    devised the "Hippocratic sleeve." It was a textile 
                    bag that was used to filter water after boiling, 
                    getting rid of sediment and making it taste better.
                  </p>
                </div>
              </AnimatedSection>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <AnimatedSection className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0" animation="slide-in-left">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-2">
                    The Industrial Revolution
                  </h3>
                  <p className="text-gray-700">
                    The first municipal water treatment plants 
                    that used sand filters were built in the 1800s.
                     By the end of the 1800s, scientists had 
                     figured out how dirty water might make people sick.
                  </p>
                </div>
              </AnimatedSection>
              <div className="hidden md:block w-8 h-8 bg-[#1E3A8A] rounded-full border-4 border-[#A2CBFF] absolute left-1/2 transform -translate-x-1/2"></div>
              <div className="md:w-1/2 md:pl-12"></div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12"></div>
              <div className="hidden md:block w-8 h-8 bg-[#1E3A8A] rounded-full border-4 border-[#A2CBFF] absolute left-1/2 transform -translate-x-1/2"></div>
              <AnimatedSection className="md:w-1/2 md:pl-12 mb-8 md:mb-0" animation="slide-in-right">
                {/* Highlighted timeline item */}
                <div className="relative">
                  <div className="absolute -inset-1 bg-[#A2CBFF] rounded-lg blur opacity-30"></div>
                  <div className="relative bg-white p-6 rounded-lg shadow-lg border border-[#A2CBFF]">
                    <div className="absolute top-0 right-0 bg-[#1E3A8A] text-white text-xs px-2 py-1 rounded-bl-lg rounded-tr-lg">
                      KEY MILESTONE
                    </div>
                    <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-2">
                      Modern Alkaline Water
                    </h3>
                    <p className="text-gray-700">
                      Japan started looking on water ionization 
                      in the 1950s. In the 1980s, businesses 
                      started selling alkaline water devices 
                      that made water with minerals that are 
                      good for you and a balanced pH level..
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <AnimatedSection className="md:w-1/2 md:pr-12 md:text-right" animation="slide-in-left">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-2">
                    Today's Technology
                  </h3>
                  <p className="text-gray-700">
                    Modern alkaline water machines employ 
                    cutting-edge electrolysis technology to 
                    make water with the right pH values. 
                    This has been shown by scientific study to 
                    have several health benefits.
                  </p>
                </div>
              </AnimatedSection>
              <div className="hidden md:block w-8 h-8 bg-[#1E3A8A] rounded-full border-4 border-[#A2CBFF] absolute left-1/2 transform -translate-x-1/2"></div>
              <div className="md:w-1/2 md:pl-12"></div>
            </div>
          </div>
        </div>
        <AnimatedSection animation="fade-up" delay={600}>
          <div className="mt-16 bg-[#1E3A8A] rounded-lg overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  The Evolution of Water Purification
                </h3>
                <p className="mb-4">
                  People have always known how important 
                  it is to have clean water. Water purification
                   has come a long way from simple boiling 
                   procedures to complex filtration systems.
                </p>
                <p>
                  Alkaline water technology is the most advanced 
                  stage of this development. It not only cleans water,
                   but it also improves its natural characteristics 
                   for the best health advantages.
                </p>
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Crystal clear water" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>;
};