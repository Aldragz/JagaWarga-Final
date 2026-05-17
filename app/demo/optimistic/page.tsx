'use client';

import { useState, useEffect } from 'react';
import OptimisticGuestList from '@/app/components/OptimisticGuestList';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

// Data dummy
const dummyGuests = [
  { id: '1', name: 'Budi Santoso', phone: '081234567890', visitDate: '2024-12-20', status: 'pending' as const },
  { id: '2', name: 'Siti Aminah', phone: '081298765432', visitDate: '2024-12-21', status: 'approved' as const },
  { id: '3', name: 'Ahmad Wijaya', phone: '081355577788', visitDate: '2024-12-19', status: 'used' as const },
  { id: '4', name: 'Dewi Kartika', phone: '081377788899', visitDate: '2024-12-18', status: 'expired' as const },
  { id: '5', name: 'Rizky Fadillah', phone: '081399900011', visitDate: '2024-12-22', status: 'pending' as const },
];

export default function OptimisticDemoPage() {
  const [guests, setGuests] = useState(dummyGuests);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading data
    setTimeout(() => setLoading(false), 500);
  }, []);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-vh-100 d-flex align-items-center justify-content-center">
          <div className="text-center">
            <div className="spinner-border text-primary mb-3" style={{ width: '3rem', height: '3rem' }}></div>
            <h5 className="text-muted">Memuat data tamu...</h5>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-5 mt-4">
        <div className="bg-primary bg-opacity-10 py-5">
          <div className="container text-center">
            <h1 className="fw-bold mb-3">
              <i className="bi bi-lightning-charge-fill text-warning me-2"></i>
              Optimistic UI Demo
            </h1>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
              Pengalaman pengguna yang super cepat! Perubahan terjadi INSTAN tanpa menunggu server.
            </p>
          </div>
        </div>
        <OptimisticGuestList initialGuests={guests} />
      </main>
      <Footer />
    </>
  );
}