package com.elementi.mercados;

public class ErrorCodes {

	//Data errors
	public final static String D_INSERT_ERROR = "D-100";
    public final static String D_UPDATE_ERROR = "D-101";
    public final static String D_DELETE_ERROR = "D-102";
    public final static String D_PK_NOT_DEFINED = "D-103";    
    public final static String D_QUERY_ERROR = "D-104";
    public final static String D_SQL_ERROR = "D-199";
    
    //Service errors
    public final static String S_DB_ERROR = "S-100";
	public final static String S_TIPO_CAMBIO_NO_EXISTE = "S-101";
	public final static String S_FACTOR_RETENCION_NO_EXISTE = "S-102";
	public final static String S_ARCHIVO_GPS_NO_EXISTE = "S-103";
	public static final String S_ERROR_MOVER_ARCHIVO_GPS="S-104";
	public static final String S_ERROR_REPORTE_VERIFICACION="S-105";
	public static final String S_PROCESO_CARGA_NO_EXISTE="S-106";
	public static final String S_ERROR_CREACION_DOCUMENTO="S-107";
	public static final String S_ERROR_MODIFICACION_DOCUMENTO="S-108";
	public static final String S_DOCUMENTO_NO_EXISTE="S-109";
	public static final String S_ERROR_ELIMINACION_DOCUMENTO="S-110";
	public static final String S_ERROR_REPORTE19="S-111";
	public static final String S_ERROR_REPORTE21="S-112";
	public static final String S_ERROR_REPORTE_COMP="S-113";
	public static final String S_ERROR_CREACION_PROCESO_CARGA="S-114";
	public static final String S_ERROR_APROBACION_PDT="S-115";
	public static final String S_APROBACION_PROCESO_PDT_EXISTE="S-116";
	public static final String S_ERROR_GENERACION_PDT="S-117";
	public static final String S_ERROR_DOC_REL_EXISTE="S-118";
	public final static String S_OTHER_ERROR = "S-199";
	
	public static final String S_DOCUMENTOS_NO_ENCONTRADOS="S-301";
	public static final String S_ERROR_OBTENER_CORRELATIVO="S-302";
	public static final String S_ERROR_ACTUALIZAR_SERIE_CORR="S-303";
	public static final String S_ERROR_OBTENER_VALID_CERT="S-304";
	public static final String S_ERROR_ELIMINACION_PROC_GEN_CERT="S-305";
	public static final String S_ERROR_ELIMINACION_PROVEEDORES="S-306";
	
	
	//View Validation errors
	public static final String V_FORMATO_ARCHIVO_GPS_INVALIDO="V-100";
	public static final String V_NOMBRE_ARCHIVO_GPS_INVALIDO="V-101";	
	public static final String V_ARCHIVO_GPS_EXISTE="V-102";
	public static final String V_FECHA_PROCESO_INVALIDA="V-301";
	public static final String V_NO_EXISTE_PROCESO_CARGA="V-302";
	public static final String V_FECHA_DE_REG_INVALIDA="V-303";
	public static final String V_FORMATO_ARCHIVO_PROVEEDORES_INVALIDO="V-304";
	
	public final static String U_ERROR_FECHA = "U-200";
	
	
}
