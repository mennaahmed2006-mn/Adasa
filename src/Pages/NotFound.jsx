import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <section className="hero notfound">
            <div className="container-xl">

                <div className="notfound__num">404</div>

                <div className="notfound__face">
                    <i className="bi bi-emoji-frown"></i>
                    <span className="notfound__dot notfound__dot--orange"></span>
                    <span className="notfound__dot notfound__dot--amber"></span>
                </div>

                <h1 className="notfound__title">عفواً! الصفحة غير موجودة</h1>

                <p className="hero__lead">
                    الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
                    دعنا نعيدك إلى المسار الصحيح.
                </p>

                <div className="d-flex justify-content-center gap-3 flex-wrap">
                    <Link to="/" className="btn-brand">
                        <i className="bi bi-house"></i>
                        الذهاب للرئيسية
                    </Link>

                    <Link to="/blog" className="btn-ghost">
                        <i className="bi bi-newspaper"></i>
                        تصفح المقالات
                    </Link>
                </div>

            </div>
        </section>
    );
}