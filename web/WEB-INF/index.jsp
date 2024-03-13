<%--
  Created by IntelliJ IDEA.
  User: SRPOST
  Date: 2024-02-13
  Time: 오후 5:56
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<html>
<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>DJ</title>
    <meta content="" name="description">
    <meta content="" name="keywords">

    <!-- Favicons -->
    <link href="../resources/bootstrap/assets/img/favicon.png" rel="icon">
    <link href="../resources/bootstrap/assets/img/apple-touch-icon.png" rel="apple-touch-icon">

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

    <!-- Vendor CSS Files -->
    <link href="../resources/bootstrap/assets/vendor/aos/aos.css" rel="stylesheet">
    <link href="../resources/bootstrap/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="../resources/bootstrap/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
    <link href="../resources/bootstrap/assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
    <link href="../resources/bootstrap/assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
    <link href="../resources/bootstrap/assets/vendor/remixicon/remixicon.css" rel="stylesheet">
    <link href="../resources/bootstrap/assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

    <link rel="stylesheet" type="text/css" href="<c:url value="../resources/css/main.css"/>" />

    <!-- Template Main CSS File -->
    <link href="../resources/bootstrap/assets/css/style.css" rel="stylesheet">

    <!-- =======================================================
    * Template Name: Gp
    * Updated: Jan 29 2024 with Bootstrap v5.3.2
    * Template URL: https://bootstrapmade.com/gp-free-multipurpose-html-bootstrap-template/
    * Author: BootstrapMade.com
    * License: https://bootstrapmade.com/license/
    ======================================================== -->
</head>

<body>

<!-- ======= Header ======= -->
<header id="header" class="fixed-top ">
    <div class="container d-flex align-items-center justify-content-lg-between">

        <nav id="navbar" class="navbar order-last order-lg-0">
            <ul>
                <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
                <li><a class="nav-link scrollto" href="#about">About</a></li>
                <li><a class="nav-link scrollto" href="#services">Services</a></li>
                <li><a class="nav-link scrollto " href="#portfolio">Portfolio</a></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
        </nav><!-- .navbar -->

    </div>
</header><!-- End Header -->

<!-- ======= Hero Section ======= -->
<section id="hero" class="d-flex align-items-center justify-content-center">
    <div class="container" data-aos="fade-up">

        <div class="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
            <div class="col-xl-6 col-lg-8">
                <h1><span>.</span></h1>
                <button type="button" onclick="api()">API</button>
                <h2>We are team of talented digital marketers</h2>
            </div>
        </div>

        <div class="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
            <div class="input">
                <form action="" method="post">
                    <input type="text" required/>
                    <label>Name</label>
                    <span></span>
                </form>
            </div>
        </div>

    </div>
</section><!-- End Hero -->

<!-- ======= Footer ======= -->
<footer id="footer">
    <div class="container">
        <div class="copyright">
            &copy; Copyright <strong><span>Gp</span></strong>. All Rights Reserved
        </div>
        <div class="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
    </div>
</footer><!-- End Footer -->

<div id="preloader"></div>
<a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

<!-- Vendor JS Files -->
<script src="../resources/bootstrap/assets/vendor/purecounter/purecounter_vanilla.js"></script>
<script src="../resources/bootstrap/assets/vendor/aos/aos.js"></script>
<script src="../resources/bootstrap/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="../resources/bootstrap/assets/vendor/glightbox/js/glightbox.min.js"></script>
<script src="../resources/bootstrap/assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
<script src="../resources/bootstrap/assets/vendor/swiper/swiper-bundle.min.js"></script>
<script src="../resources/jquery/jquery-1.11.1.min.js"></script>

<!-- Template Main JS File -->
<script src="../resources/bootstrap/assets/js/main.js"></script>

<script type="text/javascript">
    window.onload = function() {

    }
</script>

</body>
</html>