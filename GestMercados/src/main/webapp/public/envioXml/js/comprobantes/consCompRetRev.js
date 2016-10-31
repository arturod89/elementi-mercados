var ID_FORM = "frmConsulta";
var URL_CONSULTA = "consultaRevertidos";


$(function (){
	
	buscarDocumento(1);
	
	$("#"+ID_FORM+" #btnBuscar").click(function(){
		buscarDocumento(1);
	});

	$("#"+ID_FORM+" #btnReset").click(function(e){
	   $("#"+ID_FORM)[0].reset();
	   $("#resultados").html("");
	});
	  
});


function buscarDocumento(page){	
	   	 
	var ruc = $("#"+ID_FORM+" #txtRUC").val();
 	var folio = $("#"+ID_FORM+" #txtFolio").val();
 	var estado = $("#"+ID_FORM+" #sctEstatus").val();
 	var fechaIni = $("#"+ID_FORM+" #txtFecEmisDel").val();
 	var fechaFin = $("#"+ID_FORM+" #txtFecEmisAl").val();
 	var unidad = $("#"+ID_FORM+" #sctTipoUnidad").val();
 	
 	var data = "txtRUC="+ruc+"&txtFolio="+folio+"&sctEstatus="+estado+"&txtFecEmisDel="+fechaIni+"&txtFecEmisAl="+fechaFin+"&sctTipoUnidad="+unidad+"&NoPagina="+page;	
	
	jQuery("#resultados").load( URL_CONSULTA + ".html?"+data);
}