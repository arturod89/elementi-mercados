package com.elementi.mercados.dao.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.elementi.mercados.data.Estado;

public class EstadoDataMapper implements RowMapper<Estado>{

	@Override
	public Estado mapRow(ResultSet rs, int rowNum) throws SQLException {
		Estado estado = new Estado();
		estado.setId(rs.getLong(Estado.ID_CAT_EST));
		estado.setNombre(rs.getString(Estado.DESCRIPCION));
		estado.setDescripcion(rs.getString(Estado.DESC_EST));
		
		return estado;
	}

}
