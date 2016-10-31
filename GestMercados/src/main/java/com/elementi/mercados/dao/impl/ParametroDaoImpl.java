package com.elementi.mercados.dao.impl;

import javax.sql.DataSource;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Component;

import com.elementi.mercados.ErrorCodes;
import com.elementi.mercados.Property;
import com.elementi.mercados.dao.DaoException;
import com.elementi.mercados.dao.ParametroDao;
import com.elementi.mercados.dao.mapper.ParametroDataMapper;
import com.elementi.mercados.data.Parametro;
import com.elementi.mercados.utils.AppUtil;


@Component
public class ParametroDaoImpl extends BaseDaoImpl<Parametro,Integer> implements ParametroDao{

	private static final Logger logger = Logger.getLogger(ParametroDaoImpl.class);
	
	static final String TABLE_NAME="MAE_PARAM";
	static final String TABLE_PK="ID_MAE_PARAM";
	
	@Autowired
	public ParametroDaoImpl(DataSource datasource) {
		super(datasource, TABLE_NAME,TABLE_PK,new ParametroDataMapper());
	}

	
	public Parametro getParametro(String nombre) throws DaoException {
		Parametro parametro=null;
		try{
			//app id
			int aplicacionId = Integer.parseInt(AppUtil.getFileProperty(Property.FileValor.APP_ID));
			
			String sql = "SELECT * FROM "+TABLE_NAME +" WHERE ( PARAM=? AND ID_APLICACION=?) OR  ( PARAM=? AND ID_APLICACION IS NULL) ";
			
			Object[] args = new Object[3];
			args[0] = nombre;
			args[1] = aplicacionId;
			args[2] = nombre;
			
			parametro = getJdbcTemplate().queryForObject(sql, args, getMapper());
		}catch (DataAccessException dae){
			logger.debug(AppUtil.getDetailedException(dae));
			throw new DaoException(ErrorCodes.D_QUERY_ERROR);
		}
		return parametro;
	}
	
	

}
