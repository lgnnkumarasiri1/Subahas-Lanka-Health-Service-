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
              <span className="text-[#1E3A8A]">Subahas</span> Lanka Health
              Service
            </h1>
          </div>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#home"
            className="text-[#1E3A8A] hover:text-[#A2CBFF] font-medium transition-colors"
          >
            Home
          </a>
          <a
            href="#history"
            className="text-[#1E3A8A] hover:text-[#A2CBFF] font-medium transition-colors"
          >
            Water History
          </a>
          <a
            href="#doctors"
            className="text-[#1E3A8A] hover:text-[#A2CBFF] font-medium transition-colors"
          >
            Expert Opinions
          </a>
          <a
            href="#doctor-research"
            className="text-[#1E3A8A] hover:text-[#A2CBFF] font-medium transition-colors"
          >
            Doctor Research
          </a>
          <a
            href="#testimonials"
            className="text-[#1E3A8A] hover:text-[#A2CBFF] font-medium transition-colors"
          >
            Educational Videos
          </a>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#1E3A8A] to-[#A2CBFF] rounded-full opacity-70 animate-pulse"></div>
            <div className="relative">
              <WhatsappButton text="Order Now" />
            </div>
          </div>
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
