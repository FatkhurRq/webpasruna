import React from 'react';
import { Shield, Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/image.png" alt="PASRUNA Logo" className="h-8 w-8 object-contain" />
              <span className="text-xl font-bold">PASRUNA</span>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed max-w-md">
              Paskibra SMA Barunawati adalah organisasi yang mengembangkan kedisiplinan, 
              kepemimpinan, dan karakter siswa melalui berbagai kegiatan positif.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Menu Cepat</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/tentang" className="text-neutral-300 hover:text-primary-400 transition-colors">Tentang Kami</a></li>
              <li><a href="/galeri" className="text-neutral-300 hover:text-primary-400 transition-colors">Galeri</a></li>
              <li><a href="/kegiatan" className="text-neutral-300 hover:text-primary-400 transition-colors">Kegiatan</a></li>
              <li><a href="/daftar" className="text-neutral-300 hover:text-primary-400 transition-colors">Pendaftaran</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary-400 flex-shrink-0" />
                <span className="text-neutral-300">SMA Barunawati, Jakarta</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary-400 flex-shrink-0" />
                <span className="text-neutral-300">pasruna@smabarunawati.sch.id</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary-400 flex-shrink-0" />
                <span className="text-neutral-300">+62 21 XXXX XXXX</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-neutral-300 hover:text-primary-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-300 hover:text-primary-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 text-center">
          <p className="text-neutral-400 text-sm">
            © 2025 PASRUNA - Paskibra SMA Barunawati. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;