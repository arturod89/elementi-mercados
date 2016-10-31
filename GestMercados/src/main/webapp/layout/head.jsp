<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>  


<div class="row">
	<div class="col-md-6">
	   <img src="${pageContext.request.contextPath}/public/img/marca/logo_elementi.jpg">
	</div>
	<div class="col-md-6">
	  <div class="panelUser pull-right">
	    <span class="greeting">Hola,
		  <span><span class="glyphicon glyphicon-user" aria-hidden="true"></span>&nbsp;<c:out value="${__current_user__.nombreCompleto}"/></span>
		  <span><span class="glyphicon glyphicon-home" aria-hidden="true"></span>&nbsp;<c:out value="${__current_user__.nombreOficina}"/></span>
		  <span><span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span>&nbsp;${__current_user__.perfilActual.descripcion}</span>
		</span>
		<span class="disconnect"><span class="glyphicon glyphicon-log-out" aria-hidden="true"></span>
		  <a href="${pageContext.request.contextPath}/desconectar.html">Desconectar</a>
		</span>
	  </div>
	
	</div>
</div>
