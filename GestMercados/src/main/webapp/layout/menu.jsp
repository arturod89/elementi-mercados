<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>  
<nav class="navbar navbar-inverse navbar-static-top">
  <div class="container">
	 <div class="navbar-header">
	  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
		<span class="sr-only">Toggle navigation</span>
		<span class="icon-bar"></span>
		<span class="icon-bar"></span>
		<span class="icon-bar"></span>
	  </button>
	  <a class="navbar-brand" href='<c:url value="/"/>'></a>
	</div>
	<!-- Collect the nav links, forms, and other content for toggling -->
	<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">     
		<ul class="nav navbar-nav">
			<li <c:if test="${isCarga}">class="active"</c:if> ><a href='<c:url value="/carga.html"/>'>Carga <span class="sr-only">(current)</span></a></li>					
			<li class="dropdown <c:if test="${isProceso}">active</c:if>">
			  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Procesos<span class="caret"></span></a>
			  <ul class="dropdown-menu">
				<li><a href='<c:url value="/generacionCertificado.html"/>'>Comprobante de Retenci&oacute;n Electronico</a></li>
				<li><a href='<c:url value="javascript:generarXML();"/>'>Generar XML</a></li>
				<li><a href='<c:url value="/principal/xmlRechazados.html"/>'>Consulta XML Rechazados</a></li>	
				<li><a href='<c:url value="/retencionRevertidos.html"/>'>Consulta XML Enviados</a></li>				
				<li role="separator" class="divider"></li>
				<li><a href='<c:url value="/verAprobarPDT.html"/>'>Aprobar Generar PDT</a></li>							
				<li><a href='<c:url value="/reportePDT.html"/>'>Generar PDT</a></li>					
			  </ul>
			</li>
			<li class="dropdown <c:if test="${isReporte}">active</c:if>">
			  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Reportes<span class="caret"></span></a>
			  <ul class="dropdown-menu">
				<li><a href='<c:url value="/reporte19.html"/>'>Anexo 19</a></li>
				<li><a href='<c:url value="/reporte21.html"/>'>Anexo 21</a></li>	
				<li><a href='<c:url value="/reporteComp.html"/>'>Comprobante Mensual</a></li>													
			  </ul>
			</li>					
			<li class="dropdown <c:if test="${isMantenimiento}">active</c:if>">
			  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Mantenimiento<span class="caret"></span></a>
			  <ul class="dropdown-menu">
				<li><a href='<c:url value="/tipoCambio.html"/>'>Tipo de Cambio</a></li>
				<li><a href='<c:url value="/proveedores.html"/>'>Proveedor</a></li>																				
			  </ul>
			</li>
		</ul>	
	   
	</div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->  
</nav>