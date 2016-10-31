<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles"%>
<%@ page language="java" contentType="text/html; charset=UTF8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<tiles:insertDefinition name="principal">
	<tiles:putAttribute name="body">

		<br>
		<div id="mensajeDiv" style="display:none" class="alert alert-dismissible" role="alert">
    		<button type='button' class='close' data-hide='alert-dismissible' aria-label='Close'><span aria-hidden='true'>&times;</span></button>
    		<p id="contenido"></p>
    	</div>
		<div id="my-tab-content" class="tab-content">
			<div class="row">
				<div class="col-md-offset-2 col-md-8">

					<br>
					<form class="form-horizontal">
						<div class="panel panel-default">
							<div class="panel-body">

								<div class="form-group">
									<label class="col-sm-2 control-label" for="aplicativo">Aplicativo:</label>
									<div class="col-sm-10">
										<input type="text" class="form-control" id="aplicativo" name="aplicativo">
									</div>
								</div>
								<div class="form-group">
									<label class="col-sm-2 control-label" for="fecha">Fecha:</label>
									<div class="col-sm-4">
										<input type="text" class="form-control" data-provide="datepicker" id="fecha" name="fecha" data-date-format='dd/mm/yyyy'>
									</div>
									<label class="col-sm-3 control-label" for="tipo_cambio">Tipo de Cambio:</label>
									<div class="col-sm-2">
										<input type="text" class="form-control" id="tipo_cambio" name="tipo_cambio">
									</div>
								</div>
								<div class="form-group">
									<div class="col-sm-12">
										<div class="pull-right"> 
											<button type="button" class="btn btn-primary" id="btnIrApp">Ir</button>
										</div>
										
									</div>
								</div>

							</div>
						</div>
					</form>

				</div>
			</div>
		</div>

		<script>
			$(document).ready(function() {
				

    			
    			$("#btnIrApp").click(function(e){
    				irAplicacion();
    			
		   		});	
    			
    			
					


			});
		
			function irAplicacion() {
				
			    $('#mensajeDiv').removeClass('alert-danger');			  				
		  	    $('#mensajeDiv').removeClass('alert-success');
			   	$('#mensajeDiv').find("p").text("");
			   	$('#mensajeDiv').hide();
				
				var formulario = new Object();
				formulario.fecha = $('#fecha').val();
				formulario.url = $('#aplicaciones').val();
				formulario.tipoCambio = $('#tipo_cambio').val();
				
			
			       $.ajax({
			       	url:"irAplicacion.html",
			 			  data:formulario,    			  
			 			  type:"POST",
			 			  async : false,
						  cache : false,			  		  
			 			  success: function(response,status) {    
					        
			 			  	console.log('result='+response+',status='+status);
			 			  	
			 			  	if (response.code=="0"){
				 			  
				 			  window.location.href = $('#aplicaciones').val();
				 			 
			 			  	}else{
					   				$('#mensajeDiv').show();				   				
				  			  	  	$("#mensajeDiv").addClass("alert-danger");
				  			  	  	$("#mensajeDiv").find("p").text(response.description);				   			
					   		}
			 			  	
			 			  	
			 			  }
			 		});
			}
		</script>

	</tiles:putAttribute>
</tiles:insertDefinition>