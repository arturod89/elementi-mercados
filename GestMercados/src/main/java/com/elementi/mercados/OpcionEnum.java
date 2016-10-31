package com.elementi.mercados;

public enum OpcionEnum {
		
		MOD_TIP_CAM("MOD_TIP_CAM");
		
		String nombre;
		
		OpcionEnum(String nombre){			
			this.nombre = nombre;
		}
		
		public String getNombre(){
			return this.nombre;
		}
}
