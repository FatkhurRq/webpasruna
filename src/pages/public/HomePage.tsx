import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Calendar, Users, Trophy, ArrowRight } from 'lucide-react';
import Button from '../../components/UI/Button';
import Card from '../../components/UI/Card';

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: '/awal.jpg',
      title: 'Selamat Datang di PASRUNA',
      subtitle: 'Paskibra SMA Barunawati',
      description: 'Membentuk karakter, mengembangkan kedisiplinan, dan membangun jiwa kepemimpinan'
    },
    {
      image: '/diklat.jpg',
      title: 'Kegiatan Paskibra',
      subtitle: 'Pendidikan dan Pelatihan',
      description: 'Berbagai kegiatan pembinaan karakter dan kedisiplinan untuk siswa'
    },
    {
      image: '/prestasi.jpg',
      title: 'Prestasi Gemilang',
      subtitle: 'Kebanggaan Sekolah',
      description: 'Meraih berbagai prestasi dalam kompetisi paskibra tingkat regional dan nasional'
    }
  ];

  const activities = [
    {
      title: 'Latihan Rutin',
      description: 'Latihan kedisiplinan dan formasi setiap hari Senin',
      icon: Calendar,
      date: '2025-07-21'
    },
    {
      title: 'Upacara Bendera',
      description: 'Bertugas sebagai petugas upacara hari kemerdekaan',
      icon: Users,
      date: '2025-08-17'
    },
    {
      title: 'Lomba Paskibra',
      description: 'Persiapan lomba paskibra tingkat kota',
      icon: Trophy,
      date: '2025-10-11'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="relative h-full">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="text-center text-white px-4 max-w-4xl">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-up">
                    {slide.title}
                  </h1>
                  <h2 className="text-lg md:text-xl lg:text-2xl mb-6 text-primary-200 animate-slide-up">
                    {slide.subtitle}
                  </h2>
                  <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto animate-slide-up">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
                    <Link to="/daftar">
                      <Button size="lg" className="w-full sm:w-auto">
                        Daftar Sekarang
                      </Button>
                    </Link>
                    <Link to="/tentang">
                      <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white text-primary-500 border-white hover:bg-neutral-50">
                        Pelajari Lebih Lanjut
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide ? 'bg-primary-500' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Sambutan Ketua PASRUNA
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
          </div>
          
          <Card className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <img
                src="/ketua.jpg"
                alt="Ketua PASRUNA"
                className="w-24 h-24 rounded-full mx-auto object-cover"
              />
            </div>
            <blockquote className="text-lg text-neutral-700 italic mb-6 leading-relaxed">
              "PASRUNA bukan hanya organisasi, tetapi keluarga besar yang mengajarkan nilai-nilai 
              kedisiplinan, kepemimpinan, dan karakter. Mari bergabung bersama kami untuk 
              mengembangkan potensi diri dan berkontribusi positif bagi sekolah dan bangsa."
            </blockquote>
            <div className="text-center">
              <p className="font-semibold text-neutral-900">Fatkhur Rozaq</p>
              <p className="text-sm text-neutral-600">Ketua PASRUNA 2024/2025</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-primary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div className="animate-slide-up">
              <div className="text-4xl md:text-5xl font-bold mb-2">120+</div>
              <div className="text-lg">Alumni</div>
            </div>
            <div className="animate-slide-up">
              <div className="text-4xl md:text-5xl font-bold mb-2">20+</div>
              <div className="text-lg">Anggota Aktif</div>
            </div>
            <div className="animate-slide-up">
              <div className="text-4xl md:text-5xl font-bold mb-2">21</div>
              <div className="text-lg">Tahun Berdiri</div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Activities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Kegiatan Mendatang
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Ikuti berbagai kegiatan menarik yang akan mengembangkan karakter dan kemampuan Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {activities.map((activity, index) => (
              <Card key={index} hover className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <activity.icon className="h-8 w-8 text-primary-500" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  {activity.title}
                </h3>
                <p className="text-neutral-600 mb-4">
                  {activity.description}
                </p>
                <div className="text-sm text-primary-500 font-medium">
                  {new Date(activity.date).toLocaleDateString('id-ID', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/kegiatan">
              <Button variant="outline" size="lg">
                Lihat Semua Kegiatan
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Siap Bergabung dengan PASRUNA?
          </h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Jadilah bagian dari keluarga besar PASRUNA dan kembangkan potensi terbaik dalam diri Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/daftar">
              <Button 
                variant="secondary" 
                size="lg" 
                className="w-full sm:w-auto bg-black text-primary-500 hover:bg-neutral-50"
              >
                Daftar Sekarang
              </Button>
            </Link>
            <Link to="/kontak">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary-500"
              >
                Hubungi Kami
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;