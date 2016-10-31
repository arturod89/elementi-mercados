package com.elementi.mercados.dao;

import com.elementi.mercados.data.Estado;

public interface EstadoDao extends BaseDao<Estado,Long> {

	public Estado getEstado(String nombre) throws DaoException;
}
