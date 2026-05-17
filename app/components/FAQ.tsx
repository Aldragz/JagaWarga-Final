'use client';

import { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  // Keamanan & Privasi
  {
    id: 1,
    question: "Apakah data kamera CCTV saya aman?",
    answer: "Ya, semua data CCTV dienkripsi end-to-end dan hanya bisa diakses oleh pemilik akun yang terverifikasi. Kami menggunakan standar keamanan bank untuk melindungi data Anda.",
    category: "Keamanan"
  },
  {
    id: 2,
    question: "Bagaimana JagaWarga melindungi privasi warga?",
    answer: "JagaWarga tunduk pada peraturan perlindungan data pribadi. Rekaman CCTV hanya disimpan selama 30 hari dan dapat dihapus permanen atas permintaan warga.",
    category: "Keamanan"
  },
  {
    id: 3,
    question: "Apa yang terjadi jika data saya bocor?",
    answer: "Kami memiliki tim keamanan dedicated 24/7. Jika terjadi insiden, semua pengguna akan segera diinformasikan dan kami akan mengambil tindakan penanggulangan segera.",
    category: "Keamanan"
  },
  
  // Teknis & Instalasi
  {
    id: 4,
    question: "Apakah JagaWarga bisa diintegrasikan dengan CCTV yang sudah ada?",
    answer: "Ya, JagaWarga mendukung integrasi dengan berbagai merek CCTV melalui API kami. Tim teknis kami akan membantu proses integrasi dengan CCTV existing Anda.",
    category: "Teknis"
  },
  {
    id: 5,
    question: "Browser apa saja yang didukung?",
    answer: "JagaWarga mendukung Chrome, Firefox, Safari, dan Edge versi terbaru. Untuk pengalaman terbaik, kami rekomendasikan menggunakan Chrome.",
    category: "Teknis"
  },
  {
    id: 6,
    question: "Apakah ada aplikasi mobile?",
    answer: "Ya, JagaWarga tersedia untuk Android (Google Play Store) dan iOS (App Store) dengan fitur lengkap seperti versi web.",
    category: "Teknis"
  },
  {
    id: 7,
    question: "Berapa kecepatan internet minimal yang dibutuhkan?",
    answer: "Minimal 2 Mbps untuk akses CCTV, dan 5 Mbps untuk streaming real-time. Koneksi stabil sangat direkomendasikan untuk performa optimal.",
    category: "Teknis"
  },
  
  // Pendaftaran & Akun
  {
    id: 8,
    question: "Bagaimana cara mendaftar sebagai warga?",
    answer: "Download aplikasi JagaWarga, pilih 'Daftar', isi data diri, verifikasi nomor telepon, dan konfirmasi alamat komplek Anda. Proses kurang dari 5 menit.",
    category: "Akun"
  },
  {
    id: 9,
    question: "Apakah satpam perlu verifikasi khusus?",
    answer: "Ya, akun satpam harus diverifikasi oleh pengelola komplek. Satpam perlu mengirimkan foto KTP dan surat tugas dari pihak keamanan komplek.",
    category: "Akun"
  },
  {
    id: 10,
    question: "Bisakah satu akun untuk satu keluarga?",
    answer: "Setiap anggota keluarga dewasa disarankan memiliki akun sendiri. Tersedia fitur 'Keluarga' untuk menghubungkan akun-akun dalam satu rumah.",
    category: "Akun"
  },
  {
    id: 11,
    question: "Lupa password? Bagaimana cara reset?",
    answer: "Klik 'Lupa Password' di halaman login, masukkan email terdaftar, kami akan kirimkan link reset password ke email Anda dalam 5 menit.",
    category: "Akun"
  },
  
  // Pembayaran & Harga
  {
    id: 12,
    question: "Metode pembayaran apa saja yang diterima?",
    answer: "Kami menerima transfer bank (BCA, Mandiri, BRI, BNI), kartu kredit (Visa/Mastercard), QRIS, Dana, OVO, dan GoPay.",
    category: "Pembayaran"
  },
  {
    id: 13,
    question: "Apakah ada biaya instalasi awal?",
    answer: "Instalasi dasar gratis untuk paket Warga Pro. Untuk instalasi dengan integrasi CCTV khusus, dikenakan biaya mulai Rp500.000.",
    category: "Pembayaran"
  },
  {
    id: 14,
    question: "Bisakah upgrade/downgrade paket?",
    answer: "Ya, Anda bisa upgrade/downgrade kapan saja. Perubahan akan berlaku di siklus penagihan berikutnya tanpa biaya tambahan.",
    category: "Pembayaran"
  },
  {
    id: 15,
    question: "Apakah ada garansi uang kembali?",
    answer: "Ya, kami memberikan garansi uang kembali 100% dalam 14 hari pertama jika Anda tidak puas dengan layanan JagaWarga.",
    category: "Pembayaran"
  },
  
  // Fitur & Penggunaan
  {
    id: 16,
    question: "Berapa lama QR code tamu berlaku?",
    answer: "QR code tamu berlaku sesuai jadwal kunjungan yang ditentukan. Default berlaku 24 jam, dapat disesuaikan oleh warga yang mendaftarkan.",
    category: "Fitur"
  },
  {
    id: 17,
    question: "Bisakah mendaftarkan tamu tanpa QR code?",
    answer: "QR code wajib untuk keamanan. Tamu bisa dihubungi dan diberikan QR code via WhatsApp atau screenshot dari aplikasi warga.",
    category: "Fitur"
  },
  {
    id: 18,
    question: "Apakah CCTV bisa diakses dari luar komplek?",
    answer: "Ya, akses CCTV dapat dilakukan dari mana saja selama ada koneksi internet. Anda bisa memantau rumah dari kantor atau saat bepergian.",
    category: "Fitur"
  },
  {
    id: 19,
    question: "Fitur apa saja yang gratis?",
    answer: "Paket gratis mencakup akses CCTV terbatas (3 kamera), pendaftaran tamu 10x/bulan, notifikasi dasar, dan laporan keamanan bulanan.",
    category: "Fitur"
  },
  
  // Lainnya
  {
    id: 20,
    question: "Bagaimana cara melaporkan bug atau masalah?",
    answer: "Hubungi customer support via live chat, email support@jagawarga.com, atau melalui fitur 'Laporkan Masalah' di aplikasi.",
    category: "Lainnya"
  }
];

const categories = ["Semua", "Keamanan", "Teknis", "Akun", "Pembayaran", "Fitur", "Lainnya"];

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Semua' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="faq" className="py-5">
      <div className="container py-4">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">
            <i className="bi bi-question-circle-fill text-primary me-2"></i>
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Temukan jawaban cepat untuk pertanyaan Anda seputar JagaWarga
          </p>
        </div>

        {/* Search Bar */}
        <div className="row justify-content-center mb-4">
          <div className="col-lg-6">
            <div className="input-group shadow-sm rounded-pill overflow-hidden">
              <span className="input-group-text bg-white border-0">
                <i className="bi bi-search"></i>
              </span>
              <input
                type="text"
                className="form-control border-0 py-3"
                placeholder="Cari pertanyaan..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button 
                  className="btn btn-light border-0"
                  onClick={() => setSearchTerm('')}
                >
                  <i className="bi bi-x-lg"></i>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8">
            <div className="d-flex flex-wrap justify-content-center gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`btn rounded-pill px-4 py-2 ${selectedCategory === category ? 'btn-primary' : 'btn-outline-primary'}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-5">
                <i className="bi bi-emoji-frown fs-1 text-muted"></i>
                <p className="text-muted mt-3">Tidak ditemukan pertanyaan yang cocok</p>
                <button 
                  className="btn btn-link"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('Semua');
                  }}
                >
                  Reset filter
                </button>
              </div>
            ) : (
              filteredFaqs.map((faq) => (
                <div key={faq.id} className="card mb-3 border-0 shadow-sm rounded-3">
                  <button
                    className={`btn text-start d-flex justify-content-between align-items-center p-4 ${openItems.includes(faq.id) ? 'bg-primary bg-opacity-10' : ''}`}
                    onClick={() => toggleItem(faq.id)}
                  >
                    <div className="d-flex align-items-center gap-3">
                      <i className={`bi bi-${openItems.includes(faq.id) ? 'chevron-down' : 'chevron-right'} text-primary`}></i>
                      <span className="fw-semibold">{faq.question}</span>
                    </div>
                    <span className="badge bg-light text-dark rounded-pill">{faq.category}</span>
                  </button>
                  {openItems.includes(faq.id) && (
                    <div className="p-4 pt-0 text-muted border-top">
                      <div className="mt-3">
                        {faq.answer}
                      </div>
                      <div className="mt-3">
                        <small className="text-primary">
                          <i className="bi bi-hand-thumbs-up me-1"></i>
                          Apakah jawaban ini membantu?
                        </small>
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>

        {/* Still have questions */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-8 text-center p-5 bg-light rounded-4">
            <i className="bi bi-chat-dots-fill fs-1 text-primary mb-3"></i>
            <h5 className="fw-bold mb-2">Masih punya pertanyaan?</h5>
            <p className="text-muted mb-4">
              Tim support kami siap membantu Anda 24/7
            </p>
            <div className="d-flex gap-3 justify-content-center">
              <button className="btn btn-primary px-4">
                <i className="bi bi-envelope me-2"></i>Email Support
              </button>
              <button className="btn btn-outline-primary px-4">
                <i className="bi bi-whatsapp me-2"></i>WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}