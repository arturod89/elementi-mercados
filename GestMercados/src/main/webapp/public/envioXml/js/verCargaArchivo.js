/**
 * 
 */
var ID_FORMA_PAGINA_VER_CARGA="formVerCarga";
var URL_BUSCAR_BITA="verCargarArchivo.do";
$( function() {
	Paginador.registraPaginador(ID_FORMA_PAGINA_VER_CARGA, URL_BUSCAR_BITA, 'pagNombrePaginadorCargaArchivos');
});