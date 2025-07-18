import React from 'react'
import { WhatsappButton } from './WhatsappButton'
export const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-[#1E3A8A] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-[#A2CBFF]">Subahas</span> Lanka Health
            </div>
            <p className="mb-4 text-gray-300">
              Providing premium alkaline water machines for better health and
              wellbeing.
            </p>
            <div className="flex flex-wrap gap-3">
              <WhatsappButton text="Contact Us" className="h-10 !px-4" />
              <a
                href="https://www.facebook.com/share/p/16ecnYZm6U/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-white/10 hover:bg-white/20 text-white h-10 px-4 rounded-full transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UC1KoXurgPF4D_37muZxfj0w"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-white/10 hover:bg-white/20 text-white h-10 px-4 rounded-full transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#history"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Water History
                </a>
              </li>
              <li>
                <a
                  href="#doctors"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Expert Opinions
                </a>
              </li>
              <li>
                <a
                  href="#doctor-research"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Doctor Research
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Educational Resources
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+94 777 074 081</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>subahaslanka1@gmail.com</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  Subahas Lanka Health Service, No 105, 3rd floor, Ward City
                  Complex, Mary Rd, Gampaha, Sri Lanka
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-[#A2CBFF]/30 text-center text-gray-300">
          <p>
            &copy; {currentYear} Subahas Lanka Health Service. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
