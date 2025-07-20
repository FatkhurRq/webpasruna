import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/public/HomePage';
import AboutPage from './pages/public/AboutPage';
import GalleryPage from './pages/public/GalleryPage';
import ActivitiesPage from './pages/public/ActivitiesPage';
import RegistrationPage from './pages/public/RegistrationPage';
import AnnouncementsPage from './pages/public/AnnouncementsPage';
import ContactPage from './pages/public/ContactPage';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="tentang" element={<AboutPage />} />
            <Route path="galeri" element={<GalleryPage />} />
            <Route path="kegiatan" element={<ActivitiesPage />} />
            <Route path="daftar" element={<RegistrationPage />} />
            <Route path="pengumuman" element={<AnnouncementsPage />} />
            <Route path="kontak" element={<ContactPage />} />
          </Route>
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;