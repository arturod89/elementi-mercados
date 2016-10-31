package com.elementi.mercados;

public class Property {

	public enum DBValor{
		
		NUM_DOC_BBVA("NUM_DOC_ID"),
		TIP_DOC_BBVA("TIP_DOC_ID"),
		UBIGEO_BBVA("UBIGEO"),
		DIR_BBVA("DIRCOMP"),
		URB_BBVA("URBAN"),
		DIST_BBVA("DISTRITO"),
		PROV_BBVA("PROVINCIA"),
		DEPT_BBVA("DEPTO"),
		COD_PAIS_BBVA("COD_PAIS"),
		RAZON_SOCIAL_BBVA("APELL_NOM"),
		MONEDA_NACIONAL("MONEDA"),
		PATH_GPS_IN("PATH_GPS_IN"),
		PATH_GPS_OUT("PATH_GPS_OUT"),
		MONEDA_USD("MON_USD"),
		DOC_FACTURA("DOC_FACT"),
		DOC_NOTA_CREDITO("DOC_NC"),
		DOC_NOTA_DEBITO("DOC_ND"),
		IMPORTE_MINIMO("IMP_MIN"),
		IDM_WS("IDM_WS"),
		IDM_WS_MAIL("IDM_WS_MAIL"),
		IDM_WS_DUMMY("IDM_WS_DUMMY"),
		DNI("DNI"),
		RUC("RUC"),
		PREFIJ_SERIE("PREFIJ_SERIE"),
		SERIE_INT("SERIE_INT"),
		ROL_INT("ROL_INT"),
		ROL_LEA("ROL_LEA"),
		NATURAL("NATURAL"),
		JURIDICA("JURIDICA"),
		MAX_FILA_PAG("PAGINACION"),
		MAX_NUM_PAG("MAX_NUM_PAG"),
		ROL_ADM("ROL_ADM"),
		UBIG_DEFAULT("UBIG_DEFAULT"),
		DEPA_DEFAULT("DEPA_DEFAULT"),
		PROV_DEFAULT("PROV_DEFAULT"),
		DIST_DEFAULT("DIST_DEFAULT"),
		PAIS_DEFAULT("PAIS_DEFAULT"),
		REG_RET("REG_RET"),
		PORCENT1_MIN("PORCENT1_MIN"),
		PORCENT1_MAX("PORCENT1_MAX"),
		PORCENT2_MIN("PORCENT2_MIN"),
		PORCENT2_MAX("PORCENT2_MAX"),
		ULT_FECH_RET("ULT_FECH_RET");
		
		String nombre;
		
		DBValor(String nombre){			
			this.nombre = nombre;
		}
		
		public String getNombre(){
			return this.nombre;
		}
	}
	
	
	public enum FileValor{
		APP_ID("app.id"),
		ENTIDAD_POS("r6.entidad.pos"),
		MONEDA_POS("r6.moneda.pos"),
		IMP_TOTAL_POS("r6.impTotal.pos"),
		RET2_POS("r6.retencion2.pos"),
		FECHA_PROC_POS("r6.fechaProc.pos"),
		NUM_DOC_POS("r6.numeroDoc.pos"),
		GLOSA_POS("r6.glosa.pos"),
		RUC_POS("r6.ruc.pos"),
		FECHA_DOC_POS("r6.fechaDoc.pos"),
		TIPO_DOC_POS("r6.tipoDoc.pos"),
		
		ENTIDAD_SIZE("r6.entidad.size"),
		MONEDA_SIZE("r6.moneda.size"),
		IMP_TOTAL_SIZE("r6.impTotal.size"),
		RET2_SIZE("r6.retencion2.size"),
		FECHA_PROC_SIZE("r6.fechaProc.size"),
		NUM_DOC_SIZE("r6.numeroDoc.size"),
		GLOSA_SIZE("r6.glosa.size"),
		RUC_SIZE("r6.ruc.size"),
		FECHA_DOC_SIZE("r6.fechaDoc.size"),
		TIPO_DOC_SIZE("r6.tipoDoc.size"),
		app_mode_dev("app.mode.dev");
		
		String nombre;
		
		FileValor(String nombre){			
			this.nombre = nombre;
		}
		
		public String getNombre(){
			return this.nombre;
		}
	}
	

}
