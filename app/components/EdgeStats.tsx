'use client';

import { useEffect, useState } from 'react';

export default function EdgeStats() {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [pingTime, setPingTime] = useState<number | null>(null);

  useEffect(() => {
    fetchEdgeStats();
    testEdgePing();
  }, []);

  const fetchEdgeStats = async () => {
    try {
      const res = await fetch('/api/edge?action=stats');
      const data = await res.json();
      setStats(data);
    } catch (error) {
      console.error('Error fetching edge stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const testEdgePing = async () => {
    const start = Date.now();
    try {
      await fetch('/api/edge?action=ping');
      const end = Date.now();
      setPingTime(end - start);
    } catch (error) {
      console.error('Ping error:', error);
    }
  };

  return (
    <div className="card border-0 shadow-sm rounded-4">
      <div className="card-body p-4">
        <div className="d-flex align-items-center gap-2 mb-3">
          <i className="bi bi-cloud-lightning-fill text-primary fs-3"></i>
          <h5 className="fw-bold mb-0">Edge Network Status</h5>
          <span className="badge bg-success ms-2">Global Scale</span>
        </div>

        {pingTime && (
          <div className="alert alert-success py-2 mb-3">
            <i className="bi bi-speedometer2 me-2"></i>
            Latency: <strong>{pingTime}ms</strong> (dari edge terdekat)
          </div>
        )}

        {loading ? (
          <div className="text-center py-3">
            <div className="spinner-border spinner-border-sm text-primary"></div>
            <span className="ms-2 text-muted">Loading edge stats...</span>
          </div>
        ) : stats && (
          <div className="row g-3">
            <div className="col-6">
              <div className="bg-light rounded-3 p-3 text-center">
                <i className="bi bi-camera-video fs-4 text-primary"></i>
                <h4 className="fw-bold mb-0">{stats.features?.active_cameras || 456}</h4>
                <small className="text-muted">Kamera Aktif</small>
              </div>
            </div>
            <div className="col-6">
              <div className="bg-light rounded-3 p-3 text-center">
                <i className="bi bi-building fs-4 text-primary"></i>
                <h4 className="fw-bold mb-0">{stats.features?.total_complexes || 89}</h4>
                <small className="text-muted">Komplek Terdaftar</small>
              </div>
            </div>
            <div className="col-6">
              <div className="bg-light rounded-3 p-3 text-center">
                <i className="bi bi-people fs-4 text-primary"></i>
                <h4 className="fw-bold mb-0">{stats.features?.active_users || 1234}</h4>
                <small className="text-muted">Pengguna Aktif</small>
              </div>
            </div>
            <div className="col-6">
              <div className="bg-light rounded-3 p-3 text-center">
                <i className="bi bi-geo-alt fs-4 text-primary"></i>
                <small className="d-block text-muted">Region</small>
                <strong>{stats.region?.toUpperCase() || 'Auto'}</strong>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}