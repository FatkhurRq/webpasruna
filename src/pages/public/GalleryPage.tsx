import React, { useState } from 'react';
import { Calendar, Users, Trophy, Award } from 'lucide-react';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';

const GalleryPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const galleryItems = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/8199133/pexels-photo-8199133.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Latihan Formasi',
      category: 'training',
      year: '2024',
      description: 'Latihan formasi rutin anggota PASRUNA'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/8923671/pexels-photo-8923671.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Upacara Bendera',
      category: 'ceremony',
      year: '2024',
      description: 'Petugas upacara bendera hari Senin'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Lomba Paskibra',
      category: 'competition',
      year: '2024',
      description: 'Kompetisi paskibra tingkat kota'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/3184336/pexels-photo-3184336.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Pembinaan Karakter',
      category: 'training',
      year: '2024',
      description: 'Sesi pembinaan karakter dan kedisiplinan'
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Kegiatan Outdoor',
      category: 'outdoor',
      year: '2024',
      description: 'Kegiatan outdoor training'
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Penerimaan Anggota Baru',
      category: 'ceremony',
      year: '2024',
      description: 'Upacara penerimaan anggota baru PASRUNA'
    },
    {
      id: 7,
      image: 'https://images.pexels.com/photos/8923664/pexels-photo-8923664.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Pelatihan Kepemimpinan',
      category: 'training',
      year: '2023',
      description: 'Workshop kepemimpinan untuk anggota'
    },
    {
      id: 8,
      image: 'https://images.pexels.com/photos/6238298/pexels-photo-6238298.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Prestasi Juara',
      category: 'competition',
      year: '2023',
      description: 'Meraih juara 1 lomba paskibra regional'
    },
    {
      id: 9,
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Bakti Sosial',
      category: 'social',
      year: '2023',
      description: 'Kegiatan bakti sosial di masyarakat'
    }
  ];

  const filters = [
    { id: 'all', name: 'Semua', icon: Calendar },
    { id: 'training', name: 'Latihan', icon: Users },
    { id: 'ceremony', name: 'Upacara', icon: Award },
    { id: 'competition', name: 'Kompetisi', icon: Trophy },
    { id: 'outdoor', name: 'Outdoor', icon: Calendar },
    { id: 'social', name: 'Sosial', icon: Users }
  ];

  const filteredItems = selectedFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedFilter);

  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Galeri PASRUNA</h1>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Dokumentasi kegiatan dan prestasi PASRUNA dalam berbagai event dan kompetisi
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={selectedFilter === filter.id ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setSelectedFilter(filter.id)}
              className="flex items-center space-x-2"
            >
              <filter.icon className="h-4 w-4" />
              <span>{filter.name}</span>
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} hover className="overflow-hidden p-0">
              <div className="relative group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-primary-500 text-white px-2 py-1 rounded text-xs font-medium">
                  {item.year}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-neutral-600 text-sm">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-neutral-500 text-lg">Tidak ada foto untuk kategori ini.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;