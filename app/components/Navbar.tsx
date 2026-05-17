'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'bg-white shadow-sm' : 'bg-transparent'} py-3 transition-all`} style={{ transition: 'all 0.3s ease' }}>
      <div className="container">
        <Link href="/" className="navbar-brand fw-bold fs-3">
          <i className="bi bi-shield-lock-fill text-primary me-2"></i>
          <span style={{ color: scrolled ? '#1a1a1a' : 'white' }}>JagaWarga</span>
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ backgroundColor: scrolled ? 'transparent' : 'rgba(255,255,255,0.2)' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`collapse navbar-collapse ${mobileMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
            <li className="nav-item"><Link href="/#home" className={`nav-link fw-semibold ${scrolled ? 'text-dark' : 'text-white'}`}>Beranda</Link></li>
            <li className="nav-item"><Link href="/#fitur" className={`nav-link fw-semibold ${scrolled ? 'text-dark' : 'text-white'}`}>Fitur</Link></li>
            <li className="nav-item"><Link href="/#tentang" className={`nav-link fw-semibold ${scrolled ? 'text-dark' : 'text-white'}`}>Tentang</Link></li>
            <li className="nav-item"><Link href="/#harga" className={`nav-link fw-semibold ${scrolled ? 'text-dark' : 'text-white'}`}>Harga</Link></li>
            <li className="nav-item"><a href="/#faq" className={`nav-link fw-semibold ${scrolled ? 'text-dark' : 'text-white'}`}>FAQ</a></li>
            <li className="nav-item"><Link href="/demo/optimistic" className={`nav-link fw-semibold ${scrolled ? 'text-dark' : 'text-white'}`}>Demo</Link></li>
            <li className="nav-item"><a href="/#download" className={`nav-link fw-semibold ${scrolled ? 'text-dark' : 'text-white'}`}>Download</a></li>
          </ul>
          <div className="ms-lg-3 d-flex gap-2">
            <button className="btn btn-outline-primary px-4">Login</button>
            <button className="btn btn-primary px-4">Daftar</button>
          </div>
        </div>
      </div>
    </nav>
  );
}