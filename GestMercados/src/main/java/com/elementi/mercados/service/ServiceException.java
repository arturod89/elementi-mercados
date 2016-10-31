package com.elementi.mercados.service;

import com.elementi.mercados.utils.MessageHandler;

public class ServiceException extends Exception{
	private static final long serialVersionUID = 1L;
	        
    private String errorCode;
    private String message;
    
    public ServiceException(String errorCode) {
        this(errorCode, null);
    }
    
    public ServiceException(String errorCode,String message) {
        this.errorCode = errorCode;
        this.message = message;
    }
    
    public String getErrorCode() {
        return errorCode;
    }

    @Override
	public String getMessage() {
    	if (message!=null)
    		//Retorna mensaje customizado
    		return message;
    	else 
    		// retorna generico
    		return MessageHandler.getMessage(errorCode);
	}
}
