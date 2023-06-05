package com.MVS_Sports.auth.configuration;

import org.springframework.context.annotation.Configuration;

import jakarta.persistence.AttributeConverter;

@Configuration
public class SecretCodeConverter implements AttributeConverter<String, String> {
	
	Character[] arrChar = {'P', '*', 'A', '@', 'O', 'ç', 'B', 'W', '!' ,'-','2', 'c' , '?' , '+', 'ì', '^', '$', 'h', '"', '%' , 'g'};

	@Override
	public String convertToDatabaseColumn(String attribute) {
		//"3852" -> @!UA
		String result = "";
		if(attribute == null) {
			return result;
		}
		
		for (Character c : attribute.toCharArray()) {
			String sc = c+""; // "3" "8" "5" "2"
			int num = Integer.parseInt(sc); // 3 8 5 2
			result += arrChar[num]; // @!UA
		}
		
		return result;
	}

	@Override
	public String convertToEntityAttribute(String dbData) {
		// @!UA -> "3852"
		
		String result = "";
		if(dbData == null) {
			return result;
		}
		
		for (Character c : dbData.toCharArray()) {
			for(int i=0; i<arrChar.length; i++) {
				if(arrChar[i].equals(c)) {
					result += i;
				}
			}
		}
		
		return result;
	}
	
}