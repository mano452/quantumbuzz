import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const navLinks = [
    "Home", "Articles", "News", "Updates", "Companies", "Products & Services", "Membership", "Need Help?"
  ];

  return (
    <footer className="bg-[#780f3b] text-white w-full">
      <div className="max-w-8xl mx-auto px-8 md:px-20 py-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-center gap-8 mb-8">
          
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15 8H9L12 2Z" fill="currentColor"/>
              <path d="M22 12L16 9V15L22 12Z" fill="currentColor"/>
              <path d="M12 22L9 16H15L12 22Z" fill="currentColor"/>
              <path d="M2 12L8 15V9L2 12Z" fill="currentColor"/>
              <circle cx="12" cy="12" r="3" fill="currentColor"/>
            </svg>
            <span className="font-bold text-xl tracking-wide">Quantum Buzzz</span>
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-3">
            {navLinks.map((link, idx) => {
              const path = link === 'Home' ? '/' : link === 'Articles' ? '/articles' : link === 'News' ? '/news' : '#';
              return (
                <Link key={idx} to={path} className="text-[12px] font-medium hover:text-gray-200 transition-colors">
                  {link}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/70">
          <div>An Initiative by Ina Solutions Inc</div>
          
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
            <span>© 2025 Quantum Buzzz</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
