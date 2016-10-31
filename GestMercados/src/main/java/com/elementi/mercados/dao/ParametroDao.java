package com.elementi.mercados.dao;

import com.elementi.mercados.data.Parametro;

public interface ParametroDao extends BaseDao<Parametro,Integer>{

	public Parametro getParametro(String nombre) throws DaoException;
}
