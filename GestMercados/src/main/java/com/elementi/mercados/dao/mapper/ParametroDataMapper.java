package com.elementi.mercados.dao.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.elementi.mercados.data.Parametro;

public class ParametroDataMapper implements RowMapper<Parametro>{

	
	@Override
	public Parametro mapRow(ResultSet rs, int rowNum) throws SQLException {
		Parametro parametro = new Parametro();
		parametro.setId(rs.getInt(Parametro.ID_MAE_PARAM));
		parametro.setNombre(rs.getString(Parametro.PARAM));
		parametro.setDescripcion(rs.getString(Parametro.DESC_PARAM));
		parametro.setValor(rs.getString(Parametro.VAL_PARAM));
		parametro.setGrupo(rs.getString(Parametro.GRP_PARAM));
		
		Integer aplicacionId = rs.getInt(Parametro.ID_APLICACION);		
			
		parametro.setAplicacionId(aplicacionId);			
		
		return parametro;
	}

}
