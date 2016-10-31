ID_FORM = "formBuscar";
URL_INTERVENCIONES = "xmlRechazadoInt.html";
URL_LEASING = "xmlRechazadoLea.html";
URL_LEASING_GUARDAR = "guardarXmlRechazadoLea.html";
URL_INTERVENCIONES_GUARDAR = "guardarXmlRechazadoInt.html";
URL_BUSCA_RECHAZADOS = "buscarXmlRechazado.html";
URL_TERMINA_CORECCION_XML = "terminaCorreccionXml.html";

$(function(){
	Paginador.registraPaginador(ID_FORM, URL_BUSCA_RECHAZADOS, 'pagBusqCompRecha');
	var unidad = $("#unidad").val();
	$("#tUnidad").val(unidad);
	mostrarMsjs();
	$("#lnkInicio").click(function(){
		inicio();
	});
	
	$("#nombreArchivo").keyup(function(event){
		validaCaracteresNumerosGuion(event, 'nombreArchivo');
	});
	
	$("#rucProveedor").keyup(function(event){
		validaSoloNumerosVex(event, 'rucProveedor');
	});
	
	$("#btnBuscar").click(function(){
		buscarArchivosRechazados();
	});
	
	$("#btnLimpiar").click(function(){
		limpiarFormRechazados();
	});
	

	
	$(".TERMINA_EDICION").each(function(){
		var ids=$(this).attr("tipo");
		//idxml=ids.split("_");
		$(this).click(function(){
			$("#idXMLFin").val(ids);
			$("#spanCnfirma").text(confirmaEdic);
			
			
			var confirmation = confirm(confirma);
			if (confirmation){
				$("#formBuscar").attr('action', URL_TERMINA_CORECCION_XML);
	        	$("#formBuscar").submit();
			}else{
				console.log('NO confirmo nada');
			}			
			
		});
	});
	$(".calendar").each(function(){
		$(this).datepicker({
			  dateFormat: "dd/mm/yy"
		});
		$(this).attr("readonly","readonly");
	});
});

function required(event, idInput){
	 var key = (event.charCode)?event.charCode:((event.keyCode)?event.keyCode:((event.which)?event.which:0));
	 if(37 !== key && 39 !== key && 36 !== key && 35 !== key){
		var campo = $("#"+idInput).val();
		if (campo.length === 0){   
			$("#spanMensaje").text(requerido);
			$("#dialog-message").dialog({
			      modal: true,
			      buttons: {
			        "Aceptar": function() {
			          $(this).dialog("close");
			          $("#"+idInput).focus();
			        }
			      }
			 });
		}  
	 }
}

function limpiarFormRechazados(){
	$("#nombreArchivo").val('');
	$("#rucProveedor").val('');
	$("#fechaEmis1").val('');
	$("#tUnidad").val('');
	$("#fechaEmis2").val('');
	$("#resultado").css("display","none");
	//$("#lknAbrir").css("display","none");
}

function mostrarMsjs(){
	
	$('#mensajeDiv').removeClass('alert-danger');			  				
	$('#mensajeDiv').removeClass('alert-success');
	$('#mensajeDiv').find("p").text("");
	$('#mensajeDiv').hide();
	
	
	if(codError === 'OK'){
		$("#resultado").css("display","block");
	}
	if(codError === ''){
		$("#resultado").css("display","none");
	}
	if(codError === '1'){
		
		$('#mensajeDiv').show();
		$("#mensajeDiv").addClass("alert-success");
		$("#mensajeDiv").find("p").text(updExito);
		
		$("#resultado").css("display","none");
	}
	else if(codError === 'DB004'){
		
		$('#mensajeDiv').show();
		$("#mensajeDiv").addClass("alert-danger");
		$("#mensajeDiv").find("p").text(updFail);

		$("#resultado").css("display","none");
	}
	if(codError === 'DB005'){
		
		$('#mensajeDiv').show();
		$("#mensajeDiv").addClass("alert-danger");
		$("#mensajeDiv").find("p").text(nonTable);

		$("#resultado").css("display","none");
	}
	
	mostrarMsjsAux();
}

function mostrarMsjsAux(){
	/** ERRUX01: El registro se ha actualizado correctamente**/
	if(codError === 'ERRUX01'){
		$('#mensajeDiv').show();
		$("#mensajeDiv").addClass("alert-success");
		$("#mensajeDiv").find("p").text(err9);
		
		$("#resultado").css("display","none");
	}
	/** ERRUX02: El registro se ha actualizado correctamente, pero ocurrio un error al actualizar el xml**/
	if(codError === 'ERRUX02'){
		
		$('#mensajeDiv').show();
		$("#mensajeDiv").addClass("alert-success");
		$("#mensajeDiv").find("p").text(errux02);

		$("#resultado").css("display","none");
	}
	/** 2,ERRUX03 : No se pudo actualizar el registro**/
	if(codError === 'ERRUX03' || codError === '2'){
		
		$('#mensajeDiv').show();
		$("#mensajeDiv").addClass("alert-danger");
		$("#mensajeDiv").find("p").text(errux03);
		mensaje();
	}
	if(codError === 'OK_REV'){
		$('#mensajeDiv').show();
		$("#mensajeDiv").addClass("alert-success");
		$("#mensajeDiv").find("p").text(okrev);
		
		mensaje();
	}
	if(codError === 'OK_REVC'){
		
		$('#mensajeDiv').show();
		$("#mensajeDiv").addClass("alert-success");
		$("#mensajeDiv").find("p").text(okrev);

		$("#resultado").css("display","block");
	}
}

function mensaje(){
	$("#resultado").css("display","none");
}

function buscarArchivosRechazados() {
	
	if(validaParametrosBus()){
		$("#formBuscar").attr('action', URL_BUSCA_RECHAZADOS);
		$("#formBuscar").submit();
	}else{
		console.log('NO hay parametros');
	}
}
function validaParametrosBus(){
	var rucProveedor = $("#rucProveedor").val();
	if("" !== rucProveedor && null !== rucProveedor){
		return true;
	}
	var nombreArchivo=$("#nombreArchivo").val();
	if("" !== nombreArchivo && null !== nombreArchivo){
		return true;
	}
	var tUnidad=$("#tUnidad").val();
	if("" !== tUnidad && null !== tUnidad){
		return true;
	}
	var fechaEmis1=$("#fechaEmis1").val();
	var fechaEmis2=$("#fechaEmis2").val();
	if(("" !== fechaEmis1 && null !== fechaEmis1) && ("" !== fechaEmis2 && null !== fechaEmis2) ){
		return true;
	}
	return true;
}
function corregirArchivos() {
	var id = $("input[name='det_archivo']:checked").val();
	if(id === undefined){
		$("#spanMensaje").text(continuar);
		$("#dialog-message").dialog({
	      modal: true,
	      buttons: {
	        "Aceptar": function() {
	          $(this).dialog("close");
	        }
	      }
	    });
	}else{
		$("#idSeleccionado").val(id);
		var unidad = $("input[name='det_archivo']:checked").attr("tipo");
		
		var archSelect =$("input[name='det_archivo']:checked").attr("idcargarch");
		var proveedor = $("input[name='det_archivo']:checked").attr("numProv");;
		
		$("#idArchSeleccionado").val(archSelect);
		$("#proveedor").val(proveedor);
		if(unidad === 'L'){
			ir_a(ID_FORM, URL_LEASING);
		}else if(unidad=== 'I'){
			ir_a(ID_FORM, URL_INTERVENCIONES);
		}
	}	
}

function guardarDatosLea() {
	$("#spanConfirma").text(confirma);
	$("#dialog-confirm").dialog({
	      resizable: false,
	      height:140,
	      modal: true,
	      buttons: {
	        "Aceptar": function() {
	        	$("#formBuscar").attr('action', URL_LEASING_GUARDAR);
	        	$("#formBuscar").submit();
	        },
	        "Cancelar": function() {
	          $(this).dialog("close");
	        }
	      }
	 });
}

function guardarDatosInt() {
	$("#spanConfirma").text(confirma);
	
	$("#dialog-confirm").dialog({
	      resizable: false,
	      height:140,
	      modal: true,
	      buttons: {
	        "Aceptar": function() {
	        	$("#formBuscar").attr('action', URL_INTERVENCIONES_GUARDAR);
	        	$("#formBuscar").submit();
	        },
	        "Cancelar": function() {
	          $(this).dialog("close");
	        }
	      }
	 });
}

/**
 * ROM:01/04/2016
 * Funcion para eliminar todos los caracteres que no sean numeros 
 * la expresion regular. Solo se permite números.
 * 
 * @param idObjeto
 * @return la cadena sin los valores especiales
 */
function validaSoloNumerosVex(event, idObjeto){
	 var key = (event.charCode)?event.charCode:((event.keyCode)?event.keyCode:((event.which)?event.which:0));
	 if(37 !== key && 39 !== key && 36 !== key && 35 !== key){		
		 var valor=$("#"+idObjeto).val();
	     regex = /[A-Z\-\(\)\/=+:?\!\¡\}\{%&*@$><;#~\^\[\]\'\"\|\↓]/gi;
	     regex2=/[^0-9]/gi;
	     if(valor!==undefined && valor!=='' ){
	     valor=valor.replace(regex,"");
	     valor=valor.replace(regex2,"");
	     $("#"+idObjeto).val(valor);
	     }
	 } 
}


/**
 * ROM:01/04/2016
 * Funcion para eliminar los caracteres especiales y letras en 
 * la expresion regular. Solo se permite números y el guion medio.
 * 
 * @param idObjeto
 * @return la cadena sin los valores especiales
 */
function validaCaracteresLetras(event, idObjeto){
	 var key = (event.charCode)?event.charCode:((event.keyCode)?event.keyCode:((event.which)?event.which:0));
	 if(37 !== key && 39 !== key && 36 !== key && 35 !== key){		
		 var valor=$("#"+idObjeto).val();
	     regex = /[\.\-\(\)\/=+:?\!\¡\}\{%&*@$><;#~\^\[\]\'\"\|]/gi;
	     regex2=/[^A-Z]/gi;
	     if(valor!==undefined && valor!=='' ){
	     valor=valor.replace(regex,"");
	     valor=valor.replace(regex2,"");
	     $("#"+idObjeto).val(valor);
	     }
	 } 
}

/**
 * ROM:01/04/2016
 * Funcion para eliminar los caracteres especiales y letras en 
 * la expresion regular. Solo se permite números y el guion medio.
 * 
 * @param idObjeto
 * @return la cadena sin los valores especiales
 */
function validaCaracteresLetrasNumeros(event, idObjeto){
	 var key = (event.charCode)?event.charCode:((event.keyCode)?event.keyCode:((event.which)?event.which:0));
	 if(37 !== key && 39 !== key && 36 !== key && 35 !== key){		
		 var valor=$("#"+idObjeto).val();
	     regex = /[\.\-\(\)\/=+:?\!\¡\}\{%&*@$><;#~\^\[\]\'\"\|]/gi;
	     regex2=/[^A-Za-z0-9 ]/gi;
	     if(valor!==undefined && valor!=='' ){
	     valor=valor.replace(regex,"");
	     valor=valor.replace(regex2,"");
	     $("#"+idObjeto).val(valor);
	     }
	 } 
}

/**
 * ROM:01/04/2016
 * Funcion para eliminar los caracteres especiales y letras en 
 * la expresion regular. Solo se permite números y el guion medio.
 * 
 * @param idObjeto
 * @return la cadena sin los valores especiales
 */
function validaCaracteresNumerosGuion(event, idObjeto){
	 var key = (event.charCode)?event.charCode:((event.keyCode)?event.keyCode:((event.which)?event.which:0));
	 if(37 !== key && 39 !== key && 36 !== key && 35 !== key){		
		 var valor=$("#"+idObjeto).val();
	     regex = /[\.\(\)\/=+:?\!\¡\}\{%&*@$><;#~\^\[\]\'\"\|]/gi;
	     regex2=/[^0-9A-Z\-]/gi;
	     if(valor!==undefined && valor!=='' ){
	     valor=valor.replace(regex,"");
	     valor=valor.replace(regex2,"");
	     $("#"+idObjeto).val(valor);
	     }
	 } 
}

/**
 * ROM:01/04/2016
 * Funcion para eliminar los caracteres especiales y letras en 
 * la expresion regular. Solo se permite números y el guion medio.
 * 
 * @param idObjeto
 * @return la cadena sin los valores especiales
 */
function validaCaracteresNumerosPunto(event, idObjeto){
	 var key = (event.charCode)?event.charCode:((event.keyCode)?event.keyCode:((event.which)?event.which:0));
	 if(37 !== key && 39 !== key && 36 !== key && 35 !== key){		
		 var valor=$("#"+idObjeto).val();
	     regex = /[\-\(\)\/=+:?\!\¡\}\{%&*@$><;#~\^\[\]\'\"\|]/gi;
	     regex2=/[^0-9\.]/gi;
	     if(valor!==undefined && valor!=='' ){
	     valor=valor.replace(regex,"");
	     valor=valor.replace(regex2,"");
	     $("#"+idObjeto).val(valor);
	     }
	 } 
}

function validaFecha(idObjeto) {
	dateString = $("#"+idObjeto).val();
	  var regEx = /(0[1-9]|[12][0-9]|3[01])[\/](0[1-9]|1[012])[\/](19|20)\d\d$/gi;
	  
	  if(dateString!=='' && dateString.match(regEx)){
		  $("#"+idObjeto).val(dateString);
	  }else{
		     $("#"+idObjeto).val("");
		     $("#spanMensaje").text(fecha);
				$("#dialog-message").dialog({
				      modal: true,
				      buttons: {
				        "Aceptar": function() {
				          $(this).dialog("close");
				          //$("#"+idObjeto).focus();
				        }
				      }
				 });
	  }

}
