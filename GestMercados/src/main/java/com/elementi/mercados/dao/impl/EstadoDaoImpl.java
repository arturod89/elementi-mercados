package com.elementi.mercados.dao.impl;

import javax.sql.DataSource;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Component;

import com.elementi.mercados.ErrorCodes;
import com.elementi.mercados.dao.DaoException;
import com.elementi.mercados.dao.EstadoDao;
import com.elementi.mercados.dao.mapper.EstadoDataMapper;
import com.elementi.mercados.data.Estado;
import com.elementi.mercados.utils.AppUtil;

@Component
public class EstadoDaoImpl extends BaseDaoImpl<Estado,Long> implements EstadoDao{

	private static final Logger logger = Logger.getLogger(EstadoDaoImpl.class);

	static final String TABLE_NAME="CAT_ESTADO";
	static final String TABLE_PK="ID_CAT_EST";
	
	@Autowired
	public EstadoDaoImpl(DataSource datasource) {
		super(datasource, TABLE_NAME,TABLE_PK,new EstadoDataMapper());
	}

	public Estado getEstado(String nombre) throws DaoException {
		
		Estado estado=null;
		
		try{
			String sql = "SELECT * FROM "+TABLE_NAME +" WHERE DESCRIPCION=?";
			
			Object[] args = new Object[1];
			args[0] = nombre;
			
			estado = getJdbcTemplate().queryForObject(sql, args, getMapper());
		}catch (DataAccessException dae){
			logger.debug(AppUtil.getDetailedException(dae));
			throw new DaoException(ErrorCodes.D_QUERY_ERROR);
		}
		return estado;
	}
}
