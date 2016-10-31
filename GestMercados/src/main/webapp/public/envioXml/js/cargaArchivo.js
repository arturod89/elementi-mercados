ID_FORM = "formCarga";
URL_INICIO = "inicio.do";

$(function(){
	mostrarMsjs();
	
	$("#lnkInicio").click(function(){
		inicio();
	});
});

function mostrarMsjs(){
	if(codError === 'DB_002'){
		$("#spanMensaje").text(error);
		$("#dialog-message").dialog({
		      modal: true,
		      buttons: {
		        "Aceptar": function() {
		          $(this).dialog("close");
		        }
		      }
		 });
	}
	if(codError === 'ERR_ARCH'){
		$("#spanMensaje").text(errorArc);
		$("#dialog-message").dialog({
		      modal: true,
		      buttons: {
		    	  "Aceptar": function() {
		          $(this).dialog("close");
		        }
		      }
		 });
	}
	if(codError === 'FECH_ERR'){
		$("#spanMensaje").text(errorFec);
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
		$("#spanMensaje").text(exito);
		$("#dialog-message").dialog({
		      modal: true,
		      buttons: {
		    	  "Aceptar": function() {
		          $(this).dialog("close");
		        }
		      }
		 });
	}
	if(codError ==='CARGERR1'){
		$("#spanMensaje").html(MSJ_CARGA);
		$("#dialog-message").dialog({
		      modal: true,
		      buttons: {
		    	  "Aceptar": function() {
		          $(this).dialog("close");
		        }
		      }
		 });
	}
	/** ARC003: No hay informacion para procesar en el archivo.**/ 
	if(codError === 'ARC003'){
		$("#spanMensaje").text(msgARC003);
		$("#dialog-message").dialog({
		      modal: true,
		      buttons: {
		    	  "Aceptar": function() {
		          $(this).dialog("close");
		        }
		      }
		 });
	}
	
	if(codError === 'ARCH_INV'){
		$("#spanMensaje").text(msgARC003);
		$("#dialog-message").dialog({
		      modal: true,
		      buttons: {
		    	  "Aceptar": function() {
		          $(this).dialog("close");
		        }
		      }
		 });
	}
	if(codError === ''){
		$("#spanMensaje").text('');
	}
}

function cargarArchivo(){
	var archivo = document.getElementById("archivo").value;
	if(archivo.indexOf('/')!==-1){
		archivo=archivo.substring(archivo.lastIndexOf('/')+1);
	}
	if(archivo.indexOf('\\')!==-1){
		archivo=archivo.substring(archivo.lastIndexOf('\\')+1);
	}
	var regex = /^(ANEXO21_INTER_)(\d{6})(.SEQ|.seq|.txt|.TXT)$/gi;
	//
	if(archivo === undefined || archivo === ""){
		$("#spanMensaje").text(seleccion);
		$("#dialog-message").dialog({
		      modal: true,
		      buttons: {
		    	  "Aceptar": function() {
		          $(this).dialog("close");
		        }
		      }
		 });
	}else if(!regex.test(archivo)){
		$("#spanMensaje").text(nombre);
		$("#dialog-message").dialog({
		      modal: true,
		      buttons: {
		    	  "Aceptar": function() {
		          $(this).dialog("close");
		        }
		      }
		 });
	}else{
		$("#formCarga").attr('action', "cargarArchivo.do");
		$("#formCarga").submit();
	}
	
}

function inicio(){
	ir_a(ID_FORM, URL_INICIO);
}
