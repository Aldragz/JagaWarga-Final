'use client';

import { useOptimistic, useTransition, useState } from 'react';

interface Guest {
  id: string;
  name: string;
  phone: string;
  visitDate: string;
  status: 'pending' | 'approved' | 'used' | 'expired';
}

interface OptimisticGuestListProps {
  initialGuests: Guest[];
}

export default function OptimisticGuestList({ initialGuests }: OptimisticGuestListProps) {
  const [guests, setGuests] = useState<Guest[]>(initialGuests);
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Optimistic delete
  const [optimisticGuests, removeOptimisticGuest] = useOptimistic(
    guests,
    (state, guestId: string) => state.filter(guest => guest.id !== guestId)
  );

  // Optimistic update status
  const [optimisticStatusGuests, updateOptimisticStatus] = useOptimistic(
    optimisticGuests,
    (state, { guestId, newStatus }: { guestId: string; newStatus: Guest['status'] }) =>
      state.map(guest =>
        guest.id === guestId ? { ...guest, status: newStatus } : guest
      )
  );

  const handleDeleteGuest = async (guestId: string, guestName: string) => {
    setMessage(null);
    
    startTransition(async () => {
      // Optimistic update - langsung hapus dari UI
      removeOptimisticGuest(guestId);
      
      try {
        // Simulasi API call ke Supabase
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Update state sebenarnya
        setGuests(prev => prev.filter(g => g.id !== guestId));
        
        setMessage({ type: 'success', text: `Tamu "${guestName}" berhasil dihapus!` });
        setTimeout(() => setMessage(null), 3000);
      } catch (error) {
        // Jika gagal, revert dengan refresh data
        setMessage({ type: 'error', text: `Gagal menghapus "${guestName}". Silakan coba lagi.` });
        setGuests(initialGuests);
        setTimeout(() => setMessage(null), 3000);
      }
    });
  };

  const handleUpdateStatus = async (guestId: string, newStatus: Guest['status'], guestName: string) => {
    setMessage(null);
    
    startTransition(async () => {
      // Optimistic update - langsung update UI
      updateOptimisticStatus({ guestId, newStatus });
      
      try {
        // Simulasi API call
        await new Promise(resolve => setTimeout(resolve, 600));
        
        // Update state sebenarnya
        setGuests(prev =>
          prev.map(guest =>
            guest.id === guestId ? { ...guest, status: newStatus } : guest
          )
        );
        
        setMessage({ type: 'success', text: `Status tamu "${guestName}" diubah menjadi ${getStatusText(newStatus)}!` });
        setTimeout(() => setMessage(null), 3000);
      } catch (error) {
        setMessage({ type: 'error', text: `Gagal mengupdate status "${guestName}".` });
        setGuests(initialGuests);
        setTimeout(() => setMessage(null), 3000);
      }
    });
  };

  const getStatusText = (status: Guest['status']) => {
    const statusMap = {
      pending: 'Menunggu',
      approved: 'Disetujui',
      used: 'Sudah Digunakan',
      expired: 'Kadaluarsa'
    };
    return statusMap[status];
  };

  const getStatusBadgeClass = (status: Guest['status']) => {
    const classMap = {
      pending: 'bg-warning text-dark',
      approved: 'bg-success',
      used: 'bg-info',
      expired: 'bg-secondary'
    };
    return classMap[status];
  };

  return (
    <div className="container py-4">
      <div className="card border-0 shadow-sm rounded-4">
        <div className="card-header bg-white border-0 pt-4 px-4">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h4 className="fw-bold mb-1">
                <i className="bi bi-people-fill text-primary me-2"></i>
                Daftar Tamu
              </h4>
              <p className="text-muted small mb-0">
                {isPending && (
                  <span className="badge bg-info me-2">
                    <span className="spinner-border spinner-border-sm me-1"></span>
                    Menyimpan...
                  </span>
                )}
                Total: {optimisticStatusGuests.length} tamu
              </p>
            </div>
          </div>
        </div>

        <div className="card-body p-4">
          {/* Alert Message */}
          {message && (
            <div className={`alert alert-${message.type === 'success' ? 'success' : 'danger'} alert-dismissible fade show mb-4`}>
              <i className={`bi bi-${message.type === 'success' ? 'check-circle' : 'exclamation-triangle'} me-2`}></i>
              {message.text}
              <button type="button" className="btn-close" onClick={() => setMessage(null)}></button>
            </div>
          )}

          {/* Loading Overlay saat isPending */}
          {isPending && (
            <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-start pt-5" style={{ zIndex: 9999, pointerEvents: 'none' }}>
              <div className="bg-dark text-white px-4 py-2 rounded-pill shadow-lg">
                <div className="spinner-border spinner-border-sm me-2"></div>
                Memproses perubahan...
              </div>
            </div>
          )}

          {/* Guest List */}
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th>No</th>
                  <th>Nama Tamu</th>
                  <th>Telepon</th>
                  <th>Tanggal Kunjungan</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {optimisticStatusGuests.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-5">
                      <i className="bi bi-inbox fs-1 text-muted"></i>
                      <p className="text-muted mt-2">Belum ada tamu terdaftar</p>
                    </td>
                  </tr>
                ) : (
                  optimisticStatusGuests.map((guest, index) => (
                    <tr key={guest.id}>
                      <td>{index + 1}</td>
                      <td className="fw-semibold">{guest.name}</td>
                      <td>{guest.phone}</td>
                      <td>{new Date(guest.visitDate).toLocaleDateString('id-ID')}</td>
                      <td>
                        <select
                          className={`badge border-0 ${getStatusBadgeClass(guest.status)} px-3 py-2`}
                          value={guest.status}
                          onChange={(e) => handleUpdateStatus(guest.id, e.target.value as Guest['status'], guest.name)}
                          style={{ cursor: 'pointer', minWidth: '120px' }}
                          disabled={isPending}
                        >
                          <option value="pending">Menunggu</option>
                          <option value="approved">Disetujui</option>
                          <option value="used">Sudah Digunakan</option>
                          <option value="expired">Kadaluarsa</option>
                        </select>
                      </td>
                      <td>
                        <button
                          onClick={() => handleDeleteGuest(guest.id, guest.name)}
                          className="btn btn-sm btn-outline-danger rounded-pill px-3"
                          disabled={isPending}
                        >
                          <i className="bi bi-trash3 me-1"></i>
                          Hapus
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Demo Info */}
          <div className="alert alert-info mt-4">
            <i className="bi bi-info-circle-fill me-2"></i>
            <strong>Demo Optimistic UI:</strong> Coba hapus atau ubah status tamu. UI akan berubah INSTAN tanpa menunggu server!
            {isPending && <span className="badge bg-info ms-2">Loading indicator aktif</span>}
          </div>
        </div>
      </div>
    </div>
  );
}