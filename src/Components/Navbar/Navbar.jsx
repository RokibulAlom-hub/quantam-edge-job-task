import { useState } from 'react';
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-primary'>
        <nav className=" text-white container mx-auto"> 
      {/* Top Header */}
      <div className="px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className='flex justify-center gap-2'>
            <img src={logo} alt="Logo" className="h-8 sm:h-10" />
             <button className="bg-green-900 hidden  hover:bg-green-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors md:flex items-center space-x-2">
              <span>Categories</span>
            </button>
          </div>

          {/* Hamburger Menu Button (visible on mobile) */}
          <button
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>

          {/* Categories and Right Menu (Desktop) */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {/* Categories */}
           

            {/* Right Menu */}
            <div className="flex items-center space-x-4 lg:space-x-6">
              <button className="text-gray-300 hover:text-white flex items-center space-x-1">
                <span>Freelancer</span>
                <span>⌄</span>
              </button>
              <button className="text-green-400 hover:text-green-300 font-medium">
                BECOME A SELLER
              </button>
              <button className="text-gray-300 hover:text-white">LOGIN</button>
              <button className="bg-button-color hover:bg-green-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Registration
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu (visible when toggled) */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <button className="bg-green-900 hover:bg-green-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors text-left">
                Categories
              </button>
              <button className="text-gray-300 hover:text-white text-left">
                Freelancer
              </button>
              <button className="text-green-400 hover:text-green-300 font-medium text-left">
                BECOME A SELLER
              </button>
              <button className="text-gray-300 hover:text-white text-left">
                LOGIN
              </button>
              <button className="bg-button-color hover:bg-green-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Registration
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
    </div>
  );
}