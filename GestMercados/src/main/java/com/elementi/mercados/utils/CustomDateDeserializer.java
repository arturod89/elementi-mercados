package com.elementi.mercados.utils;

import java.io.IOException;
import java.text.ParseException;
import java.util.Date;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;

public class CustomDateDeserializer extends JsonDeserializer<Date> {

	@Override
	public Date deserialize(JsonParser jsonparser, DeserializationContext deserializationcontext)
			throws IOException, JsonProcessingException
	{
		
		if (jsonparser == null){
			return null;
		}
       
        String dateStr = jsonparser.getText();                
        
        if (dateStr==null || dateStr.equals("")){        
        	return null;
        }
        
        Date date;
		try {
			date = FormatUtil.parseDate(dateStr);
		} catch (ParseException e) {
			throw new IOException(e);
		}
        
        return date;
	}


}
