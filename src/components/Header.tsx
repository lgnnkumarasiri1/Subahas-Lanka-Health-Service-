import React, { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { WhatsappButton } from './WhatsappButton'
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo Image with highlight effect when scrolled */}
          <div
            className={`relative ${isScrolled ? 'scale-90' : ''} transition-transform duration-300`}
          >
            {isScrolled && (
              <div className="absolute -inset-1 bg-gradient-to-r from-[#1E3A8A]/20 to-[#A2CBFF]/30 rounded-full blur-sm"></div>
            )}
            <img
              src="https://uploadthingy.s3.us-west-1.amazonaws.com/kNJftfKoWWT9EbguYyGht1/subahas_health.png"
              alt="Subahas Lanka Health & Engineering Service Logo"
              className="h-14 w-auto relative"
            />
          </div>
          {/* Company name next to logo */}
          <div className="ml-3">
            <h1 className="text-xl font-bold text-[#1E3A8A]">
              <span className="text-[#1E3A8A]">SUBAHAS</span> LANKA HEALTH
              SERVICE
            </h1>
          </div>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <div className="flex items-center space-x-4 mr-4">
            <a
              href="#home"
              className="text-[#1E3A8A] hover:text-[#A2CBFF] font-medium transition-colors whitespace-nowrap text-sm"
            >
              Home
            </a>
            <a
              href="#history"
              className="text-[#1E3A8A] hover:text-[#A2CBFF] font-medium transition-colors whitespace-nowrap text-sm"
            >
              Water History
            </a>
            <a
              href="#doctors"
              className="text-[#1E3A8A] hover:text-[#A2CBFF] font-medium transition-colors whitespace-nowrap text-sm"
            >
              Expert Opinions
            </a>
            <a
              href="#doctor-research"
              className="text-[#1E3A8A] hover:text-[#A2CBFF] font-medium transition-colors whitespace-nowrap text-sm"
            >
              Doctor Research
            </a>
            <a
              href="#testimonials"
              className="text-[#1E3A8A] hover:text-[#A2CBFF] font-medium transition-colors whitespace-nowrap text-sm"
            >
              Educational Videos
            </a>
          </div>
          <WhatsappButton
            text="Order Now"
            className="font-medium py-1.5 px-4 text-sm whitespace-nowrap"
          />
        </nav>
        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#1E3A8A]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#home"
              className="text-[#1E3A8A] hover:text-[#A2CBFF] font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#history"
              className="text-[#1E3A8A] hover:text-[#A2CBFF] font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Water History
            </a>
            <a
              href="#doctors"
              className="text-[#1E3A8A] hover:text-[#A2CBFF] font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Expert Opinions
            </a>
            <a
              href="#doctor-research"
              className="text-[#1E3A8A] hover:text-[#A2CBFF] font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Doctor Research
            </a>
            <a
              href="#testimonials"
              className="text-[#1E3A8A] hover:text-[#A2CBFF] font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Educational Videos
            </a>
            <WhatsappButton text="Order Now" />
          </div>
        </div>
      )}
    </header>
  )
}
