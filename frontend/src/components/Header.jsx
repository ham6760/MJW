import React from "react";
import { Link } from "react-router-dom";
import DropdownMenu from './DropdownMenu';

const menu = [
    {
        key: "intro",
        label: "Intro",
        icon: "/resources/img/menu/gn_btn1.png",
        items: [
            { to: "/intro", label: "인사말 | Greeting | 问候语" },
            { to: "/shop", label: "샵 | Shop | 店" },
            { to: "/location", label: "오시는길 | Location | 位置" }
        ]
    },
    {
        key: "hair",
        label: "Hair",
        icon: "/resources/img/menu/gn_btn2.png",
        items: [
            { to: "#", label: "디자이너 | Designer | 设计师" },
            { to: "#", label: "트렌드 | Trend | 潮流" },
            { to: "#", label: "갤러리 | Gallery | 图库" }
        ]
    },
    {
        key: "makeup",
        label: "Makeup",
        icon: "/resources/img/menu/gn_btn3.png",
        items: [
            { to: "#", label: "디자이너 | Designer | 设计师" },
            { to: "#", label: "트렌드 | Trend | 潮流" },
            { to: "#", label: "갤러리 | Gallery | 图库" }
        ]
    },
    {
        key: "wedding",
        label: "Wedding",
        icon: "/resources/img/menu/gn_btn4.png",
        items: [
            { to: "#", label: "트렌드 | Trend | 潮流" },
            { to: "#", label: "갤러리 | Gallery | 图库" }
        ]
    },
    {
        key: "star",
        label: "Star",
        icon: "/resources/img/menu/gn_btn5.png",
        items: [
            { to: "#", label: "매거진 | Magazine | 杂志" },
            { to: "#", label: "뮤비X앨범 | Music video | 音乐视频" },
            { to: "#", label: "광고 | Advertisement | 广告" }
        ]
    },
    {
        key: "nailart",
        label: "Nailart",
        icon: "/resources/img/menu/gn_btn6.png",
        items: [
            { to: "#", label: "디자이너 | Designer | 设计师" },
            { to: "#", label: "트렌드 | Trend | 潮流" },
            { to: "#", label: "갤러리 | Gallery | 图库" }
        ]
    },
    {
        key: "csc",
        label: "Csc",
        icon: "/resources/img/menu/gn_btn7.png",
        items: [
            { to: "#", label: "공지사항 | Notice | 通知" },
            { to: "#", label: "채용안내 | Recruit | 招聘" }
        ]
    }
];

const Header = () => {
    return (
        <div className="header-wrap">
            <nav className="navbar navbar-expand-lg navbar-white bg-gray-70">
                <div className="container px-6">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <Link className="navbar-brand" to="/">
                            <img src="/resources/img/main/logo.png" alt="로고"/>
                        </Link>
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            {menu.map((m) => (
                                <DropdownMenu key={m.key} icon={m.icon} label={m.label} items={m.items}/>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="cs-tel">
                <img src="/resources/img/icon_tel.png" alt="전화 아이콘"/>
                <h3 className="mb-5">
                    <em style={{color: "#ffffff"}}>전화예약 02-517-0792</em>
                </h3>
            </div>
        </div>
    );
};

export default Header;
