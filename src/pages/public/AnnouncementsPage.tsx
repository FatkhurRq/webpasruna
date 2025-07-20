import React from 'react';
import Card from '../../components/UI/Card';

const AnnouncementsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Pengumuman</h1>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
        </div>
        
        <Card>
          <h2 className="text-2xl font-bold mb-4">Pendaftaran Anggota Baru Pasruna</h2>
          <p className="text-neutral-600">
            Untuk pendaftaran anggota baru pasruna, silakan menghubungi admin melalui WhatsApp atau langsung mengikuti latihan yang diadakan setiap hari Senin pukul 15:30 - 17:00 di lapangan SMA Barunawati.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default AnnouncementsPage;