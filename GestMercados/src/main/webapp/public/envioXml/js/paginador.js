/**
 *Mexico
 *   Clase: paginador.js
 *   Descripcion: Archivo JS con el paginador
 *
 *   Control de Cambios:
 *   1.0 Mar 15, 2012 oacosta - Creacion
 */

//Se define el objeto paginador que se agrega a las paginas.
var myPaginadores = {};

/**
 * Se define el objeto de paginacion.
 **/
function Paginador(paginaActual, totalPaginas, nombrePaginador) {
	this.paginaActual = paginaActual;
	this.totalPaginas = totalPaginas;
	this.idPaginador = nombrePaginador;

	this.nombreForma = null;
	this.consultaUrl = null;

	/**
	 * Realiza la peticion de consulta.
	 **/
	this.realizarPeticion = function() {
		$("#NoPagina").val(this.paginaActual);
		ir_a(this.nombreForma, this.consultaUrl + "?NoPagina=" + this.paginaActual);
	};

	/**
	 * Realiza la consulta al inicio de la paginacion.
	 **/
	this.inicio = function() {
		if (this.totalPaginas === 0) {
			return -1; 
		}
		this.paginaActual = 1;
		this.realizarPeticion();
	};

	/**
	 * Realiza la consulta del fin de la paginacion.
	 **/
	this.fin = function() {
		if (this.totalPaginas === 0) {
			return -1;
		}
		this.paginaActual = this.totalPaginas;
		this.realizarPeticion();
	};

	/**
	 * Realiza la consulta de la pagina anterior.
	 **/
	this.anterior = function() {
		if (this.totalPaginas === 0) {
			return - 1;
		}
		this.paginaActual--;
		if (this.paginaActual <= 0) {
			this.paginaActual = 1;
		}
		this.realizarPeticion();
	};

	/**
	 * Realiza la consulta de la pagina siguiente.
	 **/
	this.siguiente = function() {
		if(this.totalPaginas === 0) {
			return;
		}
		this.paginaActual++;
		if (this.paginaActual > this.totalPaginas) {
			this.paginaActual = this.totalPaginas;
		}
		this.realizarPeticion();
	};
}

/**
 * Registra el paginador para la pantalla.
 * @param idForma el ID de la forma desde la que se realiza la consulta.
 * @param urlConsulta la URL para realizar la consulta paginada.
 * @param idContenedor el ID del contenedor donde se ha de ubicar el paginador.
 **/
Paginador.registraPaginador = function(idForma, urlConsulta, idContenedor) {
	if (myPaginadores[idContenedor] === undefined) {
		return -1;
	} 
	myPaginadores[idContenedor].nombreForma = idForma;
	myPaginadores[idContenedor].consultaUrl = urlConsulta;
	myPaginadores[idContenedor].idPaginador = idContenedor;
};

/**
 * Obtiene el paginador descrito por el ID del contenedor.
 **/
Paginador.obtenerPaginasDesdeId = function(idContenedor) {
	var id = null;
	var pagina = null;
	var totales = null;
	var describe = idContenedor.split("_");

	id = describe[0];
	if (describe.length >= 2) {
		pagina = describe[1];
	} else {
		pagina = 1;
	}
	if (describe.length >= 3) {
		totales = describe[2];
	} else {
		totales = 1;
	}
	return new Paginador(pagina, totales, id);
};

//Funcion ready() de jQuery que asigna el comportamiento
$(function() {
	//Se Crean los objetos paginadores...
	$(".paginador").each(function() {
		var idPaginador = $(this).attr('id');
		var obj = Paginador.obtenerPaginasDesdeId(idPaginador);
		myPaginadores[obj.idPaginador] = obj;
		$(this).html($("#paginadorContent").html());
		$(this).data("currentPaginador", obj);

		//Agrega los metodos del paginador.
		$(this).children("#btnInicio").click(function() {
			$(this).parent().data("currentPaginador").inicio();
		});
		$(this).children("#btnAnterior").click(function() {
			$(this).parent().data("currentPaginador").anterior();
		});
		$(this).children("#btnSiguiente").click(function() {
			$(this).parent().data("currentPaginador").siguiente();
		});
		$(this).children("#btnFin").click(function() {
			$(this).parent().data("currentPaginador").fin();
		});
	});
	
	// Se elimina el contenido del footer.
	$("#paginadorContent").hide();
	$("#paginadorContent").empty();

});
