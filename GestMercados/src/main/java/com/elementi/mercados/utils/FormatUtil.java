package com.elementi.mercados.utils;

import java.text.DecimalFormat;
import java.text.DecimalFormatSymbols;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Locale;

/**
 * Clase utilitaria para formatos
 * 
 * @author christian.chavez
 *
 */
public class FormatUtil {

	public static final String SIMPLE_DATE_FORMAT="dd/MM/yyyy";
	public static final String SIMPLE_TIME_FORMAT="HH:mm:ss";
	public static final String SIMPLE_DATE_FORMAT_AAMMDD="yyMMdd";
	
	public static final String FLOAT_FORMAT="#0.00";
	public static final String CURRENCY_FORMAT="#,##0.00";
	public static final String XC_FORMAT="#0.0####";
	
	private static final SimpleDateFormat simpleDateFormatAAMMDD = new SimpleDateFormat(SIMPLE_DATE_FORMAT_AAMMDD);
	private static final SimpleDateFormat simpleDateFormat = new SimpleDateFormat(SIMPLE_DATE_FORMAT);
	private static final SimpleDateFormat simpleTimeFormat = new SimpleDateFormat(SIMPLE_TIME_FORMAT);
	
	private static final DecimalFormatSymbols decimalSymbols =  new DecimalFormatSymbols(Locale.ENGLISH);
	private static final DecimalFormatSymbols currencySymbols =  new DecimalFormatSymbols(Locale.ENGLISH);
	
	static DecimalFormat floatFormat;
	static DecimalFormat currencyFormat;
	static DecimalFormat xcFormat;
	
	static{	  	
	  
	  //Define decimal symbols	
	  decimalSymbols.setDecimalSeparator('.');
	  
	  //Define currency symbols	  
	  currencySymbols.setDecimalSeparator('.');
	  currencySymbols.setGroupingSeparator(',');	
	  
	  //Set defaults formats
	  floatFormat = new DecimalFormat(FLOAT_FORMAT,decimalSymbols);
	  currencyFormat= new DecimalFormat(CURRENCY_FORMAT,currencySymbols);
	  xcFormat = new DecimalFormat(XC_FORMAT,decimalSymbols);
	
	}
	
	/**
	 * Permite obtener fecha formateada en formato por defecto
	 * 
	 * @param fecha Fecha a formatear
	 * @return Retorna fecha en formato dd/mm/yyyy
	 */
	public static String formatDate(Date fecha){			
		//return formatDateTime(fecha,SIMPLE_DATE_FORMAT);
		return simpleDateFormat.format(fecha);
	}
	
	/**
	 * Permite obtener fecha formateada en formato por defecto
	 * 
	 * @param fecha Fecha a formatear
	 * @return Retorna fecha en formato dd/mm/yyyy
	 */
	public static String formatDateAAMMDD(Date fecha){			
		//return formatDateTime(fecha,SIMPLE_DATE_FORMAT);
		return simpleDateFormatAAMMDD.format(fecha);
	}
	
	/**
	 * Permite obtener convertir un String a fecha usando el formato por defecto
	 * 
	 * @param dateStr Se espera fecha en formato dd/mm/yyyy
	 * @return Retorna fecha
	 */
	public static Date parseDate(String dateStr) throws ParseException{				
		//return parseDateTime(dateStr,SIMPLE_DATE_FORMAT);	
		return simpleDateFormat.parse(dateStr);
	}
	
	/**
	 * Permite obtener convertir un String a fecha usando el formato por defecto
	 * 
	 * @param dateStr Se espera fecha en formato dd/mm/yyyy
	 * @return Retorna fecha
	 */
	public static Date parseDateAAMMDD(String dateStr) throws ParseException{				
		//return parseDateTime(dateStr,SIMPLE_DATE_FORMAT);	
		return simpleDateFormatAAMMDD.parse(dateStr);
	}

	/**
	 * Permite obtener convertir un String a fecha usando el formato especificado
	 * 
	 * @param dateStr Fecha en String
	 * @param format Formato de fecha
	 * @return Retorna fecha
	 */
	public static Date parseDateTime(String dateStr,String format) throws ParseException{
		SimpleDateFormat fmt = new SimpleDateFormat(format);		
		return fmt.parse(dateStr);		
	}
	
	/**
	 * Permite obtener tiempo formateado en formato por defecto
	 * 
	 * @param fecha Especifica el tiempo a formatear
	 * @return Retorna tiempo en formato hh:mm:ss
	 */
	public static String formatTime(Date fecha){
		//return formatDateTime(fecha,SIMPLE_TIME_FORMAT);
		return simpleTimeFormat.format(fecha);
	}
	
	/**
	 * Permite obtener fecha/hora formateada en formato especificado
	 * 
	 * @param dateTime Especifica el fecha y hora a formatear
	 * @param formatStr Especifica el formato
	 * @return Retorna fecha y hora formateada 
	 */
	public static String formatDateTime(Date dateTime,String formatStr){			
		SimpleDateFormat fmt = new SimpleDateFormat(formatStr);		
		return fmt.format(dateTime);
	}
	
	/**
	 * Permite formatear un Double a String en formato por defecto  
	 *  
	 * @param amount Valor Double
	 * @return Retorna valor en formato "#0.00"
	 */
	public static String formatFloat(Double amount){
		//return formatDecimal(amount,FLOAT_FORMAT);
		return floatFormat.format(amount);
		
	}
	
	/**
	 * Permite formatear un Double a String en formato de tipo de cambio
	 *  
	 * @param amount Valor Double
	 * @return Retorna valor en formato "#0.0####"
	 */
	public static String formatXC(Double amount){
		//return formatDecimal(amount,XC_FORMAT);
		return xcFormat.format(amount);
	}	
	
	/**
	 * Permite formatear un Double a String en formato decimal con puntos y comas. Ejemplo:Convierte 1200.0 a 1,200.00
	 *  
	 * @param amount Valor Double
	 * @return Retorna valor en formato "#,##0.00" 
	 */
	public static String formatCurrency(Double amount){
		//DecimalFormatSymbols otherSymbols = new DecimalFormatSymbols(Locale.ENGLISH);
		//otherSymbols.setDecimalSeparator('.');
		//otherSymbols.setGroupingSeparator(',');		
		//DecimalFormat df = new DecimalFormat(CURRENCY_FORMAT, currencySymbols);
		//return df.format(amount);
		return currencyFormat.format(amount);
	}
	
	
	/**
	 * Permite formatear un Double a String en formato especificado
	 *  
	 * @param amount Valor Double
	 * @return Retorna valor formateado
	 */
	public static String formatDecimal(Double number,String formatStr){
		//DecimalFormatSymbols otherSymbols = new DecimalFormatSymbols(Locale.ENGLISH);
		//otherSymbols.setDecimalSeparator('.');	
		DecimalFormat df = new DecimalFormat(formatStr,decimalSymbols);
		return df.format(number);		
	}
	
	public static Date getZeroTimeDate(Date fecha) {
	    Date res = fecha;
	    Calendar calendar = Calendar.getInstance();
	    calendar.setTime(fecha);
	    calendar.set(Calendar.HOUR_OF_DAY, 0);
	    calendar.set(Calendar.MINUTE, 0);
	    calendar.set(Calendar.SECOND, 0);
	    calendar.set(Calendar.MILLISECOND, 0);

	    res = calendar.getTime();

	    return res;
	}
	
	/**
	 * Permite convertir un String del formato "#,##0.00" a Double 
	 * 
	 * @param number Valor en String
	 * @return Retorna el valor en Double
	 */
	public static Double parseCurrency(String number) {		
		//DecimalFormatSymbols otherSymbols = new DecimalFormatSymbols(Locale.ENGLISH);
		//otherSymbols.setDecimalSeparator('.');
		//otherSymbols.setGroupingSeparator(',');
		Double value =0.0; 
		try{
			//DecimalFormat df = new DecimalFormat(CURRENCY_FORMAT,currencySymbols);
			value = currencyFormat.parse(number).doubleValue();
		}catch(ParseException e){
			e.printStackTrace();
		}
		
		return value;
		
	}
	
	/**
	 * Completa con ceros a la izquierda hasta completar el tama�o "size"
	 * @param text Texto a completar
	 * @param size Tama�o de texto completado con ceros
	 * @return Texto completado con ceros a la izquierda
	 */
	public static String zeroPad(String text, int size){
		return lPad(text,'0',size);
	}
	
	/**
	 * Completa con espacios a la derecha hasta completar el tama�o "size"
	 * @param text Texto a completar
	 * @param size Tama�o de texto completado con espacios
	 * @return Texto completado con espacios a la derecha
	 */
	public static String spacePad(String text, int size){
		return rPad(text,' ',size);
	}
	
	/**
	 * Completa con caracter "character" a la izquierda hasta completar el tama�o "size"
	 * @param text Texto a completar
	 * @param size Tama�o de texto completado con caracrteres "character"
	 * @return Texto completado con caracteres "character" la izquierda
	 */
	public static String lPad(String text, char character, int size){
		
		String c = Character.toString(character);
		String pad = "";
		for (int i=0;i<size;i++){
			pad = pad + c;
		}
		
		return pad.substring(text.length()) + text;
		
	}
	
	/**
	 * Completa con caracter "character" a la derecha hasta completar el tama�o "size"
	 * @param text Texto a completar
	 * @param size Tama�o de texto completado con caracrteres "character"
	 * @return Texto completado con caracteres "character" la derecha
	 */
	public static String rPad(String text, char character, int size){
		
		String c = Character.toString(character);
		String pad = "";
		for (int i=0;i<size;i++){
			pad = pad + c;
		}
		
		return text+pad.substring(text.length());
		
	}
	
	public static String formatNumeroDocumento(String numDoc){
		String serie = numDoc.substring(0,numDoc.indexOf("-"));
		String correlativo = numDoc.substring(numDoc.indexOf("-")+1);
		return  formatNumeroDocumento(serie,correlativo);
		
	}

	public static String formatNumeroDocumento(String serie,String correlativo){
		
		return  FormatUtil.zeroPad(serie.trim(),4)+"-"+FormatUtil.zeroPad(correlativo.trim(),8);
		
	}
}
