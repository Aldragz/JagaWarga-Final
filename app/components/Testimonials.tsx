'use client';

const testimonials = [
  {
    name: 'Budi Santoso',
    role: 'Ketua RT 03',
    image: 'https://via.placeholder.com/60',
    text: 'JagaWarga sangat membantu meningkatkan keamanan lingkungan kami. Sistem QR code untuk tamu sangat praktis dan efektif.',
    rating: 5
  },
  {
    name: 'Siti Aminah',
    role: 'Warga Perumahan',
    image: 'https://via.placeholder.com/60',
    text: 'Akses CCTV dari rumah memberi ketenangan tersendiri. Bisa memantau anak-anak yang bermain di komplek.',
    rating: 5
  },
  {
    name: 'Ahmad Hidayat',
    role: 'Kepala Satpam',
    image: 'https://via.placeholder.com/60',
    text: 'Fitur scan QR code mempermudah tugas kami dalam memverifikasi tamu. Sistemnya cepat dan akurat.',
    rating: 4
  }
];

export default function Testimonials() {
  return (
    <section className="py-5">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">Apa Kata Mereka?</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Telah dipercaya oleh ribuan pengguna di seluruh Indonesia
          </p>
        </div>
        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4">
                <div className="d-flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className={`bi bi-star-fill ${i < testimonial.rating ? 'text-warning' : 'text-muted'} me-1`}></i>
                  ))}
                </div>
                <p className="text-muted mb-4">"{testimonial.text}"</p>
                <div className="d-flex align-items-center">
                  <img src={testimonial.image} alt={testimonial.name} className="rounded-circle me-3" width="50" height="50" />
                  <div>
                    <h6 className="fw-bold mb-0">{testimonial.name}</h6>
                    <small className="text-muted">{testimonial.role}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}