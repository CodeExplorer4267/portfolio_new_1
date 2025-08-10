import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-purple-700 to-indigo-800 text-white pt-16 mt-30 w-[100%]">
      
      {/* Wave Shape */}
      <div className="absolute -top-16 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(130%+1.3px)] h-16"
        >
          <path
            d="M321.39,56.44c58-10.79,114-30.12,172-41.4,82.39-15.76,168.19-12.5,250.27,0,82.66,12.58,165.89,35.8,247.39,44.53,59,6.15,117.22,3.93,175.18-6.51V120H0V72.05C107.77,86.26,214.73,67.23,321.39,56.44Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        
        {/* Brand / Intro */}
        <div>
          <h2 className="text-2xl font-bold">Rupam Bhadra</h2>
          <p className="text-sm mt-3 opacity-80">
            MERN Stack Developer | Passionate about building interactive and scalable web applications. 
            Let's turn ideas into reality!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:text-yellow-300 transition">About</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-yellow-300 transition">Projects</a>
            </li>
            <li>
              <a href="#skills" className="hover:text-yellow-300 transition">Skills</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-300 transition">Contact</a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect with Me</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="https://facebook.com" className="hover:scale-110 transform transition">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" className="hover:scale-110 transform transition">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" className="hover:scale-110 transform transition">
              <FaLinkedin />
            </a>
            <a href="https://github.com" className="hover:scale-110 transform transition">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/20 mt-8 pt-4 text-center text-sm opacity-75 relative z-10">
        © {new Date().getFullYear()} Rupam Bhadra. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
