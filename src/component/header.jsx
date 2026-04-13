import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Articles", path: "/articles" },
    { name: "News", path: "/news" },
    { name: "Updates", path: "#" },
    { name: "Companies", path: "#" },
    { name: "Products & Services", path: "#" },
    { name: "Membership", path: "#" }
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="bg-white border-b border-[#c2c2c2] sticky top-0 z-50 px-6 py-5 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
        <div className="text-[#C2185B] text-2xl">⚛</div>
        <span className="font-bold text-[#C2185B] text-xl tracking-tight">Quantum Buzzz</span>
      </Link>
      
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex gap-6 text-gray-600 font-medium text-sm">
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            to={link.path} 
            className={`hover:text-[#C2185B] transition-colors py-1 ${isActive(link.path) ? 'text-[#C2185B] border-b-2 border-[#C2185B]' : ''}`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Desktop Buttons */}
      <div className="hidden lg:flex items-center gap-4">
        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
          {/* Search Icon */}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        </button>
        <button className="text-sm font-bold text-gray-800 hover:text-[#C2185B] transition-colors">Log In</button>
        <button className="bg-[#00A884] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#008f70] transition-all">
          Sign Up Free
        </button>
      </div>

      {/* Mobile Controls (Search & Hamburger) */}
      <div className="lg:hidden flex items-center gap-2">
        <button className="p-2 text-gray-500 hover:text-[#C2185B] transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        </button>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="p-2 text-gray-600 hover:text-[#C2185B] transition-colors focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl pb-6 px-6 lg:hidden flex flex-col origin-top animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4 py-6 border-b border-gray-100 text-gray-600 font-medium text-base">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`hover:text-[#C2185B] transition-colors ${isActive(link.path) ? 'text-[#C2185B] font-bold' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-4 mt-6">
            <button className="text-base font-bold text-gray-800 hover:text-[#C2185B] py-2 text-left w-full transition-colors">
              Log In
            </button>
            <button className="bg-[#00A884] text-white px-5 py-3 rounded-full text-base font-semibold hover:bg-[#008f70] transition-all text-center w-full">
              Sign Up Free
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;