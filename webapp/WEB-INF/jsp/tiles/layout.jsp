<%@ page contentType="text/html;charset=utf-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles" %>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title><tiles:getAsString name="title"/></title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <title>Stylish Portfolio - Start Bootstrap Template</title>
    <!-- Favicon-->
    <link rel="icon" type="image/x-icon" href="<c:url value="/resources/bootstrap/assets/favicon.ico"/>" />
    <!-- Font Awesome icons (free version)-->
    <script src="https://use.fontawesome.com/releases/v6.3.0/js/all.js" crossorigin="anonymous"></script>
    <!-- Simple line icons-->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.5.5/css/simple-line-icons.min.css" rel="stylesheet" />
    <!-- Google fonts-->
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,300italic,400italic,700italic" rel="stylesheet" type="text/css" />
    <!-- Core theme CSS (includes Bootstrap)-->
    <link href="<c:url value="/resources/bootstrap/css/styles.css?v=240628"/>" rel="stylesheet" />
    <link href="<c:url value="/resources/css/common.css?v=240628"/>" rel="stylesheet" />
</head>
<body>
    <!-- header -->
    <tiles:insertAttribute name="header"/>
    <!-- content -->
    <tiles:insertAttribute name="body"/>
    <!-- footer -->
    <tiles:insertAttribute name="footer"/>
    <!-- Bootstrap core JS-->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Core theme JS-->
    <script src="<c:url value="/resources/jquery/jquery-1.11.1.min.js"/>"></script>
    <script src="<c:url value="/resources/js/mjw.js"/>"></script>
    <script src="<c:url value="/resources/bootstrap/js/scripts.js"/>"></script>
</body>
</html>