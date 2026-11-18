
import {Link, NavLink } from "react-router-dom"

import logo from '../Assest/images/logo.png'

export default function Navbar() {
    function navActive(info) {
        if (info.isActive) {
            return "nav-pill-link active"
        } else {
            return "nav-pill-link"
        }
}
    return (
        <header className="site-nav">
        <div className="container-xl">

        <Link to="/" className="brand">
            <span className="brand__icon">
                <img src={logo} alt="عدسة" />
            </span>
            <span>
            <span className="brand__name">عدسة</span>
            <span className="brand__tag">عالم التصوير الفوتوغرافي</span>
            </span>
        </Link>

        <nav className="nav-pills-box">
            <NavLink to="/" end className={navActive}>الرئيسية</NavLink>
            <NavLink to="/blog" className={navActive}>المدونة</NavLink>
            <NavLink to="/about" className={navActive}>من نحن</NavLink>
        </nav>

        <div className="nav-actions">
            <Link to="/blog" className="btn-brand btn-brand--sm d-none d-md-inline-flex">ابدأ القراءة</Link>
            <button className="icon-btn"><i className="bi bi-search"></i></button>
        </div>

        </div>
    </header>
    )
}
