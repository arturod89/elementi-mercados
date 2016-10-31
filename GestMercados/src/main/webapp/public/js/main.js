$(document).ready(function(){

	//Datepicker defaults
	$.fn.datepicker.defaults.format = "dd/mm/yyyy";
	$.fn.datepicker.defaults.language = "es";
	$.fn.datepicker.defaults.autoclose = true;  
	$.fn.datepicker.defaults.forceParse = false;  
	$.fn.datepicker.defaults.zIndexOffset = 1000;  
	
	//Alerts dismiss button 
    $("[data-hide]").on("click", function(){       
 	   $("." + $(this).attr("data-hide")).hide();       
	});
    
    $("[data-provide='datepicker']").datepicker().on("focusout", function() {
	      var fecha = $(this).val();
		  if (fecha!='' && fecha!='undefined'){
		    if (!validDate(fecha)){
			   $(this).datepicker('update','');
			}
			    
		  }
	});
    
});

function validDate(date){
	var comp = date.split('/');
	var d= parseInt(comp[0], 10);
	var m = parseInt(comp[1], 10);
	var y = parseInt(comp[2], 10);
	if (y<1000) return false;
	var date = new Date(y,m-1,d);
	if (date.getFullYear() == y && date.getMonth() + 1 == m && date.getDate() == d) {
	  return true;
	} else {
	  return false;
	}
}

function showMessageDiv(divMessageId, message, type){
	
	var clazz = "alert-info";
	
	if (type=='ERROR'){
		clazz = "alert-danger";		
	}else if (type=='SUCCESS'){
		clazz = "alert-success";		
	}else { //INFO
	   // nada
	}
	
	$(divMessageId).show();
	$(divMessageId).addClass(clazz);
	$(divMessageId).find("p").text(message);

}

function resetMessageDiv(divMessageId){	
	$(divMessageId).removeClass('alert-danger');			  				
	$(divMessageId).removeClass('alert-success');
	$(divMessageId).removeClass('alert-info');
	$(divMessageId).find("p").text("");
	$(divMessageId).hide();	
}

function generarXML(){

	var confirmation = confirm("¿Confirma generación del XML?");
	
	if (confirmation){
		
		$(".spinner-wrapper").css("display","flex");
		$(".spinner").text("Procesando...");
		$.ajax({
            	url:"generarXML.html",
	  			  data:"",    			  
	  			  type:"POST",				  			  		  
	  			  success: function(response,status) {
			        
			        resetMessageDiv('#mensajeDiv');
			        
	  			  	console.log('result='+response+',status='+status);
	  			  	
	  			  	if (response.code == "0") {
		  			  	 
		  			  	showMessageDiv('#mensajeDiv',response.description,'SUCCESS');
		  			  	 		
		  			} else {  		
		  				
		  			  	showMessageDiv('#mensajeDiv',response.description,'ERROR');
	  			  		
	  				}
	  			  	
	  			  	$(".spinner-wrapper").css("display","none");
	  			  },
	  			  error:function(jqXHR, textStatus, errorThrown){	
	  				resetMessageDiv('#mensajeDiv');
  			  	  	showMessageDiv('#mensajeDiv',"Se presento un error en el sistema, consultar con el administrador",'ERROR');
  			  	  	
  			  		$(".spinner-wrapper").css("display","none");
	  			  }
	  	  });	
  	 }		
	
}
