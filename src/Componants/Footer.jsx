
import { Link } from "react-router-dom";
import data from "../Data/posts.json";

export default function Footer() {
  var site = data.siteInfo;
  var categories = data.categories;

  return (
    <footer className="site-footer">
      <div className="container-xl">
        <div className="row g-4">

          {/* Adasa */}
          <div className="col-lg-4">
            <div className="d-flex align-items-center gap-3 mb-3">
              <div className="footer-brand__logo">{site.name.charAt(0)}</div>
              <h4 className="mb-0">{site.name}</h4>
            </div>

            <p className="footer-text">{site.description}</p>

            <div className="social-row mt-4">
              <a href={site.social.twitter} className="social-btn" target="_blank" rel="noreferrer" aria-label="Twitter">
                <i className="bi bi-twitter-x"></i>
              </a>

              <a href={site.social.github} className="social-btn" target="_blank" rel="noreferrer" aria-label="GitHub">
                <i className="bi bi-github"></i>
              </a>

              <a href={site.social.linkedin} className="social-btn" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>

              <a href={site.social.youtube} className="social-btn" target="_blank" rel="noreferrer" aria-label="YouTube">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="col-6 col-lg-2">
            <h5 className="footer-title">استكشف</h5>
            <ul className="footer-links">
              <li><Link to="/">الرئيسية</Link></li>
              <li><Link to="/blog">المدونة</Link></li>
              <li><Link to="/about">من نحن</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-6 col-lg-2">
            <h5 className="footer-title">التصنيفات</h5>
            <ul className="footer-links">
              {categories.map(function (cat) {
                return (
                  <li key={cat.name}>
                    <Link to={`/blog?category=${cat.name}`}>{cat.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-lg-4">
            <h5 className="footer-title">ابقَ على اطلاع</h5>

            <p className="footer-text mb-3">
              اشترك للحصول على أحدث المقالات والتحديثات.
            </p>

            <form
              className="footer-form"
              onSubmit={function (e) {
                e.preventDefault();
              }}
            >
              <input
                type="email"
                className="form-dark"
                placeholder="أدخل بريدك الإلكتروني"
                required
              />

              <button type="submit" className="btn-brand">
                اشتراك
                
              </button>
            </form>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">

          <p className="mb-0">
            © 2026 {site.name}. صُنعت بكل
            <i className="bi bi-heart-fill mx-1"></i>
            جميع الحقوق محفوظة.
          </p>

          <div>
            <Link to="/privacy">سياسة الخصوصية</Link>
            <Link to="/terms">شروط الخدمة</Link>
          </div>

        </div>
      </div>
    </footer>
  );
}