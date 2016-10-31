package com.elementi.mercados.controller;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class AplicacionesController {
	
	private static final Logger logger = Logger.getLogger(AplicacionesController.class);
	
	@RequestMapping(value="aplicaciones")
	public String home(ModelMap model){

		return "aplicaciones";
	}
	
	
	
}
