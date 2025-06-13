import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const menuData = [
    {
        key: "intro",
        label: "Intro",
        items: [
            { to: "/intro", label: "인사말 | Greeting | 问候语" },
            { to: "/shop", label: "샵 | Shop | 店" },
            { to: "/location", label: "오시는길 | Location | 位置" }
        ]
    },
    {
        key: "hair",
        label: "Hair",
        items: [
            { to: "#", label: "디자이너 | Designer | 设计师" },
            { to: "#", label: "트렌드 | Trend | 潮流" },
            { to: "#", label: "갤러리 | Gallery | 图库" }
        ]
    },
    {
        key: "makeup",
        label: "Makeup",
        items: [
            { to: "#", label: "디자이너 | Designer | 设计师" },
            { to: "#", label: "트렌드 | Trend | 潮流" },
            { to: "#", label: "갤러리 | Gallery | 图库" }
        ]
    },
    {
        key: "wedding",
        label: "Wedding",
        items: [
            { to: "#", label: "트렌드 | Trend | 潮流" },
            { to: "#", label: "갤러리 | Gallery | 图库" }
        ]
    },
    {
        key: "star",
        label: "Star",
        items: [
            { to: "#", label: "매거진 | Magazine | 杂志" },
            { to: "#", label: "뮤비X앨범 | Music video | 音乐视频" },
            { to: "#", label: "광고 | Advertisement | 广告" }
        ]
    },
    {
        key: "nailart",
        label: "Nailart",
        items: [
            { to: "#", label: "디자이너 | Designer | 设计师" },
            { to: "#", label: "트렌드 | Trend | 潮流" },
            { to: "#", label: "갤러리 | Gallery | 图库" }
        ]
    },
    {
        key: "csc",
        label: "Csc",
        items: [
            { to: "#", label: "공지사항 | Notice | 通知" },
            { to: "#", label: "채용안내 | Recruit | 招聘" }
        ]
    }
];

const MobileNav = () => {
    const [menuOpen, setMenuOpen] = useState(false); // 전체 메뉴 열림 여부

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="mo-header-wrap">
            <div className="mo-header">
                <div className="mo-header-inner">
                    {/* mo-navbar */}
                    <div className="mo-navbar">
                        <Link className="navbar-brand" to="/">
                            <img src="/resources/img/main/logo.png" alt="로고"/>
                        </Link>
                        <div id="nav-icon1" className={`mo-navbar-btn mo-btn-open ${menuOpen ? 'open' : ''}`}
                             onClick={toggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    {/* mo-navbar-container */}
                    <div className="mo-navbar-container"
                         style={{left: menuOpen ? '0%' : '-100%', transition: 'left 0.7s',}}>
                        <nav className="mo-navbar-gnb accordion" id="navbar">
                            <ul className="sidebar-ul">
                                {menuData.map((menu) => (
                                    <li key={menu.key}>
                                        <Link to="#" className="nav-link collapsed" data-bs-toggle="collapse" data-bs-target={`#${menu.key}`} aria-expanded="false" aria-controls={menu.key}> {menu.label}
                                            <div className="sb-sidenav-collapse-arrow">
                                                <i className="fas fa-angle-down"></i>
                                            </div>
                                        </Link>
                                        <div className="collapse" id={menu.key} data-bs-parent="#navbar">
                                            <nav className="sb-sidenav-menu-nested nav">
                                                {menu.items.map((item, index) => (
                                                    <Link className="nav-link" to={item.to} key={index}>
                                                        {item.label}
                                                    </Link>
                                                ))}
                                            </nav>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNav;
