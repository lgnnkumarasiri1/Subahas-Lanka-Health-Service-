import React from 'react'
import { VideoEmbed } from './VideoEmbed'
import { AnimatedSection } from './AnimatedSection'
export const DoctorsSection = () => {
  // Extract video IDs from the provided links
  const doctorVideos = [
    {
      id: '6SSCvWWncj0',
      title: "Doctor's Opinion on Alkaline Water",
    },
    {
      id: 'cZIqK2JCZbQ',
      title: 'Medical Benefits of Alkaline Water',
    },
    {
      id: 'qq8hfhBKag4',
      title: 'Health Experts on Alkaline Water',
    },
  ]
  return (
    <section
      id="doctors"
      className="py-16 md:py-24 bg-gradient-to-b from-[#A2CBFF]/10 to-white"
    >
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up" delay={50}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-4">
              Expert Medical Opinions
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Hear what medical professionals and health experts have to say
              about the benefits of alkaline water for your health and
              wellbeing.
            </p>
            <div className="w-24 h-1 bg-[#1E3A8A] mx-auto mt-4"></div>
          </div>
        </AnimatedSection>
        {/* Highlighted banner */}
        <AnimatedSection animation="fade-up" delay={100}>
          <div className="mb-12 bg-[#1E3A8A] text-white p-4 rounded-lg shadow-lg text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')] opacity-10"></div>
            <div className="relative">
              <h3 className="text-xl font-bold">EXPERT ENDORSED</h3>
              <p>
                Our alkaline water technology is recommended by medical
                professionals worldwide
              </p>
            </div>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctorVideos.map((video, index) => (
            <AnimatedSection
              key={video.id}
              animation="fade-up"
              delay={100 + index * 50}
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-[#1E3A8A]/10">
                <VideoEmbed videoId={video.id} title={video.title} />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#1E3A8A] mb-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Expert medical insights on how alkaline water can positively
                    impact your health and wellbeing.
                  </p>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1E3A8A] font-medium hover:text-[#1E3A8A]/70 transition-colors inline-flex items-center"
                  >
                    Watch on YouTube
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="mt-16 bg-[#1E3A8A] text-white p-8 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-3/4 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-bold mb-4">
                  Scientifically Backed Benefits
                </h3>
                <p className="mb-4">
                  Medical research suggests that alkaline water may help
                  neutralize acid in your bloodstream, boost your metabolism,
                  and help your body absorb nutrients more effectively.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    May help neutralize stomach acid and relieve acid reflux
                  </li>
                  <li>
                    Contains antioxidant properties that may help prevent cell
                    damage
                  </li>
                  <li>May improve hydration, especially for athletes</li>
                  <li>Can help balance your body's pH levels</li>
                </ul>
              </div>
              <div className="md:w-1/4 flex justify-center">
                <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-[#1E3A8A]"
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
              </div>
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection animation="fade-up" delay={250}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Highlighted doctor quote */}
            <div className="relative">
              <div className="absolute -inset-1 bg-[#A2CBFF] rounded-lg blur opacity-30"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-lg border border-[#A2CBFF]">
                <div className="flex items-center mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1584362917165-526a968579e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                    alt="Doctor with water"
                    className="w-16 h-16 rounded-full object-cover mr-4 ring-2 ring-[#1E3A8A]"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-[#1E3A8A]">
                      Dr. Sarah Johnson
                    </h3>
                    <p className="text-gray-600">Nutritional Scientist</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "The molecular structure of alkaline water makes it more
                  easily absorbed by the body's cells, potentially improving
                  hydration at a cellular level."
                </p>
                <div className="mt-4 text-sm text-[#1E3A8A] font-medium">
                  FEATURED EXPERT
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                  alt="Medical professional"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-[#1E3A8A]">
                    Dr. Michael Chen
                  </h3>
                  <p className="text-gray-600">Gastroenterologist</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "For patients with acid reflux, alkaline water with a pH of 8.5
                or higher may help neutralize stomach acid and provide relief
                from symptoms when used as part of a comprehensive treatment
                approach."
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
