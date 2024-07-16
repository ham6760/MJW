<%@ page contentType="text/html;charset=utf-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>

<html lang="ko">
    <body id="page-top">
    <div class="header-wrap">
        <nav class="navbar navbar-expand-lg navbar-white bg-gray">
            <div class="container px-5">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle-split" href="#" role="button">
                                <div class="image-container">
                                    <img class="image" src="<c:url value="/resources/img/menu/gn_btn1.png"/>" alt="미장원by태현 소개">
                                </div>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-end">
                                <li><a class="dropdown-item" href="blog-home.html">인사말<br/>Greeting | 问候语</a></li>
                                <li><a class="dropdown-item" href="blog-post.html">샵<br/>Shop | 店</a></li>
                                <li><a class="dropdown-item" href="blog-post.html">오시는길<br/>Location | 位置</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle-split" href="#" role="button">
                                <div class="image-container">
                                    <img class="image" src="<c:url value="/resources/img/menu/gn_btn2.png"/>" alt="헤어">
                                </div>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-end">
                                <li><a class="dropdown-item" href="blog-home.html">디자이너<br/>Designer | 设计师</a></li>
                                <li><a class="dropdown-item" href="blog-home.html">트렌드<br/>Trend | 潮流</a></li>
                                <li><a class="dropdown-item" href="blog-home.html">갤러리<br/>Gallery | 图库</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle-split" href="#" role="button">
                                <div class="image-container">
                                    <img class="image" src="<c:url value="/resources/img/menu/gn_btn3.png"/>" alt="메이크업">
                                </div>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-end">
                                <li><a class="dropdown-item" href="blog-home.html">디자이너<br/>Designer | 设计师</a></li>
                                <li><a class="dropdown-item" href="blog-home.html">트렌드<br/>Trend | 潮流</a></li>
                                <li><a class="dropdown-item" href="blog-home.html">갤러리<br/>Gallery | 图库</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle-split" href="#" role="button">
                                <div class="image-container">
                                    <img class="image" src="<c:url value="/resources/img/menu/gn_btn4.png"/>" alt="웨딩">
                                </div>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-end">
                                <li><a class="dropdown-item" href="blog-home.html">트렌드<br/>Trend | 潮流</a></li>
                                <li><a class="dropdown-item" href="blog-home.html">갤러리<br/>Gallery | 图库</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle-split" href="#" role="button">
                                <div class="image-container">
                                    <img class="image" src="<c:url value="/resources/img/menu/gn_btn5.png"/>" alt="연예인">
                                </div>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-end">
                                <li><a class="dropdown-item" href="blog-home.html">매거진<br/>Magazine | 杂志</a></li>
                                <li><a class="dropdown-item" href="blog-home.html">뮤비X앨범<br/>Music video | 音乐视频</a></li>
                                <li><a class="dropdown-item" href="blog-home.html">광고<br/>Advertisement | 广告</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle-split" href="#" role="button">
                                <div class="image-container">
                                    <img class="image" src="<c:url value="/resources/img/menu/gn_btn6.png"/>" alt="네일아트">
                                </div>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-end">
                                <li><a class="dropdown-item" href="blog-home.html">디자이너<br/>Designer | 设计师</a></li>
                                <li><a class="dropdown-item" href="blog-home.html">트렌드<br/>Trend | 潮流</a></li>
                                <li><a class="dropdown-item" href="blog-home.html">갤러리<br/>Gallery | 图库</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle-split" id="navbarDropdownPortfolio" href="#">
                                <div class="image-container">
                                    <img class="image" src="<c:url value="/resources/img/menu/gn_btn7.png"/>" alt="고객센터">
                                </div>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-end">
                                <li><a class="dropdown-item" href="portfolio-overview.html">공지사항<br/>Notice | 通知</a></li>
                                <li><a class="dropdown-item" href="portfolio-overview.html">채용안내<br/>Recruit l 招聘</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    <div class="mo-header-wrap">
        <div class="mo-header">
            <div class="mo-header-inner">
                <!-- mo-navbar -->
                <div class="mo-navbar">
                    <div id="nav-icon1" class="mo-navbar-btn mo-btn-open">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <!-- mo-navbar-container -->
                <div class="mo-navbar-container">
                    <!-- <div class="mo-navbar-fill "></div> -->
                    <nav class="mo-navbar-gnb accordion" id="navbar">
                        <ul class="sidebar-ul">
                            <li>
                                <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#intro" aria-expanded="false" aria-controls="intro">
                                    Intro
                                    <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                </a>
                                <div class="collapse" id="intro" aria-labelledby="headingOne" data-bs-parent="#navbar">
                                    <nav class="sb-sidenav-menu-nested nav accordion">
                                        <a class="nav-link" href="#">인사말 | Greeting | 问候语</a>
                                        <a class="nav-link" href="#">샵 | Shop | 店</a>
                                        <a class="nav-link" href="#">오시는길 | Location | 位置</a>
                                    </nav>
                                </div>
                            </li>
                            <li>
                                <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#hair" aria-expanded="false" aria-controls="hair">
                                    hair
                                    <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                </a>
                                <div class="collapse" id="hair" aria-labelledby="headingOne" data-bs-parent="#navbar">
                                    <nav class="sb-sidenav-menu-nested nav">
                                        <a class="nav-link" href="#">디자이너 | Designer | 设计师</a>
                                        <a class="nav-link" href="#">트렌드 | Trend | 潮流</a>
                                        <a class="nav-link" href="#">갤러리 | Gallery | 图库</a>
                                    </nav>
                                </div>
                            </li>
                            <li>
                                <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#makeup" aria-expanded="false" aria-controls="makeup">
                                    Makeup
                                    <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                </a>
                                <div class="collapse" id="makeup" aria-labelledby="headingOne" data-bs-parent="#navbar">
                                    <nav class="sb-sidenav-menu-nested nav">
                                        <a class="nav-link" href="#">디자이너 | Designer | 设计师</a>
                                        <a class="nav-link" href="#">트렌드 | Trend | 潮流</a>
                                        <a class="nav-link" href="#">갤러리 | Gallery | 图库</a>
                                    </nav>
                                </div>
                            </li>
                            <li>
                                <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#wedding" aria-expanded="false" aria-controls="wedding">
                                    Wedding
                                    <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                </a>
                                <div class="collapse" id="wedding" aria-labelledby="headingOne" data-bs-parent="#navbar">
                                    <nav class="sb-sidenav-menu-nested nav">
                                        <a class="nav-link" href="#">트렌드 | Trend | 潮流</a>
                                        <a class="nav-link" href="#">갤러리 | Gallery | 图库</a>
                                    </nav>
                                </div>
                            </li>
                            <li>
                                <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#star" aria-expanded="false" aria-controls="star">
                                    Star
                                    <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                </a>
                                <div class="collapse" id="star" aria-labelledby="headingOne" data-bs-parent="#navbar">
                                    <nav class="sb-sidenav-menu-nested nav">
                                        <a class="nav-link" href="#">매거진 | Magazine | 杂志</a>
                                        <a class="nav-link" href="#">뮤비X앨범 | Music video | 音乐视频</a>
                                        <a class="nav-link" href="#">광고 | Advertisement | 广告</a>
                                    </nav>
                                </div>
                            </li>
                            <li>
                                <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#nailart" aria-expanded="false" aria-controls="nailart">
                                    Nailart
                                    <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                </a>
                                <div class="collapse" id="nailart" aria-labelledby="headingOne" data-bs-parent="#navbar">
                                    <nav class="sb-sidenav-menu-nested nav">
                                        <a class="nav-link" href="#">디자이너 | Designer | 设计师</a>
                                        <a class="nav-link" href="#">트렌드 | Trend | 潮流</a>
                                        <a class="nav-link" href="#">갤러리 | Gallery | 图库</a>
                                    </nav>
                                </div>
                            </li>
                            <li>
                                <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#csc" aria-expanded="false" aria-controls="csc">
                                    CS Center
                                    <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                </a>
                                <div class="collapse" id="csc" aria-labelledby="headingOne" data-bs-parent="#navbar">
                                    <nav class="sb-sidenav-menu-nested nav">
                                        <a class="nav-link" href="#">공지사항 | Notice | 通知</a>
                                        <a class="nav-link" href="#">채용안내 | Recruit | 招聘</a>
                                    </nav>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <div class="cs-tel">
        <img src="<c:url value="/resources/img/icon_tel.png"/>"  alt="전화 아이콘"/>
        <h3 class="mb-5"><em style="color: #ffffff">전화예약 02-517-0792</em></h3>
    </div>
    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top"><i class="fas fa-angle-up"></i></a>
    </body>
</html>