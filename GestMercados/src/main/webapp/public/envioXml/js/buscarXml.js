ID_FORM = "formBuscar";
URL_INICIO = "inicio.do";
URL_INICIO_BUSQ_RECHAZADOS = "inicioXmlRechazado.html";

$(function(){
	mostrarMsjsXML();
	iniciarSelect();
	
	$("#lnkInicio").click(function(){
		inicio();
	});
	
	$("#nombreArchivo").keyup(function(event){
		validaCaracteresNumerosGuion(event, 'nombreArchivo');
	});
	
	$("#numeroComprobante").keyup(function(event){
		validaCaracteresNumerosGuion(event, 'numeroComprobante');
	});
	
	$("#datos_numero_documento_identidad2").keyup(function(event){
		validaCaracteresLetrasNumeros(event, 'datos_numero_documento_identidad2');
		camposRequeridos(event, 'datos_numero_documento_identidad2');
	});
	
	$("#datos_nombre_comercial2").keyup(function(event){
		validaCaracteresLetrasNumeros(event, 'datos_nombre_comercial2');
		camposRequeridos(event, 'datos_nombre_comercial2');
	});
	
	$("#datos_retencion_regimen").keyup(function(event){
		validaSoloNumerosVex(event, 'datos_retencion_regimen');
		camposRequeridos(event, 'datos_retencion_regimen');
	});
	
	$("#datos_retencion_tasa").keyup(function(event){
		validaCaracteresNumerosPunto(event, 'datos_retencion_tasa');
		camposRequeridos(event, 'datos_retencion_tasa');
	});
	
	$("#datos_retencion_importe_total").keyup(function(event){
		validaCaracteresNumerosPunto(event, 'datos_retencion_importe_total');
		camposRequeridos(event, 'datos_retencion_importe_total');
	});
	
	$("#datos_retencion_importe_pagado").keyup(function(event){
		validaCaracteresNumerosPunto(event, 'datos_retencion_importe_pagado');
		camposRequeridos(event, 'datos_retencion_importe_pagado');
	});
	
	$("#datos_comprobante_tipo_documento").keyup(function(event){
		validaSoloNumerosVex(event, 'datos_comprobante_tipo_documento');
		camposRequeridos(event, 'datos_comprobante_tipo_documento');
	});
	
	$("#datos_comprobante_numero_documento").keyup(function(event){
		validaCaracteresNumerosGuion(event, 'datos_comprobante_numero_documento');
		camposRequeridos(event, 'datos_comprobante_numero_documento');
	});
	
	$("#datos_comprobante_fecha_emision").blur(function(){
		validaFecha('datos_comprobante_fecha_emision');
	});
	
	$("#datos_comprobante_importe_total").keyup(function(event){
		validaCaracteresNumerosPunto(event, 'datos_comprobante_importe_total');
		camposRequeridos(event, 'datos_comprobante_importe_total');
	});
	
	$("#datos_comprobante_tipo_moneda").keyup(function(event){
		validaCaracteresLetras(event, 'datos_comprobante_tipo_moneda');
		camposRequeridos(event, 'datos_comprobante_tipo_moneda');
	});
	
	$("#datos_pago_fecha").blur(function(){
		validaFecha('datos_pago_fecha');
	});
	
	$("#datos_pago_numero").keyup(function(event){
		validaSoloNumerosVex(event, 'datos_pago_numero');
		camposRequeridos(event, 'datos_pago_numero');
	});
	
	$("#datos_pago_importe").keyup(function(event){
		validaCaracteresNumerosPunto(event, 'datos_pago_importe');
		camposRequeridos(event, 'datos_pago_importe');
	});
	
	$("#datos_pago_moneda").keyup(function(event){
		validaCaracteresLetras(event, 'datos_pago_moneda');
		camposRequeridos(event, 'datos_pago_moneda');
	});
	
	$("#datos_retencion2_importe_retenido").keyup(function(event){
		validaCaracteresNumerosPunto(event, 'datos_retencion2_importe_retenido');
		camposRequeridos(event, 'datos_retencion2_importe_retenido');
	});
	
	$("#datos_retencion2_moneda_importe").keyup(function(event){
		validaCaracteresLetras(event, 'datos_retencion2_moneda_importe');
		camposRequeridos(event, 'datos_retencion2_moneda_importe');
	});
	
	$("#datos_retencion2_fecha").blur(function(){
		validaFecha('datos_retencion2_fecha');
	});
	
	$("#datos_retencion2_monto_total").keyup(function(event){
		validaCaracteresNumerosPunto(event, 'datos_retencion2_monto_total');
		camposRequeridos(event, 'datos_retencion2_monto_total');
	});
	
	$("#datos_retencion2_moneda_monto").keyup(function(event){
		validaCaracteresLetras(event, 'datos_retencion2_moneda_monto');
		camposRequeridos(event, 'datos_retencion2_moneda_monto');
	});
	
	$("#tipo_cambio_moneda_referencia").keyup(function(event){
		validaCaracteresLetras(event, 'tipo_cambio_moneda_referencia');
		camposRequeridos(event, 'tipo_cambio_moneda_referencia');
	});
	
	$("#tipo_cambio_factor_aplicado").keyup(function(event){
		validaCaracteresNumerosPunto(event, 'tipo_cambio_factor_aplicado');
		camposRequeridos(event, 'tipo_cambio_factor_aplicado');
	});
	
	$("#tipo_cambio_fecha").blur(function(){
		validaFecha('tipo_cambio_fecha');
	});
	
	$("#regresar").click(function(){
		var busqueda = $("#busqueda").val();
		regresaBusquedas(busqueda);
	});
	
	$(".calendar").each(function(){
		$(this).datepicker({
			  dateFormat: "dd/mm/yy"
		});
		$(this).attr("readonly","readonly");
	});
});

function camposRequeridos(event, idInput){
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

function limpiarForm(){
	$("#formBuscar").attr('action', "busquedaXml.html");
	$("#formBuscar").submit();
}

function limpiarFormRever(){
	$("#formBuscar").attr('action', "reversionXml.html");
	$("#formBuscar").submit();
}

function iniciarSelect(){
	$("#tUnidad").val(seleccion);
}

function mostrarMsjsXML(){
	if(codError === 'DB003'){
		$("#resultado").css("display","none");
		
		$("#spanMensaje").text(sinDatos);
		$("#dialog-message").dialog({
		      modal: true,
		      buttons: {
		        "Aceptar": function() {
		          $(this).dialog("close");
		        }
		      }
		 });
	}
	if(codError === 'OK'){
		$("#resultado").css("display","block");
		$("#lknAbrir").css("display","block");
	}
	if(codError === ''){
		$("#spanMensaje").text('');
		$("#resultado").css("display","none");
		
	}
	if(codError === '1'){
		$("#spanMensaje").text(updExito);
		$("#dialog-message").dialog({
		      modal: true,
		      buttons: {
		        "Aceptar": function() {
		          $(this).dialog("close");
		        }
		      }
		    });
		$("#resultado").css("display","none");
		
	}
	if(codError === 'DB004'){
		$("#spanMensaje").text(updFail);
		$("#dialog-message").dialog({
		      modal: true,
		      buttons: {
		        "Aceptar": function() {
		          $(this).dialog("close");
		        }
		      }
		    });
		$("#resultado").css("display","none");
		
	}
	if(codError === 'DB005'){
		$("#spanMensaje").text(nonTable);
		$("#dialog-message").dialog({
		      modal: true,
		      buttons: {
		        "Aceptar": function() {
		          $(this).dialog("close");
		        }
		      }
		    });
		$("#resultado").css("display","none");
		
	}
	
	mostrarMsjsAux();
}

function mostrarMsjsAux(){
//////////////////////////////////////////////////////
	/** ERRUX01: El registro se ha actualizado correctamente**/
	if(codError === 'ERRUX01'){
		if(estat === '9'){
			$("#spanMensaje").text(err9);
			$("#dialog-message").dialog({
				modal: true,
				buttons: {
					"Aceptar": function() {
						$(this).dialog("close");
					}
				}
			});
			$("#resultado").css("display","none");
		}
		if(estat === '7'){
			$("#spanMensaje").text(err7);
			$("#dialog-message").dialog({
				modal: true,
				buttons: {
					"Aceptar": function() {
						$(this).dialog("close");
					}
				}
			});
			$("#resultado").css("display","none");
			
		}
		if(estat === '13'){
			$("#spanMensaje").text(err9);
			$("#dialog-message").dialog({
				modal: true,
				buttons: {
					"Aceptar": function() {
						$(this).dialog("close");
					}
				}
			});
			$("#resultado").css("display","none");
			
		}
	}
	/** ERRUX02: El registro se ha actualizado correctamente, pero ocurrio un error al actualizar el xml**/
	if(codError === 'ERRUX02'){
		$("#spanMensaje").text(errux02);
		$("#dialog-message").dialog({
		      modal: true,
		      buttons: {
		        "Aceptar": function() {
		          $(this).dialog("close");
		        }
		      }
		    });
		$("#resultado").css("display","none");
		
	}
	/** 2,ERRUX03 : No se pudo actualizar el registro**/
	if(codError === 'ERRUX03' || codError === '2'){
		$("#spanMensaje").text(errux03);
		mensaje();
	}
	if(codError === 'OK_REV'){
		$("#spanMensaje").text(okrev);
		mensaje();
	}
	if(codError === 'OK_REVC'){
		$("#spanMensaje").text(okrev);
		$("#dialog-message").dialog({
		      modal: true,
		      buttons: {
		        "Aceptar": function() {
		          $(this).dialog("close");
		        }
		      }
		    });
		$("#resultado").css("display","block");
	}
}

function mensaje(){
	$("#dialog-message").dialog({
	      modal: true,
	      buttons: {
	        "Aceptar": function() {
	          $(this).dialog("close");
	        }
	      }
	    });
	$("#resultado").css("display","none");
	
}

function buscarArchivos() {
	var nombreArchivo = document.getElementById("nombreArchivo").value;
	var tipoUnidad = document.getElementById("tUnidad").value;
	$("#formBuscar").attr('action', "buscarXml.html");
	if(nombreArchivo !== "" || tipoUnidad !== ""){
		$("#formBuscar").submit();
	}else{
		$("#spanMensaje").text(sinDatos);
		$("#dialog-message").dialog({
		      modal: true,
		      buttons: {
		        "Aceptar": function() {
		          $(this).dialog("close");
		        }
		      }
		    });
	}
}

function regresaBusquedas(busqueda) {
	if("B" === busqueda && null !== busqueda){
		buscarArchivos();
	}else{
		$("#formBuscar").attr('action', URL_INICIO_BUSQ_RECHAZADOS);
		$("#formBuscar").submit();
	}
}


function buscarArchivosReversion(){
	var numeroComprobante = document.getElementById("numeroComprobante").value;
	var tipoUnidad = document.getElementById("tUnidad").value;
	$("#formBuscar").attr('action', "buscarXmlRever.html");
	if(numeroComprobante !== "" || tipoUnidad !== ""){
		$("#formBuscar").submit();
	}else{
		$("#spanMensaje").text(sinDatos);
		$("#dialog-message").dialog({
		      modal: true,
		      buttons: {
		        "Aceptar": function() {
		          $(this).dialog("close");
		        }
		      }
		    });
	}
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
	}
	if(id.includes("R")){
		$("#spanMensaje").text(reverobl);
		$("#dialog-message").dialog({
	      modal: true,
	      buttons: {
	        "Aceptar": function() {
	          $(this).dialog("close");
	        }
	      }
	    });
	}
	var datos = document.getElementById("dat" + id).value;
	$("#datArchivo").val(datos);
	var idUnidad = datos.split("|");
	
	if(idUnidad[4] === 'L'){
		$("#formBuscar").attr('action', "corregirXmlLea.html");
	}else if(idUnidad[4] === 'I'){
		$("#formBuscar").attr('action', "corregirXmlInt.html");
	}
	$("#formBuscar").submit();
	
}

function aplicarReversion(){
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
	}
	
	if(id.includes("R")){
		$("#formBuscar").attr('action', "aplicarReversionC.hmtl");
		var idR = id.replace(/R/g, '');
		$("#idDetArch").val(idR);
		var datosR = document.getElementById("dat" + idR).value;
		$("#datArchivo").val(datosR);
		ejecutarReversion();
	}else{
		$("#formBuscar").attr('action', "aplicarReversion.html");
		$("#idDetArch").val(id);
		var datos = document.getElementById("dat" + id).value;
		$("#datArchivo").val(datos);
		ejecutarReversion();
	}
	
	
	
	
}

function ejecutarReversion(){
	
	$("#spanConfirma").text(confirmaRev);
	$("#dialog-confirm").dialog({
	      resizable: false,
	      height:140,
	      modal: true,
	      buttons: {
	        "Aceptar": function() {
	        	
	        	$("#formBuscar").submit();
	        },
	        "Cancelar": function() {
	          $(this).dialog("close");
	        }
	      }
	 });
	
}

function guardarDatosLea() {
	var confirmation = confirm(confirma);
	if (confirmation){
		$("#formBuscar").attr('action', "guardarXmlLea.html");
    	$("#formBuscar").submit();
	}else{
		console.log('NO confirmo nada');
	}
}

function guardarDatosInt() {
	
	var confirmation = confirm(confirma);
	if (confirmation){
		$("#formBuscar").attr('action', "guardarXmlInt.html");
    	$("#formBuscar").submit();
	}else{
		console.log('NO confirmo nada');
	}
	
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
	  var regEx = /(0[1-9]|[12][0-9]|3[01])[-](0[1-9]|1[012])[-](19|20)\d\d$/gi;
	  
	  if(dateString.match(regEx)){
		  $("#"+idObjeto).val(dateString);
	  }else{
		     $("#"+idObjeto).val("");
		     $("#spanMensaje").text(fecha);
				$("#dialog-message").dialog({
				      modal: true,
				      buttons: {
				        "Aceptar": function() {
				          $(this).dialog("close");
				          $("#"+idObjeto).focus();
				        }
				      }
				 });
	  }
	 
}

function inicio(){
	ir_a(ID_FORM, URL_INICIO);
}
