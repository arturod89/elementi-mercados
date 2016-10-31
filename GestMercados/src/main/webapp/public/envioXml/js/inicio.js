var ID_FORM = "frmMenu";
var URL_CORRECCION = "busquedaXml.do";
var URL_REVERESION = "reversionXml.do";
var URL_CARGA = "cargaArchivo.do";
var URL_RECHAZADO = "inicioXmlRechazado.do";
var URL_CONS_RET_REVERT = "retencionRevertidos.do";
var URL_INICIO="inicio.do";

$(function (){
	
	$("#lknCorreccion").click(function(){
		correccion();
	});
	
	$("#lknReversion").click(function(){
		reversion();
	});
	
	$("#lknCarga").click(function(){
		carga();
	});
	
	$("#lknRechazado").click(function(){
		rechazado();
	});
	
	$("#lknConsCompRet").click(function(){
		consCompRet();
	});
	
	
	$("#linkImgBbva").click(function(){		
		ir_a("frmMenu",URL_INICIO);
	});
	
	$("#LinkInicio").click(function(){
		ir_a("frmMenu",URL_INICIO);
	});
});

/**
 * Realiza el llamado al modulo de correccion de comprobante
 */
function correccion(){
	ir_a(ID_FORM, URL_CORRECCION);
}

/**
 * Realiza el llamado al modulo de reversion de comprobante
 */
function reversion(){
	ir_a(ID_FORM, URL_REVERESION);
}

/**
 * Realiza el llamado al modulo de reversion de comprobante
 */
function carga(){
	ir_a(ID_FORM, URL_CARGA);
}

/**
 * Realiza el llamado al modulo de correción de comprobante rechazado
 */
function rechazado(){
	ir_a(ID_FORM, URL_RECHAZADO);
}

/**
 * Realiza el llamado al modulo de Consulta de Comprobantes de Retencion Revertidos
 */
function consCompRet(){
	ir_a(ID_FORM, URL_CONS_RET_REVERT);
}

