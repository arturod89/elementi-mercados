package com.elementi.mercados.controller.response;

import java.util.List;

public class PostResponse<T> {

	private String code;
	private String description;
	
	private List<ValidationErrorMessage> validationErrorMessageList;
	
	private T object;
	
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public List<ValidationErrorMessage> getValidationErrorMessageList() {
		return validationErrorMessageList;
	}
	public void setValidationErrorMessageList(
			List<ValidationErrorMessage> validationErrorMessageList) {
		this.validationErrorMessageList = validationErrorMessageList;
	}
	public T getObject() {
		return object;
	}
	public void setObject(T object) {
		this.object = object;
	}
	
	
}
