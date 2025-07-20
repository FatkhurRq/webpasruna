import React from 'react';
import Card from '../../components/UI/Card';

const ActivitiesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Kegiatan</h1>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
        </div>
        
        <Card>
          <h2 className="text-2xl font-bold mb-4">Daftar dan Kalender Kegiatan</h2>
          <p className="text-neutral-600">
            Halaman ini akan menampilkan daftar kegiatan PASRUNA beserta kalender 
            untuk memudahkan anggota melihat jadwal kegiatan.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default ActivitiesPage;