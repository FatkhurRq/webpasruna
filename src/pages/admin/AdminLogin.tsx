import React from 'react';
import Card from '../../components/UI/Card';

const AdminLogin: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center py-12">
      <div className="max-w-md w-full mx-4">
        <Card>
          <h1 className="text-2xl font-bold text-center mb-6">Login Admin</h1>
          <p className="text-neutral-600 text-center">
            Halaman login untuk admin PASRUNA akan dibuat di sini.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default AdminLogin;