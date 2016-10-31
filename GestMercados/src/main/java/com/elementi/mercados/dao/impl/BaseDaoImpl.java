package com.elementi.mercados.dao.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.apache.log4j.Logger;
import org.springframework.core.GenericTypeResolver;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;

import com.elementi.mercados.ErrorCodes;
import com.elementi.mercados.dao.BaseDao;
import com.elementi.mercados.dao.DaoException;
import com.elementi.mercados.sql.Condicion;
import com.elementi.mercados.utils.AppUtil;


/**
 * Implementaci�n de interface BaseDao
 * 
 * @author christian.chavez
 *
 * @param <T> Generico para la clase (POJO asociado a una tabla en base de datos)  
 * @param <K> Generico para identificador de instancia de la clase 
 */
public abstract class BaseDaoImpl<T,K> implements BaseDao<T,K> {
	
	private static final Logger logger = Logger.getLogger(BaseDaoImpl.class);
			
	private DataSource datasource;
	
	private RowMapper<T> rowMapper;
	
	private String pkName;
	private String entityName;
	private String pkSequence;
	
	//Queries
	private String findByIdSql;
	private String getAllEntitiesSql;
	private String findFilteredEntitiesSql;
	private String countAllSql;
	private String updateSql;
	private String deleteSql;	
	private String findNextIdSql;
	
	private JdbcTemplate jdbcTemplate;
	
	BaseDaoImpl(DataSource datasource,String entityName){		
		this(datasource,entityName,null,null,null);
	}
	
	BaseDaoImpl(DataSource datasource,String entityName,String pkName){		
		this(datasource,entityName,pkName,null,null);	
	}
	
	BaseDaoImpl(DataSource datasource,String entityName,RowMapper<T> mapper){		
		this(datasource,entityName,null,null,mapper);
	}
	
	BaseDaoImpl(DataSource datasource,String entityName,String pkName,RowMapper<T> mapper){		
		this(datasource,entityName,pkName,null,mapper);	
	}	
	
	BaseDaoImpl(DataSource datasource,String entityName,String pkName,String pkSequence){
		this(datasource,entityName,pkName,pkSequence,null);
	}
	
	BaseDaoImpl(DataSource datasource,String entityName,String pkName,String pkSequence,RowMapper<T> mapper){
		this.datasource=datasource;
		this.entityName=entityName;
		this.pkName=pkName==null?"ID":pkName;
		this.pkSequence=pkSequence;
		
		if (mapper==null){
			Class<T> clazz = (Class<T>)GenericTypeResolver.resolveTypeArguments(getClass(), BaseDaoImpl.class)[0];
			this.rowMapper= new BeanPropertyRowMapper<T>(clazz);
		}else{
			this.rowMapper=mapper;	
		}		
		
		this.findByIdSql = "SELECT * FROM " + entityName + " WHERE "+ pkName +" = ?";
		this.getAllEntitiesSql="SELECT * FROM " + entityName;
		this.findFilteredEntitiesSql="SELECt * FROM "+ entityName+" WHERE ";
		this.countAllSql ="SELECT count(*) FROM "+ entityName ;
		this.updateSql="UPDATE "+ entityName+" SET ";
		this.deleteSql="DELETE FROM "+ entityName;
		
		if (pkSequence!=null){
			this.findNextIdSql ="SELECT "+pkSequence+".NEXTVAL FROM DUAL";
		}
		
		this.jdbcTemplate = new JdbcTemplate(datasource);
	}
	
	public  T findById(K id){
	   T result=null;
	   try{
		   Object[] params = {id};
		   result = jdbcTemplate.queryForObject(findByIdSql, params, rowMapper);
	   }catch(EmptyResultDataAccessException dae){
		   logger.debug("Entidad no encontrada en "+entityName);		   
	   }
	   return result;
	}
	
	public  List<T> getAllEntities(){
		List<T> list = new ArrayList<T>();
		list = jdbcTemplate.query(getAllEntitiesSql, rowMapper);			
		return list;
	}
	
	public List<T> getEntities(Condicion[] condiciones){
		List<T> list = new ArrayList<T>();
		StringBuilder sb=new StringBuilder(findFilteredEntitiesSql);
			
		Object[] args = new Object[condiciones.length];
			
		int i=0;
		while (i<condiciones.length){
			if (i==0){
				sb.append(condiciones[i].getNombre()).append("= ? ");
			}else{
				sb.append(condiciones[i].getOperador().name()).append(" ").append(condiciones[i].getNombre()).append(" = ? ");
			}
			args[i]=condiciones[i].getValor();
			i++;
		}						
			
		list = jdbcTemplate.query(sb.toString(),args, rowMapper);
		
		return list;
	}
	
	public int getCountAll(){
		
		int count=0;
		try{
			count = jdbcTemplate.queryForObject(countAllSql, Integer.class);	
		}catch(EmptyResultDataAccessException dae){
		  logger.debug(AppUtil.getDetailedException(dae));		  
		}		
		return count;
	}
	
	public K insertAndReturnId(T entity) throws DaoException{
		//Not implemented
		throw new java.lang.UnsupportedOperationException();
	};
	
	public K insertAndReturnId(Map<String,Object> argsMap) throws DaoException{
		
		Map<String,Object> args = new HashMap<String,Object>(argsMap);
		
		SimpleJdbcInsert jdbcInsert = new SimpleJdbcInsert(datasource).withTableName(entityName);
		
		Class<K> clazzPk = (Class<K>)GenericTypeResolver.resolveTypeArguments(getClass(), BaseDaoImpl.class)[1];
		
		K id;
		
		if (pkSequence==null){
			id = (clazzPk.cast(args.get(pkName)));
		}else{
			id = getJdbcTemplate().queryForObject(findNextIdSql, clazzPk);
			args.put(pkName, id);
		}
		
		try{			
			jdbcInsert.execute(args);
			
		}catch (DataAccessException dae){
			  logger.debug(AppUtil.getDetailedException(dae));
			  throw new DaoException(ErrorCodes.D_INSERT_ERROR);			
		}
		return id;
	}
	
	public int insert(T entity) throws DaoException{
		//Not implemented
		throw new java.lang.UnsupportedOperationException();
	};
	
	public int insert(Map<String,Object> argsMap) throws DaoException{
		
		SimpleJdbcInsert jdbcInsert = new SimpleJdbcInsert(datasource).withTableName(entityName);
		
		Number rows =0;
		
		try{			
			rows = jdbcInsert.execute(argsMap);			
		}catch (DataAccessException dae){
			  logger.debug(AppUtil.getDetailedException(dae));
			  throw new DaoException(ErrorCodes.D_INSERT_ERROR);			
		}
		return rows.intValue();
	}
	
	
	public int delete(K pk) throws DaoException{	
		
		Condicion[] condiciones = new Condicion[1];
		condiciones[0]=new Condicion(pkName,pk);
		
		return delete(condiciones);
	};
	
	public int delete(Condicion[] condiciones) throws DaoException{
		Object[] args=null;
		int rows=0;
		try{
			StringBuilder sb=new StringBuilder(deleteSql);
			
			if (condiciones!=null){
				sb.append(" WHERE ");
				
				args = new Object[condiciones.length];
				
				int i=0;
				while (i<condiciones.length){
					if (i==0){
						sb.append(condiciones[i].getNombre()).append("= ? ");
					}else{
						sb.append(condiciones[i].getOperador().name()).append(" ").append(condiciones[i].getNombre()).append(" = ? ");
					}
					args[i]=condiciones[i].getValor();
					i++;
				}						
			}
			rows = jdbcTemplate.update(sb.toString(),args);
			
		}catch(DataAccessException dae){
			logger.debug(AppUtil.getDetailedException(dae));
		    throw new DaoException(ErrorCodes.D_DELETE_ERROR);
		}
		
		return rows;
	}
	
	public int update(T entity) throws DaoException{
		//Not implemented
		throw new java.lang.UnsupportedOperationException();
	};
	
	public int update(Map<String,Object> argsMap, Condicion[] condiciones) throws DaoException{
		int rows =0;
		try{
			Object[] columns = argsMap.keySet().toArray();
			int size = columns.length + (condiciones==null?0:condiciones.length);
			Object[] args = new Object[size];
			
					
			StringBuilder sb=new StringBuilder(updateSql);
			
			for (int i=0;i<columns.length;i++){
				if (i==0){
					sb.append(columns[i].toString()).append(" = ? ");
				}else{
					sb.append(",").append(columns[i].toString()).append(" = ? ");
				}
				args[i]=argsMap.get(columns[i]);			
			}
			
			if (condiciones!=null){
				
				sb.append(" WHERE ");
				
				int i=0;
				while (i<condiciones.length){
					if (i==0){
						sb.append(condiciones[i].getNombre()).append("= ? ");
					}else{
						sb.append(condiciones[i].getOperador().name()).append(" ").append(condiciones[i].getNombre()).append(" = ? ");
					}
					args[i+columns.length]=condiciones[i].getValor();
					i++;
				}					
			}
			
			rows = jdbcTemplate.update(sb.toString(),args);
		}catch(DataAccessException dae){
			  logger.debug(AppUtil.getDetailedException(dae));
			  throw new DaoException(ErrorCodes.D_UPDATE_ERROR);
			}
		
		return rows;
	}

	
	public DataSource getDatasource() {
		return datasource;
	}	
	
	public void setDatasource(DataSource datasource) {
		this.datasource = datasource;		
	}

	public JdbcTemplate getJdbcTemplate() {
		return jdbcTemplate;
	}

	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	public RowMapper<T> getMapper() {
		return rowMapper;
	}	

	
}
