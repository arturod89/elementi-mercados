/**
 * Realiza el submit de la forma con el id indicado, al destino indicado.
 **/
function ir_a(idForma, urlDestino) {
	var jIdForm = "#" + idForma;
	$(jIdForm).attr('action', urlDestino);
	$(jIdForm).submit();
}

