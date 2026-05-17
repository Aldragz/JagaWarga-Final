'use client';

import { useState } from 'react';

interface DownloadItem {
  id: string;
  title: string;
  description: string;
  type: 'app' | 'document' | 'api';
  platform?: 'android' | 'ios' | 'windows' | 'mac';
  fileSize: string;
  version: string;
  downloadUrl: string;
  icon: string;
  badge?: string;
}

const downloadItems: DownloadItem[] = [
  // Mobile Apps
  {
    id: 'android-app',
    title: 'JagaWarga for Android',
    description: 'Aplikasi lengkap untuk warga dan satpam. Pantau CCTV, daftarkan tamu, scan QR code.',
    type: 'app',
    platform: 'android',
    fileSize: '45 MB',
    version: '2.5.0',
    downloadUrl: '#',
    icon: 'bi-android2',
    badge: 'Most Popular'
  },
  {
    id: 'ios-app',
    title: 'JagaWarga for iOS',
    description: 'Aplikasi iOS dengan fitur lengkap. Tersedia untuk iPhone dan iPad.',
    type: 'app',
    platform: 'ios',
    fileSize: '52 MB',
    version: '2.5.0',
    downloadUrl: '#',
    icon: 'bi-apple'
  },
  
  // User Guides
  {
    id: 'user-guide-warga',
    title: 'Panduan Pengguna - Warga',
    description: 'Panduan lengkap penggunaan aplikasi JagaWarga untuk warga.',
    type: 'document',
    fileSize: '3.2 MB',
    version: '1.0',
    downloadUrl: '#',
    icon: 'bi-file-pdf'
  },
  {
    id: 'user-guide-satpam',
    title: 'Panduan Pengguna - Satpam',
    description: 'Panduan khusus untuk petugas keamanan menggunakan fitur scan QR code.',
    type: 'document',
    fileSize: '2.8 MB',
    version: '1.0',
    downloadUrl: '#',
    icon: 'bi-file-pdf'
  },
  {
    id: 'admin-guide',
    title: 'Panduan Admin Komplek',
    description: 'Panduan untuk pengelola komplek dalam mengatur sistem keamanan.',
    type: 'document',
    fileSize: '4.1 MB',
    version: '1.2',
    downloadUrl: '#',
    icon: 'bi-file-text'
  },
  
  // API Documentation
  {
    id: 'api-docs',
    title: 'API Documentation',
    description: 'Dokumentasi API lengkap untuk integrasi CCTV dan sistem tamu.',
    type: 'api',
    fileSize: '5.5 MB',
    version: '3.0',
    downloadUrl: '#',
    icon: 'bi-code-square'
  },
  {
    id: 'api-sdk',
    title: 'JagaWarga SDK',
    description: 'Software Development Kit untuk integrasi dengan sistem existing.',
    type: 'api',
    fileSize: '15 MB',
    version: '2.1',
    downloadUrl: '#',
    icon: 'bi-box-seam'
  },
  
  // Installation Guides
  {
    id: 'cctv-integration',
    title: 'Guide: CCTV Integration',
    description: 'Langkah-langkah integrasi CCTV dengan sistem JagaWarga.',
    type: 'document',
    fileSize: '6.7 MB',
    version: '1.5',
    downloadUrl: '#',
    icon: 'bi-camera-video'
  },
  {
    id: 'network-setup',
    title: 'Network Setup Guide',
    description: 'Konfigurasi jaringan untuk akses CCTV dari luar komplek.',
    type: 'document',
    fileSize: '2.3 MB',
    version: '1.0',
    downloadUrl: '#',
    icon: 'bi-wifi'
  }
];

export default function DownloadCenter() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [downloading, setDownloading] = useState<string | null>(null);

  const handleDownload = async (item: DownloadItem) => {
    setDownloading(item.id);
    
    // Simulasi download
    setTimeout(() => {
      // Track download analytics (optional)
      console.log(`Downloading: ${item.title}`);
      window.open(item.downloadUrl, '_blank');
      setDownloading(null);
    }, 1000);
  };

  const filteredItems = downloadItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || item.type === selectedType;
    return matchesSearch && matchesType;
  });

  const getPlatformBadge = (item: DownloadItem) => {
    if (item.platform === 'android') return 'bg-success';
    if (item.platform === 'ios') return 'bg-dark';
    if (item.platform === 'windows') return 'bg-info';
    if (item.platform === 'mac') return 'bg-secondary';
    if (item.type === 'document') return 'bg-danger';
    if (item.type === 'api') return 'bg-purple';
    return 'bg-primary';
  };

  return (
    <section id="download" className="py-5 bg-light">
      <div className="container py-4">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">
            <i className="bi bi-download fs-1 text-primary d-block mb-3"></i>
            Download Center
          </h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Unduh aplikasi, panduan, dan dokumentasi JagaWarga. Semua kebutuhan Anda dalam satu tempat.
          </p>
        </div>

        {/* QR Code Section */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
              <div className="row g-0 align-items-center">
                <div className="col-md-4 text-center p-4 bg-primary bg-opacity-10">
                  <div className="bg-white d-inline-block p-3 rounded-3 shadow-sm">
                    <div className="bg-dark p-3 rounded-2" style={{ width: '150px', height: '150px' }}>
                      <div className="d-flex align-items-center justify-content-center h-100">
                        <i className="bi bi-qr-code-scan text-white fs-1"></i>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 mb-0 fw-semibold">Scan untuk download</p>
                  <small className="text-muted">Aplikasi JagaWarga</small>
                </div>
                <div className="col-md-8 p-4">
                  <h4 className="fw-bold mb-3">Download Aplikasi Mobile</h4>
                  <p className="text-muted mb-4">
                    Dapatkan pengalaman terbaik dengan aplikasi mobile JagaWarga. 
                    Tersedia untuk Android dan iOS dengan semua fitur lengkap.
                  </p>
                  <div className="d-flex gap-3 flex-wrap">
                    <button className="btn btn-dark px-4 py-2">
                      <i className="bi bi-android2 me-2"></i>
                      Google Play
                    </button>
                    <button className="btn btn-dark px-4 py-2">
                      <i className="bi bi-apple me-2"></i>
                      App Store
                    </button>
                    <button className="btn btn-outline-dark px-4 py-2">
                      <i className="bi bi-qr-code me-2"></i>
                      Scan QR Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm rounded-pill">
              <div className="card-body p-2">
                <div className="input-group">
                  <span className="input-group-text bg-transparent border-0">
                    <i className="bi bi-search"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control border-0 py-2"
                    placeholder="Cari dokumen atau aplikasi..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  {searchTerm && (
                    <button className="btn btn-link text-decoration-none" onClick={() => setSearchTerm('')}>
                      <i className="bi bi-x-circle"></i>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Type Filters */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8">
            <div className="d-flex justify-content-center gap-2 flex-wrap">
              <button
                onClick={() => setSelectedType('all')}
                className={`btn rounded-pill px-4 ${selectedType === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
              >
                <i className="bi bi-grid-3x3-gap-fill me-1"></i>
                Semua
              </button>
              <button
                onClick={() => setSelectedType('app')}
                className={`btn rounded-pill px-4 ${selectedType === 'app' ? 'btn-primary' : 'btn-outline-primary'}`}
              >
                <i className="bi bi-phone me-1"></i>
                Aplikasi
              </button>
              <button
                onClick={() => setSelectedType('document')}
                className={`btn rounded-pill px-4 ${selectedType === 'document' ? 'btn-primary' : 'btn-outline-primary'}`}
              >
                <i className="bi bi-file-earmark-text me-1"></i>
                Dokumen
              </button>
              <button
                onClick={() => setSelectedType('api')}
                className={`btn rounded-pill px-4 ${selectedType === 'api' ? 'btn-primary' : 'btn-outline-primary'}`}
              >
                <i className="bi bi-code-slash me-1"></i>
                API & SDK
              </button>
            </div>
          </div>
        </div>

        {/* Download Items Grid */}
        <div className="row g-4">
          {filteredItems.length === 0 ? (
            <div className="col-12 text-center py-5">
              <i className="bi bi-inbox fs-1 text-muted"></i>
              <p className="text-muted mt-3">Tidak ada hasil yang ditemukan</p>
            </div>
          ) : (
            filteredItems.map((item) => (
              <div className="col-md-6 col-lg-4" key={item.id}>
                <div className="card h-100 border-0 shadow-sm rounded-4 hover-lift transition-all">
                  {item.badge && (
                    <div className="position-absolute top-0 end-0 m-3">
                      <span className="badge bg-warning text-dark">{item.badge}</span>
                    </div>
                  )}
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start mb-3">
                      <div className={`rounded-circle p-3 me-3 bg-${getPlatformBadge(item)} bg-opacity-10`}>
                        <i className={`${item.icon} fs-4 text-${getPlatformBadge(item)}`}></i>
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="fw-bold mb-1">{item.title}</h5>
                        <div className="d-flex gap-2 small text-muted">
                          <span>
                            <i className="bi bi-hdd-stack me-1"></i>
                            {item.fileSize}
                          </span>
                          <span>
                            <i className="bi bi-tag me-1"></i>
                            v{item.version}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted small mb-4">{item.description}</p>
                    <button
                      onClick={() => handleDownload(item)}
                      disabled={downloading === item.id}
                      className={`btn w-100 ${item.type === 'app' ? 'btn-primary' : 'btn-outline-primary'}`}
                    >
                      {downloading === item.id ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2"></span>
                          Downloading...
                        </>
                      ) : (
                        <>
                          <i className="bi bi-download me-2"></i>
                          Download
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Version History Link */}
        <div className="text-center mt-5">
          <a href="#" className="text-decoration-none">
            <i className="bi bi-clock-history me-1"></i>
            Lihat riwayat versi lengkap
          </a>
        </div>
      </div>

      <style jsx>{`
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 1rem 3rem rgba(0,0,0,.175)!important;
        }
        .transition-all {
          transition: all 0.3s ease;
        }
        .bg-purple {
          background-color: #6f42c1;
        }
        .text-purple {
          color: #6f42c1;
        }
      `}</style>
    </section>
  );
}