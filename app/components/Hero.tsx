'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="home" className="min-vh-100 d-flex align-items-center position-relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <div className="container position-relative z-index-1 py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 text-white mb-5 mb-lg-0">
            <h1 className={`display-3 fw-bold mb-4 ${loaded ? 'animate-fadeInUp' : ''}`}>
              Keamanan Lingkungan
              <span className="d-block">Terintegrasi & Modern</span>
            </h1>
            <p className="lead mb-4 opacity-90">
              JagaWarga menghadirkan solusi keamanan komprehensif dengan CCTV terintegrasi dan sistem manajemen tamu digital untuk lingkungan yang lebih aman dan nyaman.
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <button className="btn btn-light btn-lg px-5 fw-semibold">
                <i className="bi bi-play-circle me-2"></i>Demo Gratis
              </button>
              <button className="btn btn-outline-light btn-lg px-5">
                <i className="bi bi-telephone me-2"></i>Hubungi Kami
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
              <div className="card-body p-4 text-center">
                <i className="bi bi-camera-video fs-1 text-primary mb-3"></i>
                <h5 className="fw-bold">Demo CCTV Interaktif</h5>
                <div className="bg-dark rounded-3 p-4 mb-3" style={{ height: '250px' }}>
                  <div className="d-flex justify-content-center align-items-center h-100">
                    <i className="bi bi-eye text-white opacity-50 fs-1"></i>
                  </div>
                </div>
                <p className="text-muted small">Preview sistem pemantauan real-time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}