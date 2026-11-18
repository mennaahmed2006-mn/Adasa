
import { Link } from "react-router-dom";
import mohamedeali from "../Assest/images/mohamedali.png";
import SKY from "../Assest/images/SKY.jpg";
import tarek from "../Assest/images/tarek.png";
import mountain from "../Assest/images/mountain.png";
import ibrahim from "../Assest/images/ibrahim.png";
import data from "../Data/posts.json";

export default function Home() {
    var categories = data.categories;
    var posts = data.posts;

    var categoryIcons = {
        "إضاءة": "fa-solid fa-sun",
        "بورتريه": "fa-solid fa-user",
        "مناظر طبيعية": "fa-solid fa-mountain-sun",
        "تقنيات": "fa-solid fa-sliders",
        "معدات": "fa-solid fa-camera"
    };

    function getCount(name) {
        var matched = posts.filter(function (p) {
            return p.category === name;
        });
        return matched.length;
    }

    

    return (
        <main>

            <section className="hero">
                <div className="container-xl">

                    <div className="badge-pill">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        مرحباً بك في عدسة
                    </div>

                    <h1 className="hero__title">
                        اكتشف <span className="text-orange">فن</span>
                        <br />
                        التصوير الفوتوغرافي
                    </h1>

                    <p className="hero__lead">
                        انغمس في أسرار المحترفين ونصائح عملية
                        لتطوير مهاراتك في التصوير.
                    </p>

                    <div className="d-flex justify-content-center gap-3 flex-wrap mb-5">

                        <Link to="/blog" className="btn-brand">
                            استكشف المقالات
                            <i className="bi bi-arrow-left"></i>
                        </Link>

                        <Link to="/about" className="btn-ghost">
                            اعرف المزيد
                            <i className="bi bi-arrow-up-left"></i>
                        </Link>

                    </div>

                    <div className="d-flex justify-content-center gap-3 flex-wrap">

                        <div className="stat-card">
                            <i className="bi bi-file-earmark-text"></i>
                            <div className="stat-card__num">{posts.length}</div>
                            <div className="stat-card__label">مقالة</div>
                        </div>

                        <div className="stat-card">
                            <i className="bi bi-people"></i>
                            <div className="stat-card__num">+10ألف</div>
                            <div className="stat-card__label">قارئ</div>
                        </div>

                        <div className="stat-card">
                            <i className="bi bi-grid"></i>
                            <div className="stat-card__num">{categories.length}</div>
                            <div className="stat-card__label">تصنيفات</div>
                        </div>

                        <div className="stat-card">
                            <i className="bi bi-pen"></i>
                            <div className="stat-card__num">{posts.length}</div>
                            <div className="stat-card__label">كاتب</div>
                        </div>

                    </div>

                </div>
            </section>


            <section className="section">
                <div className="container-xl">

                    <div className="mb-5">

                        <div className="badge-pill mb-3">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            مميز
                        </div>

                        <h2 className="section-title">
                            مقالات مختارة
                        </h2>

                        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">

                            <p className="section-sub mb-0">
                                محتوى منتقى لبدء رحلة تعلمك
                            </p>

                            <Link to="/blog" className="btn-ghost">
                                عرض الكل
                                <i className="bi bi-chevron-left"></i>
                            </Link>

                        </div>
                    </div>

                    <div className="d-flex flex-column gap-4">

            
                        <Link to="/blog/mastering-golden-hour-photography" className="featured-card text-decoration-none">

                            <div className="featured-card__media">
                                <img src={SKY} alt="sky" />
                                <span className="featured-card__flag">
                                    مميز
                                </span>
                            </div>

                            <div className="featured-card__body">

                                <div className="featured-card__meta">
                                    <span className="cat-tag">إضاءة</span>

                                    <span>
                                        <i className="bi bi-clock"></i>
                                        8 دقائق للقراءة
                                    </span>
                                </div>

                                <h3 className="featured-card__title">
                                    إتقان تصوير الساعة الذهبية: دليل شامل
                                </h3>

                                <p className="featured-card__excerpt">
                                    تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية
                                    مع نصائح احترافية حول الإضاءة والتكوين.
                                </p>

                                <div className="featured-card__foot">

                                    <div className="mini-author">
                                        <div className="mini-author__avatar">
                                            <img src={mohamedeali} alt="mohamedeali" />
                                        </div>

                                        <div>
                                            <div className="mini-author__name">
                                                سالم أحمد
                                            </div>

                                            <div className="mini-author__sub">
                                                15 يناير 2026
                                            </div>
                                        </div>
                                    </div>

                                    <span className="featured-card__more">
                                        اقرأ المقال
                                        <i className="bi bi-arrow-left me-2"></i>
                                    </span>

                                </div>
                            </div>
                        </Link>

        
                        <Link to="/blog/portrait-photography-secrets" className="featured-card text-decoration-none">

                            <div className="featured-card__media">
                                <img src={mohamedeali} alt="تصوير بورتريه" />
                                <span className="featured-card__flag">
                                    مميز
                                </span>
                            </div>

                            <div className="featured-card__body">

                                <div className="featured-card__meta">
                                    <span className="cat-tag">بورتريه</span>

                                    <span>
                                        <i className="bi bi-clock"></i>
                                        6 دقائق للقراءة
                                    </span>
                                </div>

                                <h3 className="featured-card__title">
                                    أسرار تصوير البورتريه: كيف تلتقط روح الشخصية
                                </h3>

                                <p className="featured-card__excerpt">
                                    اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية
                                    تكشف عن شخصية الموضوع الحقيقية.
                                </p>

                                <div className="featured-card__foot">

                                    <div className="mini-author">
                                        <div className="mini-author__avatar">
                                            <img src={tarek} alt="محمد علي" />
                                        </div>

                                        <div>
                                            <div className="mini-author__name">
                                                محمد علي
                                            </div>

                                            <div className="mini-author__sub">
                                                12 يناير 2026
                                            </div>
                                        </div>
                                    </div>

                                    <span className="featured-card__more">
                                        اقرأ المقال
                                        <i className="bi bi-arrow-left me-2"></i>
                                    </span>

                                </div>
                            </div>
                        </Link>


                
                        <Link to="/blog/landscape-photography-guide" className="featured-card text-decoration-none">

                            <div className="featured-card__media">
                                <img src={mountain} alt="تصوير المناظر الطبيعية" />
                                <span className="featured-card__flag">
                                    مميز
                                </span>
                            </div>

                            <div className="featured-card__body">

                                <div className="featured-card__meta">
                                    <span className="cat-tag">مناظر طبيعية</span>

                                    <span>
                                        <i className="bi bi-clock"></i>
                                        10 دقائق للقراءة
                                    </span>
                                </div>

                                <h3 className="featured-card__title">
                                    دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف
                                </h3>

                                <p className="featured-card__excerpt">
                                    استكشف تقنيات تصوير المناظر الطبيعية الخلابة وكيفية التقاط جمال الطبيعة بعدستك.
                                </p>

                                <div className="featured-card__foot">

                                    <div className="mini-author">
                                        <div className="mini-author__avatar">
                                            <img src={ibrahim} alt="إبراهيم حسن" />
                                        </div>

                                        <div>
                                            <div className="mini-author__name">
                                                إبراهيم حسن
                                            </div>

                                            <div className="mini-author__sub">
                                                10 يناير 2026
                                            </div>
                                        </div>
                                    </div>

                                    <span className="featured-card__more">
                                        اقرأ المقال
                                        <i className="bi bi-arrow-left me-2"></i>
                                    </span>

                                </div>
                            </div>
                        </Link>


                    </div>
                </div>
            </section>


            <section className="section section--alt">
                <div className="container-xl">

                    <div className="text-center mb-5">

                        <div className="badge-pill">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            التصنيفات
                        </div>

                        <h2 className="section-title">
                            استكشف حسب الموضوع
                        </h2>

                        <p className="section-sub">
                            اكتشف الموضوعات التي تهمك وتعرف على المزيد من أسرار التصوير.
                        </p>

                    </div>

                    <div className="row g-4 ">

                        {categories.map(function (cat) {
                            return (
                                <div className="col-6 col-lg-3" key={cat.name}>
                                    <Link to={"/blog?category=" + cat.name} className="cat-card">
                                        <div className="cat-card__icon">
                                            <i className={categoryIcons[cat.name] || "fa-solid fa-tag"}></i>
                                        </div>
                                        <h3 className="cat-card__name">{cat.name}</h3>
                                        <p className="cat-card__count">{getCount(cat.name)} مقالة</p>
                                    </Link>
                                </div>
                            );
                        })}

                    </div>

                </div>
            </section>


            <section className="newsletter">
                <div className="container-xl">

                    <div className="newsletter-card">

                        <div className="newsletter-card__icon">
                            <i className="bi bi-envelope-paper"></i>
                        </div>

                        <h2>
                            اشترك في نشرتنا
                            <span className="text-orange"> الإخبارية</span>
                        </h2>

                        {/* Email Form */}
                        <form className="newsletter-form">
                            <input
                                type="email"
                                className="form-dark"
                                placeholder="أدخل بريدك الإلكتروني"
                                required
                            />

                            <button type="submit" className="btn-brand">
                                اشترك الآن
                                <i className="bi bi-arrow-left"></i>
                            </button>
                        </form>

                        {/* Community Info */}
                        <div className="newsletter-community">

                            <div className="avatar-stack">
                                <img src={mohamedeali} alt="محمد علي" />
                                <img src={tarek} alt="إبراهيم حسن" />
                                <img src={SKY} alt="سالم أحمد" />
                            </div>

                            <span>
                                انضم لـ <strong>+10,000</strong> مصور
                            </span>

                            <span className="newsletter-separator">•</span>

                            <span>بدون إزعاج</span>

                            <span className="newsletter-separator">•</span>

                            <span>إلغاء الاشتراك في أي وقت</span>

                        </div>

                    </div>

                </div>
            </section>

        </main>
    );
}
