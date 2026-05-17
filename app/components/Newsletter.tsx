'use client';

import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    // Validasi email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setMessage('Email tidak valid. Silakan masukkan email yang benar.');
      setStatus('idle');
      return;
    }

    try {
      // Simpan ke Supabase
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([
          { 
            email: email,
            name: name || null,
            subscribed_at: new Date().toISOString(),
            status: 'active'
          }
        ]);

      if (error) {
        // Handle duplicate email error
        if (error.code === '23505') {
          setMessage('Email sudah terdaftar dalam newsletter kami.');
        } else {
          throw error;
        }
        setStatus('error');
      } else {
        setStatus('success');
        setMessage('Terima kasih telah berlangganan! Email konfirmasi telah dikirim.');
        setEmail('');
        setName('');
      }
      
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    } catch (error: any) {
      console.error('Newsletter error:', error);
      setMessage('Terjadi kesalahan. Silakan coba lagi.');
      setStatus('error');
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    }
  };

  const benefits = [
    { icon: 'bi-newspaper', text: 'Update fitur terbaru' },
    { icon: 'bi-shield-check', text: 'Tips keamanan lingkungan' },
    { icon: 'bi-gift', text: 'Promo dan diskon eksklusif' },
    { icon: 'bi-envelope-paper', text: 'Dikirim 2x seminggu' }
  ];

  return (
    <section className="py-5" style={{ 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center text-white mb-5">
              <i className="bi bi-envelope-paper-fill fs-1 mb-3"></i>
              <h2 className="fw-bold mb-3">Tetap Terinformasi</h2>
              <p className="lead opacity-90">
                Dapatkan update terbaru tentang fitur, tips keamanan, dan promo spesial langsung di inbox Anda
              </p>
            </div>

            {/* Benefits */}
            <div className="row g-3 mb-4">
              {benefits.map((benefit, idx) => (
                <div className="col-md-3 col-6" key={idx}>
                  <div className="text-center text-white">
                    <i className={`${benefit.icon} fs-4 mb-2`}></i>
                    <small className="d-block opacity-75">{benefit.text}</small>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
              <div className="card-body p-4 p-lg-5">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Nama Lengkap (Opsional)</label>
                    <div className="input-group">
                      <span className="input-group-text bg-light">
                        <i className="bi bi-person"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Masukkan nama Anda"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Alamat Email *</label>
                    <div className="input-group">
                      <span className="input-group-text bg-light">
                        <i className="bi bi-envelope"></i>
                      </span>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="contoh@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {status === 'loading' && (
                    <div className="alert alert-info">
                      <div className="d-flex align-items-center gap-2">
                        <div className="spinner-border spinner-border-sm"></div>
                        <span>Memproses langganan Anda...</span>
                      </div>
                    </div>
                  )}

                  {status === 'success' && (
                    <div className="alert alert-success">
                      <i className="bi bi-check-circle-fill me-2"></i>
                      {message}
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="alert alert-danger">
                      <i className="bi bi-exclamation-triangle-fill me-2"></i>
                      {message}
                    </div>
                  )}

                  <button 
                    type="submit" 
                    className="btn btn-primary btn-lg w-100 mb-3"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'Memproses...' : (
                      <>
                        <i className="bi bi-send me-2"></i>
                        Berlangganan Gratis
                      </>
                    )}
                  </button>

                  <div className="text-center">
                    <small className="text-muted">
                      <i className="bi bi-shield-lock me-1"></i>
                      Kami tidak akan pernah membagikan email Anda. 
                      <a href="#" className="text-decoration-none"> Lihat kebijakan privasi</a>
                    </small>
                  </div>
                </form>

                {/* Social Proof */}
                <div className="mt-4 pt-3 text-center border-top">
                  <small className="text-muted d-block mb-2">
                    Bergabung dengan 10,000+ subscriber lainnya
                  </small>
                  <div className="d-flex justify-content-center gap-2">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <span className="text-muted ms-2">(4.8 dari 2,345 ulasan)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}