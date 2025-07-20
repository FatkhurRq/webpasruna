import React, { useState } from 'react';
import { MapPin, Mail, Phone, Instagram, Facebook, MessageCircle, Send, Clock, User } from 'lucide-react';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Pesan Anda telah terkirim! Kami akan segera merespons.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const openWhatsApp = () => {
    const phoneNumber = '6281234567890'; // Ganti dengan nomor WhatsApp yang sebenarnya
    const message = 'Halo PASRUNA! Saya ingin bertanya tentang organisasi ini.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Alamat',
      content: 'SMA Barunawati\nJl. Pendidikan No. 123\nJakarta Selatan 12345',
      color: 'text-blue-500'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'pasruna@smabarunawati.sch.id\ninfo.pasruna@gmail.com',
      color: 'text-green-500'
    },
    {
      icon: Phone,
      title: 'Telepon',
      content: '+62 21 1234 5678\n+62 812 3456 7890',
      color: 'text-purple-500'
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      content: 'Senin - Jumat: 07:00 - 16:00\nSabtu: 07:00 - 12:00',
      color: 'text-orange-500'
    }
  ];

  const socialMedia = [
    {
      icon: Instagram,
      name: 'Instagram',
      handle: '@pasruna_barunawati',
      url: 'https://instagram.com/pasruna_barunawati',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500'
    },
    {
      icon: Facebook,
      name: 'Facebook',
      handle: 'PASRUNA Barunawati',
      url: 'https://facebook.com/pasruna.barunawati',
      color: 'bg-blue-600'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Hubungi Kami</h1>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Punya pertanyaan tentang PASRUNA? Jangan ragu untuk menghubungi kami melalui berbagai cara di bawah ini.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Informasi Kontak</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`p-2 rounded-lg bg-neutral-100 ${info.color}`}>
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">{info.title}</h3>
                      <p className="text-sm text-neutral-600 whitespace-pre-line">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* WhatsApp Contact */}
            <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
              <div className="text-center">
                <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">Chat WhatsApp</h3>
                <p className="text-neutral-600 mb-4">
                  Butuh respons cepat? Chat langsung dengan admin PASRUNA melalui WhatsApp
                </p>
                <Button 
                  onClick={openWhatsApp}
                  className="bg-green-500 hover:bg-green-600 text-white flex items-center space-x-2 mx-auto"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Chat WhatsApp</span>
                </Button>
              </div>
            </Card>

            {/* Social Media */}
            <Card>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Media Sosial</h3>
              <div className="space-y-3">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-neutral-50 transition-colors duration-200"
                  >
                    <div className={`p-2 rounded-lg ${social.color}`}>
                      <social.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-neutral-900">{social.name}</p>
                      <p className="text-sm text-neutral-600">{social.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Kirim Pesan</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                    Nama Lengkap
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="Masukkan nama lengkap Anda"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="nama@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                    Subjek
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Subjek pesan Anda"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full flex items-center justify-center space-x-2"
                >
                  <Send className="h-4 w-4" />
                  <span>Kirim Pesan</span>
                </Button>
              </form>
            </Card>

            {/* Quick Contact */}
            <Card className="mt-6 bg-primary-50 border-primary-200">
              <div className="text-center">
                <h3 className="text-lg font-bold text-neutral-900 mb-2">Kontak Darurat</h3>
                <p className="text-sm text-neutral-600 mb-4">
                  Untuk keperluan mendesak, hubungi langsung:
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="tel:+6281234567890"
                    className="flex items-center justify-center space-x-2 bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors duration-200"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Telepon</span>
                  </a>
                  <Button 
                    onClick={openWhatsApp}
                    variant="outline"
                    className="flex items-center space-x-2 border-primary-500 text-primary-500 hover:bg-primary-50"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp</span>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;