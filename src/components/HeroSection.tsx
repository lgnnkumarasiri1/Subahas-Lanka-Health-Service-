import React from 'react'
import { WhatsappButton } from './WhatsappButton'
import { AnimatedSection } from './AnimatedSection'
import { UserMetrics } from './UserMetrics'
export const HeroSection = () => {
  return (
    <section
      id="home"
      className="pt-24 pb-16 md:pt-32 md:pb-24 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://uploadthingy.s3.us-west-1.amazonaws.com/8A7xtTx8BYPTb6CjFMoiAt/WaterBg.png')",
        backgroundColor: '#0A2463',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <AnimatedSection
            className="md:w-1/2 mb-8 md:mb-0"
            animation="fade-in"
            delay={50}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0A2463] to-[#3E92CC] blur-md opacity-30 rounded-lg"></div>
              <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#A2CBFF] leading-tight">
                Experience the Purest <br />
                <span className="text-white drop-shadow-lg">
                  Alkaline Water
                </span>{' '}
                <br />
                For Better Health
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-lg">
              Transform your everyday water into mineral-rich alkaline water
              with our premium water machines. Experience better hydration and
              improved wellbeing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsappButton
                text="Order Now"
                className="text-lg px-8 py-3 bg-[#0A2463] hover:bg-[#061A47]"
              />
              <a
                href="https://waterfilterguru.com/what-is-an-alkaline-water-filter/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 text-[#0A2463] font-medium py-3 px-8 rounded-full transition-all transform hover:scale-105 text-lg text-center"
              >
                Learn More
              </a>
            </div>
          </AnimatedSection>
          <AnimatedSection
            className="md:w-1/2"
            animation="slide-in-right"
            delay={100}
          >
            <div className="relative">
              {/* Professional presentation for Enagic Kangan Water image */}
              <div className="relative bg-white/10 p-4 md:p-6 rounded-xl backdrop-blur-sm shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A2463]/20 to-[#3E92CC]/10 rounded-xl"></div>
                <img
                  src="https://uploadthingy.s3.us-west-1.amazonaws.com/iK1fV6U6xG3XBu8RMtyT3p/enagic_water.png"
                  alt="Enagic Kangan Water Machine"
                  className="rounded-lg w-full relative z-10"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block z-20">
                  <p className="text-[#0A2463] font-bold">Premium Quality</p>
                  <p className="text-gray-600">
                    Advanced Filtration Technology
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
        {/* User Metrics Section */}
        <AnimatedSection animation="fade-up" delay={150}>
          <UserMetrics />
        </AnimatedSection>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedSection animation="fade-up" delay={150}>
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#3E92CC]">
              <div className="w-14 h-14 bg-[#3E92CC]/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-[#3E92CC]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-2">
                Balanced pH Levels
              </h3>
              <p className="text-gray-600">
                Our machines produce water with optimal alkaline levels for
                better body balance.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#00A6ED]">
              <div className="w-14 h-14 bg-[#00A6ED]/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-[#00A6ED]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-2">
                Rich in Minerals
              </h3>
              <p className="text-gray-600">
                Packed with essential minerals that support your overall health
                and hydration.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={250}>
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#7E1DC6]">
              <div className="w-14 h-14 bg-[#7E1DC6]/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-[#7E1DC6]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-2">
                Long-lasting Quality
              </h3>
              <p className="text-gray-600">
                Durable machines with advanced technology for years of reliable
                service.
              </p>
            </div>
          </AnimatedSection>
        </div>
        {/* Highlighted Feature Banner */}
        <AnimatedSection animation="fade-up" delay={300}>
          <div className="mt-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-[#3E92CC] opacity-20 animate-pulse"></div>
            <div className="relative bg-white/90 backdrop-blur-sm p-6 rounded-lg border border-[#3E92CC] shadow-lg">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-3/4 mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-[#0A2463] mb-2">
                    ✨ Special Promotion
                  </h3>
                  <p className="text-gray-700">
                    Get a{' '}
                    <span className="font-bold text-[#3E92CC]">
                      10% discount
                    </span>{' '}
                    on your alkaline water machine purchase this month!
                  </p>
                </div>
                <WhatsappButton
                  text="Claim Offer"
                  className="text-lg px-8 py-3 bg-[#0A2463] hover:bg-[#061A47]"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
