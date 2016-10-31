<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles" %>
<%@ page language="java" contentType="text/html; charset=UTF8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta http-equiv="Pragma" content="no-cache"/>
    <meta http-equiv="expires" content="-1"/>
    <tiles:insertAttribute name="script" ignore="true"/>
    <title>BBVA Continental - Sistema de Comprobantes de Retenci&oacute;n Electr&oacute;nico</title>
</head>
<body>
    <div class="spinner-wrapper">
  		<div class="spinner"></div>
	</div>    
	<div class="container">
	    <tiles:insertAttribute name="head"/>
	    <tiles:insertAttribute name="menu"/>
	    <tiles:insertAttribute name="body"/>	        
	    <tiles:insertAttribute name="foot"/>
	</div>
</body>
</html>