package com.elementi.mercados.utils;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import javax.annotation.PostConstruct;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import com.elementi.mercados.Property;
import com.elementi.mercados.dao.EstadoDao;
import com.elementi.mercados.dao.ParametroDao;
import com.elementi.mercados.data.Estado;
import com.elementi.mercados.data.Parametro;
import com.elementi.mercados.sql.Condicion;

/**
 * 
 * Clase utilitaria para la aplicacion
 *  
 * @author christian.chavez
 *
 */

@Component
public class AppUtil {
	
	private static final Logger logger = Logger.getLogger(AppUtil.class);
	
	static EstadoDao staticEstadoDao;
	
	@Autowired
	private ParametroDao parametroDao;
	
	@Autowired
	private EstadoDao estadoDao;
	
	static Map<Object,String> dbParametros = new HashMap<Object,String>(); 
	
	@PostConstruct
	public void init() {
		
		staticEstadoDao=estadoDao;
		logger.debug("Iniciando carga de parametros...");
		//Obtiene aplicacion Id
		int appId = Integer.parseInt(getFileProperty(Property.FileValor.APP_ID));
		
		Condicion[] condiciones = new Condicion[1];		
		condiciones[0] = new Condicion(Parametro.ID_APLICACION,appId);
		
		List<Parametro> params = parametroDao.getEntities(condiciones);
			
		for (Parametro p:params){				
			for (Property.DBValor valor:Property.DBValor.values()){
				if (valor.getNombre().equals(p.getNombre())){
					dbParametros.put(valor, p.getValor());	
				}
			}	
		}
		
	}
	
	
	/**
	 * Permite obtener un valor del archivo de propiedades del sistema
	 * 
	 * @param valor Contiene el valor a buscar en archivo de propiedades
	 * @return Retorna el valor en String
	 */
	public static String getFileProperty(Property.FileValor valor){		
		Properties prop = new Properties();
		String valorStr=null;
		
		try{
			InputStream stream = AppUtil.class.getClassLoader().getResourceAsStream("app.properties");
			prop.load(stream);
			valorStr = prop.getProperty(valor.getNombre());
		}catch(IOException ie){
			logger.error(AppUtil.getDetailedException(ie));
		}
		
		return valorStr;
	}
	
	/**
	 * Permite obtener un valor de la tabla de parametros en la base de datos
	 * 
	 * @param valor Contiene el valor a buscar en tabla de parametros
	 * @return Retorna el valor en String
	 */
	public static String getDBProperty(Property.DBValor valor){
		return dbParametros.get(valor);
	}	

	/**
	 * Permite obtener el objeto estado  
	 * 
	 * @param valor Enum que define el estado a obtener
	 * @return Retorna el estado
	 */
	public static Estado getEstado(Estado.Valor valor){
		Estado estado=null;
		try {
			estado =  staticEstadoDao.getEstado(valor.getNombre());
			
		} catch (Exception e) {
			logger.error(AppUtil.getDetailedException(e));
		}
		
		return estado;
	}

	/**
	 * Permite obtener una lista de los mensajes de error para una excepcion ademas del stacktrace en fornato String
	 * 
	 * @param throwable Objecto que contiene excepcion
	 * @return Retorna lista de mensajes de error en String 
	 */
	public static List<String> getDetailedException(Throwable throwable) {
	    List<String> result = new ArrayList<String>();
	    
	    String stacktrace=null;
	    
	    if (throwable!=null){
		    StringWriter errors = new StringWriter();
		    throwable.printStackTrace(new PrintWriter(errors));
		    stacktrace = errors.toString();   
	    }	    
	    
	    while (throwable != null) {
	        result.add(throwable.getMessage());
	        throwable = throwable.getCause();
	    }
	    
	    if (stacktrace!=null) result.add(stacktrace); //add stack trace at the end of list
	    
	    return result;
	}
	
	public static String sqlParameters(String estados) {

		String result="";
		boolean esPrimer = true;
		for(String e : estados.split(",")){
			if(esPrimer){
				result = result + "'"+e+"'";
			}else{
				result = result + ",'"+e+"'";
			}
			esPrimer=false;
		}
	    
	    return result;
	}

	
	public static File multipartToFile(MultipartFile multipart) throws IllegalStateException, IOException 
	{
	        File convFile = new File( multipart.getOriginalFilename());
	        multipart.transferTo(convFile);
	        return convFile;
	}
	
}
