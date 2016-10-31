package com.elementi.mercados.dao;

import java.util.List;
import java.util.Map;

import com.elementi.mercados.sql.Condicion;


/**
 * DAO base para operaciones comunes CRUD
 * 
 * @author christian.chavez
 *
 * @param <T> Generico para la clase (POJO asociado a una tabla en base de datos)  
 * @param <K> Generico para identificador de instancia de la clase 
 */
public interface BaseDao<T,K> {
	
	/**
	 * Metodo para busqueda de instancia por identificador 
	 * 
	 * @param id Identificador del tipo K
	 * @return Retorna una instancia del tipo T
	 */
	public  T findById(K id);
	
	/**
	 * Metodo para obtener la lista de todas las instancias 
	 * 
	 * @return Lista de instancias del tipo T
	 */
	public  List<T> getAllEntities();
	
	/**
	 * Metodo para obtener la lista de instancias de acuerdo a unas condiciones 
	 * 
	 * @param condiciones Array de condiciones para filtrar instancias
	 * @return Lista de instancias del tipo T
	 */
	public List<T> getEntities(Condicion[] condiciones);
	
	/**
	 * Metodo para obtener el n�mero de total instancias
	 * 
	 * @return N�mero total de instancias
	 * @throws DaoException
	 */
	public int getCountAll();
	
	/**
	 * Metodo para la inserci�n de instancias del tipo T  
	 * 
	 * @param argsMap Mapa de nombres de atributos y sus valores
	 * @return Retorna 1 si se inserto registro
	 * @throws DaoException
	 */
	public int insert(Map<String,Object> argsMap) throws DaoException;
	
	/**
	 * Metodo para la inserci�n de instancias del tipo T  
	 * 
	 * @param T Instancia del tipo T (Clase POJO)_
	 * @return Retorna 1 si se inserto registro
	 * @throws DaoException
	 */
	public int insert(T entity) throws DaoException;

	/**
	 * Metodo para la inserci�n de instancias del tipo T , retorna el identificador generado  
	 * 
	 * @param argsMap Mapa de nombres de atributos y sus valores
	 * @return Retorna el identificador generado del tipo K
	 * @throws DaoException
	 */
	public K insertAndReturnId(Map<String,Object> argsMap) throws DaoException;
	
	/**
	 * Metodo para la inserci�n de instancias del tipo T , retorna el identificador generado  
	 * 
	 * @param T Instancia del tipo T (Clase POJO)_
	 * @return Retorna el identificador generado del tipo K
	 * @throws DaoException
	 */
	public K insertAndReturnId(T entity) throws DaoException;
	
	/**
	 * Metodo para la eliminaci�n de una o mas instancias de acuerdo a un grupo de condiciones
	 * 
	 * @param condiciones Array de condiciones
	 * @return N�mero de registros eliminados
	 * @throws DaoException
	 */
	public int delete(Condicion[] condiciones) throws DaoException;
	
	/**
	 * Metodo para la eliminaci�n de una instancia de acuerdo a un identificador
	 * 
	 * @param K identificador de instancia
	 * @return Retorna 1 si registro fue eliminado 
	 * @throws DaoException
	 */
	public int delete(K pk) throws DaoException;
	
	/**
	 * Metodo para la actualizaci�n de una o mas instancias segun un grupo de condiciones
	 * 
	 * @param argsMap Mapa de nombres de atributos y sus valores
	 * @param condiciones Array de condiciones
	 * @return Retorna n�mero de registros modificados
	 * @throws DaoException
	 */
	public int update(Map<String,Object> argsMap, Condicion[] condiciones) throws DaoException;
	
	/**
	 * Metodo para la actualizaci�n de una instancia del tipo T
	 * 
	 * @param T Instancia del tipo T (Clase POJO)_
	 * @return Retorna 1 si registro fue modificado
	 * @throws DaoException
	 */
	public int update(T entity) throws DaoException;
}
