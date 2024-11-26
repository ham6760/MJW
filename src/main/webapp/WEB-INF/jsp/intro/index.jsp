<%@ page contentType="text/html;charset=utf-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>

<html>
    <body id="page-top">
    <!-- Header-->
    <header class="masthead sub d-flex align-items-center"></header>
    <div class="sub_menu w33p">
        <div class="inner">
            <ul>
                <li class="cur"><strong><a href="#">인사말</a></strong></li>
                <li><strong><a href="#juno" onclick="location.href='/junohair/about/ceo'">샵</a></strong></li>
                <li><strong><a href="#juno" onclick="location.href='/junohair/about/location'">오시는 길</a></strong></li>
            </ul>
        </div>
    </div>
    <!-- shop-->
    <section class="page-section clearfix">
        <div class="container">
            <div class="intro">
                <img class="intro-img img-fluid mb-3 mb-lg-0 rounded" src="/resources/img/main/main_background2.jpg" alt="...">
                <div class="intro-text left-0 text-center bg-gray p-5 rounded">
                    <h2 class="section-heading mb-4">
                        <span class="section-heading-upper">미장원</span>
                        <span class="section-heading-lower">by 태현</span>
                    </h2>
                    <p class="mb-5">안녕하세요. 김태현 입니다.
                        국내 최고의 디자이너 팀과 함께 보다 업그레이드된 기술과 최상의 서비스로 고객님을 모시겠습니다.
                        언제나 초심을 잃지않고 최선을 다하겠습니다.</p>
                    <div class="intro-button mx-auto"><a class="btn btn-light btn-xl" href="#!">예약하기</a></div>
                </div>
            </div>
        </div>
    </section>
    <%--<section class="">
        안녕하세요. 김태현 입니다.
        국내 최고의 디자이너 팀과 함께 보다 업그레이드된 기술과 최상의 서비스로 고객님을 모시겠습니다.
        언제나 초심을 잃지않고 최선을 다하겠습니다.

        Hello. The Kimtaehyun.
        We will serve the customers with more technology and excellent service has been upgraded with the nation's top designers team.
        Always do our best without losing the original intention.

        大家好。The Kimtaehyun。
        我们将竭诚为客户提供更多的技术和优质的服务已经升级，国内顶级设计师团队。
        始终做到最好不失初衷。
    </section>--%>
    <!-- Portfolio-->
    <section class="content-section" id="portfolio">
        <div class="container px-4 px-lg-5">
            <div class="row gx-0">
                <div class="col-lg-6">
                    <a class="portfolio-item" href="<c:url value="/intro/index"/>">
                        <div class="caption">
                            <div class="caption-content">
                                <div class="container px-4 px-lg-5 text-center">
                                    <h1 class="mb-1 fs-2 text-nowrap">헤어</h1>
                                </div>
                            </div>
                        </div>
                        <img class="img-fluid" src="<c:url value="/resources/img/main/main_photo1.png"/>" alt="..." />
                    </a>
                </div>
                <div class="col-lg-6">
                    <a class="portfolio-item" href="#!">
                        <div class="caption">
                            <div class="caption-content">
                                <div class="container px-4 px-lg-5 text-center">
                                    <h1 class="mb-1 fs-2 text-nowrap">메이크업</h1>
                                </div>
                            </div>
                        </div>
                        <img class="img-fluid" src="<c:url value="/resources/img/main/main_photo1.png"/>" alt="..." />
                    </a>
                </div>
                <div class="col-lg-4">
                    <a class="portfolio-item" href="#!">
                        <div class="caption">
                            <div class="caption-content">
                                <div class="container px-4 px-lg-5 text-center">
                                    <h1 class="mb-1 fs-4 text-nowrap">웨딩</h1>
                                </div>
                            </div>
                        </div>
                        <img class="img-fluid" src="<c:url value="/resources/img/main/main_photo1.png"/>" alt="..." />
                    </a>
                </div>
                <div class="col-lg-4">
                    <a class="portfolio-item" href="#!">
                        <div class="caption">
                            <div class="caption-content">
                                <div class="container px-4 px-lg-5 text-center">
                                    <h1 class="mb-1 fs-4 text-nowrap">연예인</h1>
                                </div>
                            </div>
                        </div>
                        <img class="img-fluid" src="<c:url value="/resources/img/main/main_photo1.png"/>" alt="..." />
                    </a>
                </div>
                <div class="col-lg-4">
                    <a class="portfolio-item" href="#!">
                        <div class="caption">
                            <div class="caption-content">
                                <div class="container px-4 px-lg-5 text-center">
                                    <h1 class="mb-1 fs-4 text-nowrap">네일아트</h1>
                                </div>
                            </div>
                        </div>
                        <img class="img-fluid" src="<c:url value="/resources/img/main/main_photo1.png"/>" alt="..." />
                    </a>
                </div>
            </div>
        </div>
    </section>
    </body>
</html>