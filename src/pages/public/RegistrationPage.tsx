import React from 'react';
import { ExternalLink, FileText, CheckCircle, UserPlus } from 'lucide-react'; // add Users and Clock
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';

const RegistrationPage: React.FC = () => {
  const openGoogleForm = () => {
    // Ganti URL ini dengan link Google Form yang sebenarnya
    // const googleFormUrl = '';
    // window.open(googleFormUrl, '_blank');
  };

  const requirements = [
    'Siswa/siswi SMA Barunawati kelas X atau XI',
    'Mendapatkan izin dari orang tua/wali',
    'Sehat jasmani dan rohani',
    'Bersedia mengikuti seluruh rangkaian kegiatan',
    'Memiliki komitmen tinggi dan disiplin'
  ];

  const benefits = [
    'Mengembangkan karakter dan kedisiplinan',
    'Melatih kepemimpinan dan public speaking',
    'Kesempatan mengikuti kompetisi paskibra',
    'Networking dengan sesama anggota',
    'Pengalaman organisasi yang berharga'
  ];

  // const timeline = [
  //   {
  //     phase: 'Pendaftaran',
  //     date: '21-31 Juli 2025',
  //     description: 'Pengisian formulir dan pengumpulan berkas',
  //     icon: FileText,
  //     status: 'active'
  //   },
  //   {
  //     phase: 'Seleksi Berkas',
  //     date: '16-20 Februari 2025',
  //     description: 'Verifikasi dan penilaian berkas pendaftaran',
  //     icon: CheckCircle,
  //     status: 'upcoming'
  //   },
  //   {
  //     phase: 'Tes Wawancara',
  //     date: '21-25 Februari 2025',
  //     description: 'Wawancara dan tes kemampuan dasar',
  //     icon: Users,
  //     status: 'upcoming'
  //   },
  //   {
  //     phase: 'Pengumuman',
  //     date: '28 Februari 2025',
  //     description: 'Pengumuman hasil seleksi',
  //     icon: Clock,
  //     status: 'upcoming'
  //   }
  // ];

  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Pendaftaran Anggota Baru</h1>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Bergabunglah dengan PASRUNA dan kembangkan potensi kepemimpinan serta karakter Anda
          </p>
        </div>

        {/* Registration Status Banner */}
        <Card className="mb-8 bg-gradient-to-r from-primary-50 to-primary-100 border-primary-200">
          <div className="text-center">
            <div className="bg-primary-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <UserPlus className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">Pendaftaran Dibuka!</h2>
            <p className="text-neutral-700 mb-6">
              Periode pendaftaran anggota baru PASRUNA tahun 2025 telah dibuka. 
              Jangan lewatkan kesempatan untuk bergabung dengan organisasi terbaik di sekolah!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={openGoogleForm}
                size="lg"
                className="flex items-center space-x-2 bg-primary-500 hover:bg-primary-600"
              >
                <ExternalLink className="h-5 w-5" />
                <span>Daftar via Google Form</span>
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="flex items-center space-x-2 border-primary-500 text-primary-500 hover:bg-primary-50"
              >
                <FileText className="h-5 w-5" />
                <span>Download Formulir PDF</span>
              </Button>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Requirements */}
          <Card>
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Persyaratan Pendaftaran</h3>
            <ul className="space-y-3">
              {requirements.map((requirement, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">{requirement}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Benefits */}
          <Card>
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Manfaat Bergabung</h3>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Timeline */}
        {/* <Card className="mb-8">
          <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center">Timeline Pendaftaran</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  item.status === 'active' 
                    ? 'bg-primary-500 text-white' 
                    : 'bg-neutral-200 text-neutral-500'
                }`}>
                  <item.icon className="h-8 w-8" />
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">{item.phase}</h4>
                <p className="text-sm text-primary-600 font-medium mb-2">{item.date}</p>
                <p className="text-sm text-neutral-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Card> */}

        {/* Important Notes */}
        <Card className="bg-yellow-50 border-yellow-200">
          <h3 className="text-xl font-bold text-neutral-900 mb-4">Catatan Penting</h3>
          <div className="space-y-2 text-neutral-700">
            <p>• Untuk saat ini pendaftaran masih belum bisa dilakukan secara online, dikarenakan website masih dalam tahap pengembangan</p>
            <p>• Silakan menghubungi admin untuk informasi pendaftaran</p>
            {/* <p>• Pastikan semua data yang diisi benar dan sesuai dengan dokumen resmi</p>
            <p>• Foto yang diupload harus formal dengan latar belakang putih</p>
            <p>• Pendaftaran yang tidak lengkap akan otomatis gugur</p>
            <p>• Untuk pertanyaan lebih lanjut, hubungi admin melalui WhatsApp atau email</p> */}
          </div>
        </Card>

        {/* Contact for Questions */}
        <div className="text-center mt-8">
          <p className="text-neutral-600 mb-4">
            Ada pertanyaan tentang pendaftaran? Jangan ragu untuk menghubungi kami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6282257325228?text=Halo%20PASRUNA!%20Saya%20ingin%20bertanya%20tentang%20pendaftaran%20anggota%20baru."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-200"
            >
              <span>Chat WhatsApp</span>
            </a>
            <a
              href="mailto:paskibrasmabarunawat@gmail.com"
              className="inline-flex items-center justify-center space-x-2 bg-neutral-600 text-white px-6 py-3 rounded-lg hover:bg-neutral-700 transition-colors duration-200"
            >
              <span>Kirim Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;