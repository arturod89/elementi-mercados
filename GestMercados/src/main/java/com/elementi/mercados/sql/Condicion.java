package com.elementi.mercados.sql;

/**
 * Clase que representa una condicion usada en filtros de queries y updates.<BR><BR>
 * 
 * Usa enum Operador:  AND , OR
 *  
 * 
 * @author christian.chavez
 *
 */
public class Condicion {
	
	private Operador operador;
	private String nombre;
	private Object valor;
	
	public Condicion(String nombre,Object valor){
		this(null, nombre, valor);
	}
	
	public Condicion(Operador operator,String nombre,Object valor){
		this.operador=operator;
		this.nombre=nombre;
		this.valor=valor;
	} 

	public Operador getOperador() {
		return operador;
	}

	public void setOperador(Operador operador) {
		this.operador = operador;
	} 

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public Object getValor() {
		return valor;
	} 

	public void setValor(Object valor) {
		this.valor = valor;
	}
	
	
}
