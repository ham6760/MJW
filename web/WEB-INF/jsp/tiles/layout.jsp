<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title><tiles:getAsString name="title"/></title>
</head>
<body>
<div>
    <!-- header -->
    <tiles:insertAttribute name="header"/>
</div>
    <!-- content -->
    <tiles:insertAttribute name="body"/>

    <!-- footer -->
    <tiles:insertAttribute name="footer"/>
</body>
</html>