<%@ page contentType="text/html;charset=utf-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>

<html>
    <body id="page-top">
    <!-- Header-->
    <header class="masthead d-flex align-items-center"></header>
    <!-- shop-->
    <section class="shop"></section>
    <!-- Portfolio-->
    <section class="content-section" id="portfolio">
        <div class="container px-4 px-lg-5">
            <div class="row gx-0">
                <div class="col-lg-6">
                    <a class="portfolio-item" href="#!">
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
    <!-- Map-->
    <div class="map" id="map"></div>
    <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=95169a370f842e662fbc37c0039255fb"></script>
    <script type="text/javascript">
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(37.525373437461056, 127.0460883143023),
            level: 4
        };

        const map = new kakao.maps.Map(container, options);
        const markerPosition  = new kakao.maps.LatLng(37.525373437461056, 127.0460883143023);
        // 마커를 생성합니다
        const marker = new kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map);

        const iwContent = '<div style="padding:5px;">미장원바이태현 <br><a href="https://map.kakao.com/link/map/미장원바이태현,37.525373437461056, 127.0460883143023" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/미장원바이태현,37.525373437461056, 127.0460883143023" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
            iwPosition = new kakao.maps.LatLng(37.525373437461056, 127.0460883143023); //인포윈도우 표시 위치입니다

        // 인포윈도우를 생성합니다
        const infowindow = new kakao.maps.InfoWindow({
            position : iwPosition,
            content : iwContent
        });

        // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
        infowindow.open(map, marker);

    </script>
    </body>
</html>