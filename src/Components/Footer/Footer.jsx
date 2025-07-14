import { Facebook, Instagram } from 'lucide-react';
import logo from "../../assets/logo.png";
import news from "../../assets/news.jpg";

export default function Footer() {
  return (
    <div className="bg-primary">
      <footer className="container mx-auto text-white">
        {/* CTA Section */}
        <div className="py-10 sm:py-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Reach Your Requirement Goals Right on Schedule
              </h2>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-300 text-sm sm:text-base mb-6 max-w-md mx-auto md:mx-0">
                Sign up, complete your profile, and start browsing projects. Submit
                proposals and communicate with clients to get hired.
              </p>
              <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="py-10 sm:py-16 px-4 sm:px-6 border-t border-gray-800">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Logo */}
            <div className="flex justify-center sm:justify-start">
              <div className="flex items-center space-x-2 mb-6">
                <img src={logo} alt="Logo" className="h-8 sm:h-10" />
              </div>
            </div>

            {/* About */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-center sm:text-left">About</h3>
              <ul className="space-y-2 text-gray-300 text-sm sm:text-base text-center sm:text-left">
                <li><a href="#" className="hover:text-white transition-colors duration-200">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Become Seller</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Pro/Jobs</a></li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-center sm:text-left">Categories</h3>
              <ul className="space-y-2 text-gray-300 text-sm sm:text-base text-center sm:text-left">
                <li><a href="#" className="hover:text-white transition-colors duration-200">Design & Creative</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Development & IT</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Music & Audio</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Programming & Tech</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-center sm:text-left">Support</h3>
              <ul className="space-y-2 text-gray-300 text-sm sm:text-base text-center sm:text-left">
                <li><a href="#" className="hover:text-white transition-colors duration-200">Help & Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Terms & Services</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Popular Posts & Social */}
        <div className="py-8 px-4 sm:px-6 border-t border-gray-800">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-lg flex items-center justify-center transition-colors duration-200" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-200" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-200" aria-label="X">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>

            {/* Popular Posts */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold mb-4">Our Popular Posts</h4>
              <div className="flex flex-col sm:gap-4 sm:flex-row sm:space-x-6">
                <div className="flex items-center space-x-3 mb-4 sm:mb-0">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                    <img src={news} alt="" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">November 7, 2024</p>
                    <p className="text-sm">Unveils the Best Canadian<br />Cities for Biking</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                    <img src={news} alt="" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">November 7, 2024</p>
                    <p className="text-sm">Unveils the Best Canadian<br />Cities for Biking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-4 px-4 sm:px-6 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © QuantumEdge Software INC. 2025. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}