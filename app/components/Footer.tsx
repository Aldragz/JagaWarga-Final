export default function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <h5 className="fw-bold mb-3">
              <i className="bi bi-shield-lock-fill text-primary me-2"></i>
              JagaWarga
            </h5>
            <p className="text-white-50">
              Menciptakan lingkungan yang aman dan nyaman melalui teknologi keamanan terintegrasi.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white-50"><i className="bi bi-facebook fs-5"></i></a>
              <a href="#" className="text-white-50"><i className="bi bi-twitter fs-5"></i></a>
              <a href="#" className="text-white-50"><i className="bi bi-instagram fs-5"></i></a>
              <a href="#" className="text-white-50"><i className="bi bi-linkedin fs-5"></i></a>
            </div>
          </div>
          <div className="col-lg-2">
            <h6 className="fw-bold mb-3">Produk</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Fitur</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Harga</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Demo</a></li>
            </ul>
          </div>
          <div className="col-lg-2">
            <h6 className="fw-bold mb-3">Perusahaan</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Tentang</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Karir</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Blog</a></li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h6 className="fw-bold mb-3">Kontak</h6>
            <ul className="list-unstyled">
              <li className="mb-2 text-white-50"><i className="bi bi-envelope me-2"></i>info@jagawarga.com</li>
              <li className="mb-2 text-white-50"><i className="bi bi-telephone me-2"></i>(021) 1234-5678</li>
              <li className="mb-2 text-white-50"><i className="bi bi-geo-alt me-2"></i>Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>
        <hr className="my-4 bg-white-50" />
        <div className="text-center text-white-50">
          <small>&copy; 2024 JagaWarga. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}