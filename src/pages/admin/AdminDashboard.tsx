import React from 'react';
import Card from '../../components/UI/Card';

const AdminDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-neutral-900 mb-8">Dashboard Admin</h1>
        
        <Card>
          <h2 className="text-2xl font-bold mb-4">Panel Administrasi</h2>
          <p className="text-neutral-600">
            Dashboard admin akan berisi manajemen pendaftar, anggota aktif, 
            kegiatan, pengumuman, dan galeri.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;