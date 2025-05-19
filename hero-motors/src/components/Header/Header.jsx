
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="/assets/Hero.png" class="h-10 w-10" alt="hero-logo" />
            <Link to="/" className="text-xl font-bold text-gray-800">HERO MOTORS</Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-800 hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/models" className="text-gray-800 hover:text-blue-600 transition-colors">Models</Link>
            <Link to="/services" className="text-gray-800 hover:text-blue-600 transition-colors">Services</Link>
            <Link to="/about" className="text-gray-800 hover:text-blue-600 transition-colors">About</Link>
            <Link to="/contact" className="text-gray-800 hover:text-blue-600 transition-colors">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6 text-gray-800" />
            ) : (
              <FiMenu className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
          <div className="pt-2 pb-4 space-y-2">
            <Link 
              to="/" 
              className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              to="/models" 
              className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
              onClick={closeMenu}
            >
              Models
            </Link>
            <Link 
              to="/services" 
              className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header