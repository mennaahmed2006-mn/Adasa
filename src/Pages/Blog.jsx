
import { useState } from "react";
import { Link } from "react-router-dom";
import data from "../Data/posts.json";

export default function Blog() {
    var posts = data.posts;
    var perPage = 6;

    const [page, setPage] = useState(1);
    const [category, setCategory] = useState("جميع المقالات");
    const [search, setSearch] = useState("");
    const [view, setView] = useState("grid");

    var categories = [
        "جميع المقالات",
        "إضاءة",
        "بورتريه",
        "مناظر طبيعية",
        "تقنيات",
        "معدات"
    ];


    var filteredPosts = [];

    for (var i = 0; i < posts.length; i++) {
        var matchesCategory =
            category === "جميع المقالات" ||
            posts[i].category === category;

        var matchesSearch =
            posts[i].title.toLowerCase().includes(search.toLowerCase()) ||
            posts[i].excerpt.toLowerCase().includes(search.toLowerCase());

        if (matchesCategory && matchesSearch) {
            filteredPosts.push(posts[i]);
        }
    }


    var totalPages = Math.ceil(filteredPosts.length / perPage);
    var start = (page - 1) * perPage;
    var visiblePosts = filteredPosts.slice(start, start + perPage);
    var pageNumbers = [];
    for (var j = 1; j <= totalPages; j++) {
        pageNumbers.push(j);
    }

    function changePage(n) {
        setPage(n);
        window.scrollTo(0, 0);
    }

    function getPageClass(n) {
        if (page === n) {
            return "active";
        } else {
            return "";
        }
    }

    function changeCategory(value) {
        setCategory(value);
        setPage(1);
    }

    function changeSearch(value) {
        setSearch(value);
        setPage(1);
    }

    return (
        <>

            <section className="hero hero--sm">
                <div className="container-xl">
                    <div className="badge-pill">
                        <span className="dot"></span>
                        <i className="bi bi-newspaper"></i>
                        مدونتنا
                    </div>

                    <h1 className="hero__title">
                        استكشف <span className="text-amber-grad">مقالاتنا</span>
                    </h1>

                    <p className="hero__lead">
                        اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container-xl">


                    <div className="blog-toolbar">

                        <div className="blog-categories">

                            {categories.map(function (item) {
                                return (
                                    <button
                                        key={item}
                                        className={
                                            category === item
                                                ? "blog-category active"
                                                : "blog-category"
                                        }
                                        onClick={function () {
                                            changeCategory(item);
                                        }}
                                    >
                                        {item}
                                    </button>
                                );
                            })}

                        </div>

                        <div className="blog-search">
                            <input
                                type="text"
                                placeholder="ابحث في المقالات..."
                                value={search}
                                onChange={function (e) {
                                    changeSearch(e.target.value);
                                }}
                            />

                            <i className="bi bi-search"></i>
                        </div>

                    </div>


                    <div className="blog-summary">

                        <div className="blog-view-toggle">

                            <button
                                className={view === "list" ? "active" : ""}
                                onClick={function () {
                                    setView("list");
                                }}
                            >
                                <i className="bi bi-list"></i>
                            </button>

                            <button
                                className={view === "grid" ? "active" : ""}
                                onClick={function () {
                                    setView("grid");
                                }}
                            >
                                <i className="bi bi-grid"></i>
                            </button>

                        </div>

                        <p className="text-muted-2 mb-0">
                            عرض <strong>{filteredPosts.length}</strong> مقالات
                        </p>

                    </div>

                    <div className="row g-4">

                        {visiblePosts.map(function (post) {
                            return (
                                <div
                                    className={
                                        view === "grid"
                                            ? "col-12 col-md-6 col-lg-4"
                                            : "col-12"
                                    }
                                    key={post.id}
                                >

                                    <Link
                                        to={"/blog/" + post.slug}
                                        className="post-card"
                                    >

                                        <div className="post-card__media">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                            />
                                            <span className="post-card__tag">
                                                {post.category}
                                            </span>
                                        </div>

                                        <div className="post-card__body">

                                            <div className="post-card__meta">
                                                <span>{post.date}</span>
                                                <span>{post.readTime}</span>
                                            </div>

                                            <h3 className="post-card__title">
                                                {post.title}
                                            </h3>

                                            <p className="post-card__excerpt">
                                                {post.excerpt}
                                            </p>

                                            <div className="post-card__foot">

                                                <div className="mini-author">

                                                    <div className="mini-author__avatar">
                                                        <img
                                                            src={post.author.avatar}
                                                            alt={post.author.name}
                                                        />
                                                    </div>

                                                    <div className="mini-author__name">
                                                        {post.author.name}
                                                    </div>

                                                </div>

                                                <span className="round-go">
                                                    <i className="bi bi-chevron-left"></i>
                                                </span>

                                            </div>

                                        </div>

                                    </Link>

                                </div>
                            );
                        })}

                    </div>

                    {filteredPosts.length === 0 && (
                        <p className="text-center text-muted-2 mt-5">
                            لا توجد مقالات مطابقة لبحثك.
                        </p>
                    )}


                    {totalPages > 1 && (

                        <div className="pager mt-5">

                            <a
                                href="#"
                                onClick={function (e) {
                                    e.preventDefault();

                                    if (page > 1) {
                                        changePage(page - 1);
                                    }
                                }}
                            >
                                <i className="bi bi-chevron-right"></i>
                            </a>

                            {pageNumbers.map(function (n) {
                                return (
                                    <a
                                        href="#"
                                        key={n}
                                        className={getPageClass(n)}
                                        onClick={function (e) {
                                            e.preventDefault();
                                            changePage(n);
                                        }}
                                    >
                                        {n}
                                    </a>
                                );
                            })}

                            <a
                                href="#"
                                onClick={function (e) {
                                    e.preventDefault();

                                    if (page < totalPages) {
                                        changePage(page + 1);
                                    }
                                }}
                            >
                                <i className="bi bi-chevron-left"></i>
                            </a>

                        </div>

                    )}

                    {totalPages > 0 && (
                        <p className="text-center text-muted-2 mt-3">
                            صفحة {page} من {totalPages}
                        </p>
                    )}

                </div>
            </section>

        </>
    );
}
