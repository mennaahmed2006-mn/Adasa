
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../Data/posts.json";
import NotFound from "./NotFound";

function parseContent(text) {
    var parts = text.split("\n\n");
    var intro = [];
    var sections = [];

    for (var i = 0; i < parts.length; i++) {
        var part = parts[i];

        if (part.indexOf("## ") === 0) {
            sections.push({ title: part.replace("## ", ""), paragraphs: [] });
        } else if (sections.length === 0) {
            intro.push(part);
        } else {
            sections[sections.length - 1].paragraphs.push(part);
        }
    }

    return { intro: intro, sections: sections };
}

export default function BlogDetails() {
    var params = useParams();
    var slug = params.slug;

    useEffect(function () {
        window.scrollTo(0, 0);
    }, [slug]);

    var post = data.posts.find(function (item) {
        return item.slug === slug;
    });

    if (!post) {
        return (
            <NotFound />
        );
    }

    var parsed = parseContent(post.content);
    var pageUrl = encodeURIComponent(window.location.href);
    var shareText = encodeURIComponent(post.title);

    function copyLink() {
        navigator.clipboard.writeText(window.location.href);
        alert("تم نسخ الرابط");
    }

    return (
        <>
            <section
                className="article-hero"
                style={{ backgroundImage: `url(${post.image})` }}
            >
                <div className="container-xl">
                    <div className="crumb">
                        <Link to="/"><i className="bi bi-house-fill"></i></Link>
                        <i className="bi bi-chevron-left sep"></i>
                        <Link to="/blog">المدونة</Link>
                        <i className="bi bi-chevron-left sep"></i>
                        <span className="current">{post.category}</span>
                    </div>

                    <div>
                        <div className="article-meta">
                            <span className="cat-tag cat-tag--solid">{post.category}</span>
                            <span><i className="bi bi-calendar3"></i> {post.date}</span>
                            <span><i className="bi bi-clock"></i> {post.readTime}</span>
                        </div>

                        <h1>{post.title}</h1>

                        <div className="author-chip">
                            <img src={post.author.avatar} alt={post.author.name} />
                            <div>
                                <strong>{post.author.name}</strong>
                                <span>{post.author.role}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container-xl">
                    <div className="row g-4">

                        <div className="col-12 col-lg-8">
                            <div className="lead-box">{post.excerpt}</div>

                            <div className="article-body">
                                {parsed.intro.map(function (p, index) {
                                    return <p key={index}>{p}</p>;
                                })}

                                {parsed.sections.map(function (section, index) {
                                    return (
                                        <div key={index}>
                                            <h2 id={`section-${index}`}>
                                                <span className="h2-icon">
                                                    <i className="bi bi-camera-fill"></i>
                                                </span>
                                                {section.title}
                                            </h2>

                                            {section.paragraphs.map(function (p, i) {
                                                return <p key={i}>{p}</p>;
                                            })}
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="box-card">
                                <div className="box-card__head mb-3">
                                    <span className="h2-icon"><i className="bi bi-tags-fill"></i></span>
                                    الوسوم
                                </div>
                                <div className="d-flex flex-wrap gap-2">
                                    {post.tags.map(function (tag, index) {
                                        return <span className="tag-pill" key={index}>#{tag}</span>;
                                    })}
                                </div>
                            </div>

                            <div className="box-card d-flex flex-wrap justify-content-between align-items-center gap-3">
                                <div className="box-card__head">
                                    <span className="h2-icon"><i className="bi bi-share-fill"></i></span>
                                    شارك المقال
                                </div>
                                <div className="d-flex gap-2">
                                    <a className="share-btn" target="_blank" rel="noreferrer"
                                        href={`https://twitter.com/intent/tweet?url=${pageUrl}&text=${shareText}`}>
                                        <i className="bi bi-twitter-x"></i>
                                    </a>
                                    <a className="share-btn" target="_blank" rel="noreferrer"
                                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`}>
                                        <i className="bi bi-linkedin"></i>
                                    </a>
                                    <a className="share-btn" target="_blank" rel="noreferrer"
                                        href={`https://wa.me/?text=${shareText}%20${pageUrl}`}>
                                        <i className="bi bi-whatsapp"></i>
                                    </a>
                                    <button className="share-btn" onClick={copyLink}>
                                        <i className="bi bi-link-45deg"></i>
                                    </button>
                                </div>
                            </div>


                            <div className="box-card author-box">
                                <img src={post.author.avatar} alt={post.author.name} />
                                <div>
                                    <div className="author-box__label">كاتب المقال</div>
                                    <h3>{post.author.name}</h3>
                                    <div className="text-muted-2 mb-2">{post.author.role}</div>
                                    <p className="text-muted-2 mb-0">
                                        {post.author.role} شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-4">
                            <div className="side-sticky">

                                <div className="side-card">
                                    <div className="side-card__head">
                                        <span className="h2-icon"><i className="bi bi-list-ul"></i></span>
                                        محتويات المقال
                                    </div>
                                    <ul className="toc">
                                        {parsed.sections.map(function (section, index) {
                                            return (
                                                <li key={index}>
                                                    <a href={`#section-${index}`}>
                                                        <span className="toc__num">{index + 1}</span>
                                                        {section.title}
                                                    </a>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>

                                <div className="side-card">
                                    <div className="row g-2">
                                        <div className="col-6">
                                            <div className="info-box">
                                                <i className="bi bi-clock"></i>
                                                <strong>{post.readTime}</strong>
                                                <span>وقت القراءة</span>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="info-box">
                                                <i className="bi bi-calendar3"></i>
                                                <strong>{post.date}</strong>
                                                <span>تاريخ النشر</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="side-cta">
                                    <div className="side-cta__icon"><i className="bi bi-envelope-fill"></i></div>
                                    <h5 className="fw-bold">لا تفوّت جديدنا</h5>
                                    <p className="text-muted-2 small">اشترك للحصول على أحدث المقالات</p>
                                    <Link to="/blog" className="btn-brand btn-brand--block">تصفح المزيد</Link>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}