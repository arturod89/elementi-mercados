package com.elementi.mercados.data;

public class Estado {
	
	public enum Valor{
		
		CARGA("CARGA"),
		CARGABD("CARGABD"),
		PROC_XML("PROC_XML"),
		PROC_XML_ERR("PROC_XML_ERR"),
		XML_CORR("XML_CORR"),
		XML_GEN_OK("XML_GEN_OK"),
		XML_GEN_ERR("XML_GEN_ERR"),
		ENV_XML("ENV_XML"),
		ENV_XML_ERR("ENV_XML_ERR"),
		ENV_RESP_XML("ENV_RESP_XML"),
		ENV_CDP_OK("ENV_CDP_OK"),
		ENV_REV("ENV_REV"),
		REV_OK("REV_OK"),
		ENV_REV_ESP("ENV_REV_ESP"),
		CARGA_ARCHIVO_GPS("CARGA_ARCHIVO_GPS"),
		NUM_COMP_GENERADO("NUM_COMP_GENERADO"),
		PDT_APROBADO("PDT_APROBADO"),
		DOC_MODIFICADO("DOC_MODIFICADO"),
		COMP_MODIFICADO("COMP_MODIFICADO"),
		PERFIL_ACTIVO("PERFIL_ACTIVO"),
		PERFIL_INACTIVO("PERFIL_INACTIVO"),
		CARGA_DOCUMENTO("CARGA_DOCUMENTO"),
		PDT_PENDIENTE("PDT_PENDIENTE"),
		REG_DOC_MANUAL("REG_DOC_MANUAL"),
		REG_CERT_MANUAL("REG_CERT_MANUAL"),
		DOC_ELIMINADO("DOC_ELIMINADO"),
		CERT_ELIMINADO("CERT_ELIMINADO"),
		CARGA_ELIMINADA("CARGA_ELIMINADA");
		
		String nombre; 
		
		Valor(String nombre){
			this.nombre=nombre;
		}
		
		public String getNombre(){
			return this.nombre;
		}
	}
	
	public static final String ID_CAT_EST="ID_CAT_EST";
	public static final String DESC_EST="DESC_EST";
	public static final String DESCRIPCION="DESCRIPCION";
	
	private Long id;
	private String nombre;
	private String descripcion;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	
	
}
