'use client';

const steps = [
  {
    icon: 'bi-person-plus',
    title: 'Pendaftaran Akun',
    description: 'Warga dan satpam mendaftar akun dengan verifikasi data diri',
    step: '1'
  },
  {
    icon: 'bi-calendar-check',
    title: 'Daftarkan Tamu',
    description: 'Warga mengisi data tamu dan jadwal kedatangan melalui aplikasi',
    step: '2'
  },
  {
    icon: 'bi-qr-code',
    title: 'Generate QR Code',
    description: 'Sistem otomatis membuat QR code unik untuk tamu yang terdaftar',
    step: '3'
  },
  {
    icon: 'bi-upc-scan',
    title: 'Scan oleh Satpam',
    description: 'Petugas memindai QR code tamu saat memasuki area komplek',
    step: '4'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-5">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">Cara Kerja</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Sistem sederhana namun powerful untuk keamanan maksimal
          </p>
        </div>
        <div className="row justify-content-center">
          {steps.map((step, index) => (
            <div className="col-lg-3 col-md-6 mb-4" key={index}>
              <div className="text-center position-relative">
                <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                  <i className={`bi ${step.icon} text-white fs-1`}></i>
                </div>
                <div className="position-absolute top-0 start-50 translate-middle bg-white rounded-circle d-flex align-items-center justify-content-center border border-primary" style={{ width: '30px', height: '30px', marginLeft: '30px', marginTop: '60px' }}>
                  <span className="fw-bold text-primary small">{step.step}</span>
                </div>
                <h5 className="fw-bold mt-3">{step.title}</h5>
                <p className="text-muted small">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}