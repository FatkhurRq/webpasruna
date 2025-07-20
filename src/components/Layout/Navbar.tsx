import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang', path: '/tentang' },
    { name: 'Galeri', path: '/galeri' },
    { name: 'Kegiatan', path: '/kegiatan' },
    { name: 'Pengumuman', path: '/pengumuman' },
    { name: 'Kontak', path: '/kontak' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/image.png" alt="PASRUNA Logo" className="h-8 w-8 object-contain" />
            <span className="text-xl font-bold text-primary-500">PASRUNA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-primary-500 border-b-2 border-primary-500'
                    : 'text-neutral-700 hover:text-primary-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/daftar"
              className="bg-primary-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-600 transition-colors duration-200"
            >
              Daftar Sekarang
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-neutral-700 hover:text-primary-500 hover:bg-neutral-100 transition-colors duration-200"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-slide-down">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-neutral-200">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-primary-500 bg-primary-50'
                      : 'text-neutral-700 hover:text-primary-500 hover:bg-neutral-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/daftar"
                onClick={() => setIsOpen(false)}
                className="block w-full mt-4 bg-primary-500 text-white px-3 py-2 rounded-md text-base font-medium text-center hover:bg-primary-600 transition-colors duration-200"
              >
                Daftar Sekarang
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;