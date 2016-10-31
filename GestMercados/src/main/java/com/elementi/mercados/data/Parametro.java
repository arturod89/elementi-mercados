package com.elementi.mercados.data;

public class Parametro {
	
	
	public static final String ID_MAE_PARAM="ID_MAE_PARAM"; 
	public static final String PARAM="PARAM"; 
	public static final String DESC_PARAM="DESC_PARAM";
	public static final String VAL_PARAM="VAL_PARAM";
	public static final String GRP_PARAM="GRP_PARAM";
	public static final String ID_APLICACION="ID_APLICACION";
	
	private Integer id;
	private String nombre;
	private String descripcion;
	private String valor;
	private String grupo;
	
	private Integer aplicacionId;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
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

	public String getValor() {
		return valor;
	}

	public void setValor(String valor) {
		this.valor = valor;
	}

	public String getGrupo() {
		return grupo;
	}

	public void setGrupo(String grupo) {
		this.grupo = grupo;
	}

	public Integer getAplicacionId() {
		return aplicacionId;
	}

	public void setAplicacionId(Integer aplicacionId) {
		this.aplicacionId = aplicacionId;
	}


	

}
