import React from 'react'
import { AnimatedSection } from './AnimatedSection'
import { ExternalLinkIcon } from 'lucide-react'
export const DoctorResearchSection = () => {
  return (
    <section
      id="doctor-research"
      className="py-16 md:py-20 bg-gradient-to-b from-white to-[#A2CBFF]/10"
    >
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up" delay={100}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-4">
              Doctor Research For Alkaline Water
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Scientific studies and medical research on the benefits of
              alkaline water from 2012 - 2023
            </p>
            <div className="w-24 h-1 bg-[#1E3A8A] mx-auto mt-4"></div>
          </div>
        </AnimatedSection>
        <AnimatedSection animation="fade-up" delay={150}>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-[#1E3A8A]/10 mb-12">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="md:w-1/4">
                  <img
                    src="https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                    alt="Medical Research"
                    className="rounded-lg shadow-md w-full object-cover h-64"
                  />
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold text-[#1E3A8A] mb-4">
                    Dr. Mona Harrison on Alkaline Water Benefits
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Dr. Mona Harrison, former Medical Director of the renowned
                    Johns Hopkins Hospital, has conducted extensive research on
                    the health benefits of alkaline water. Her studies from
                    2012-2013 have shown significant evidence that properly
                    structured alkaline water can improve cellular hydration,
                    enhance nutrient absorption, and support the body's natural
                    detoxification processes.
                  </p>
                  <p className="text-gray-700 mb-6">
                    According to Dr. Harrison's research, the molecular
                    structure of alkaline water makes it more easily absorbed at
                    the cellular level, potentially improving overall hydration
                    and supporting various bodily functions. Her findings
                    suggest that consistent consumption of alkaline water may
                    help reduce acidic waste in the body, potentially
                    alleviating various health issues related to chronic
                    acidity.
                  </p>
                  <a
                    href="https://cerrawater.com/water-library/2012/01/05/what-dr-mona-harrison-says-about-water/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#1E3A8A] hover:bg-[#152a66] text-white font-medium py-2 px-4 rounded-md transition-colors"
                  >
                    Read Full Research
                    <ExternalLinkIcon className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#1E3A8A]">
              <h4 className="text-xl font-semibold text-[#1E3A8A] mb-3">
                Improved Hydration
              </h4>
              <p className="text-gray-700">
                Research indicates that the smaller molecular clusters in
                alkaline water may enhance cellular absorption, leading to
                better overall hydration compared to regular water.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#1E3A8A]">
              <h4 className="text-xl font-semibold text-[#1E3A8A] mb-3">
                Acid-Base Balance
              </h4>
              <p className="text-gray-700">
                Medical studies suggest that alkaline water may help neutralize
                acid in the bloodstream, potentially supporting the body's
                natural pH balance and reducing strain on acid-buffering
                systems.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#1E3A8A]">
              <h4 className="text-xl font-semibold text-[#1E3A8A] mb-3">
                Antioxidant Properties
              </h4>
              <p className="text-gray-700">
                Clinical research has demonstrated that alkaline water with
                negative oxidation-reduction potential may provide antioxidant
                benefits, helping to neutralize harmful free radicals in the
                body.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
