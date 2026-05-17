'use client';

const features = [
  {
    icon: 'bi-camera-video',
    title: 'CCTV Komplek Terintegrasi',
    description: 'Pantau area sekitar komplek melalui kamera CCTV yang terhubung dalam satu sistem terpusat. Akses real-time dari mana saja.',
    color: 'primary'
  },
  {
    icon: 'bi-qr-code-scan',
    title: 'QR Code untuk Tamu',
    description: 'Warga dapat mendaftarkan tamu yang akan datang, sistem otomatis membuat QR code unik yang dapat diberikan kepada tamu.',
    color: 'success'
  },
  {
    icon: 'bi-person-badge',
    title: 'Verifikasi Satpam',
    description: 'Petugas keamanan dapat memindai QR code tamu untuk memverifikasi apakah tamu tersebut terdaftar dan memiliki izin masuk.',
    color: 'info'
  },
  {
    icon: 'bi-shield-check',
    title: 'Keamanan Data',
    description: 'Sistem enkripsi end-to-end untuk melindungi data warga dan riwayat kunjungan tamu.',
    color: 'danger'
  },
  {
    icon: 'bi-bell',
    title: 'Notifikasi Real-time',
    description: 'Notifikasi instan untuk kedatangan tamu, aktivitas mencurigakan, dan pengumuman penting lingkungan.',
    color: 'warning'
  },
  {
    icon: 'bi-graph-up',
    title: 'Laporan Keamanan',
    description: 'Analitik dan laporan periodik tentang aktivitas keamanan dan pola kunjungan di lingkungan Anda.',
    color: 'secondary'
  }
];

export default function Features() {
  return (
    <section id="fitur" className="py-5 bg-light">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">Fitur Unggulan</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Solusi lengkap untuk keamanan lingkungan yang modern dan efisien
          </p>
        </div>
        <div className="row g-4">
          {features.map((feature, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="card h-100 border-0 shadow-sm hover-shadow transition-all rounded-4" style={{ transition: 'transform 0.3s, box-shadow 0.3s' }}>
                <div className="card-body p-4 text-center">
                  <div className={`bg-${feature.color} bg-opacity-10 rounded-circle d-inline-flex p-3 mb-4`}>
                    <i className={`bi ${feature.icon} fs-1 text-${feature.color}`}></i>
                  </div>
                  <h5 className="fw-bold mb-3">{feature.title}</h5>
                  <p className="text-muted mb-0">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}