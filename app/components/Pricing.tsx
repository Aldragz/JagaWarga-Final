'use client';

const plans = [
  {
    name: 'Warga',
    price: 'Gratis',
    features: [
      'Akses CCTV terbatas',
      'Pendaftaran tamu (max 10/bulan)',
      'Notifikasi kedatangan tamu',
      'Laporan keamanan dasar'
    ],
    recommended: false
  },
  {
    name: 'Warga Pro',
    price: 'Rp50.000',
    period: '/bulan',
    features: [
      'Akses CCTV unlimited',
      'Pendaftaran tamu unlimited',
      'QR code untuk tamu',
      'Notifikasi real-time',
      'Laporan keamanan lengkap',
      'Prioritas support 24/7'
    ],
    recommended: true
  },
  {
    name: 'Instansi',
    price: 'Kustom',
    period: '',
    features: [
      'Manajemen multiple komplek',
      'Dashboard admin khusus',
      'Integrasi dengan sistem existing',
      'Dedicated support',
      'Pelatihan petugas',
      'SLA guarantee'
    ],
    recommended: false
  }
];

export default function Pricing() {
  return (
    <section id="harga" className="py-5 bg-light">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">Pilihan Harga</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Pilih paket yang sesuai dengan kebutuhan keamanan lingkungan Anda
          </p>
        </div>
        <div className="row g-4">
          {plans.map((plan, index) => (
            <div className="col-lg-4" key={index}>
              <div className={`card h-100 border-0 shadow-sm rounded-4 ${plan.recommended ? 'border-primary border-2' : ''}`}>
                {plan.recommended && (
                  <div className="card-header bg-primary text-white text-center py-2 rounded-top-4">
                    <small className="fw-bold">⭐ REKOMENDASI</small>
                  </div>
                )}
                <div className="card-body p-4 text-center">
                  <h4 className="fw-bold mb-3">{plan.name}</h4>
                  <div className="mb-4">
                    <span className="display-4 fw-bold">{plan.price}</span>
                    {plan.period && <span className="text-muted">{plan.period}</span>}
                  </div>
                  <ul className="list-unstyled mb-4">
                    {plan.features.map((feature, idx) => (
                      <li className="mb-2" key={idx}>
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`btn w-100 py-2 rounded-pill ${plan.recommended ? 'btn-primary' : 'btn-outline-primary'}`}>
                    Pilih Paket
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}