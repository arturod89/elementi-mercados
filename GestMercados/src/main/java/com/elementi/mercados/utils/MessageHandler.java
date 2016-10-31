package com.elementi.mercados.utils;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class MessageHandler {

	public static String getMessage(String code){
		  
	    Properties prop = new Properties();
		String message=null;
		
		try{
			InputStream stream = MessageHandler.class.getClassLoader().getResourceAsStream("messages.properties");
			prop.load(stream);
			message = prop.getProperty(code);
		}catch(IOException ie){	}
		
		return message;
	
	}
}
