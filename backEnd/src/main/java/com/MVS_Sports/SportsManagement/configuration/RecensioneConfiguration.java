package com.MVS_Sports.SportsManagement.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.Scope;

import com.MVS_Sports.SportsManagement.entity.Recensione;

@Configuration
@PropertySource("classpath:application.properties")
public class RecensioneConfiguration {

	
	@Bean("Recensione")
	@Scope("prototype")
	public Recensione customRecensione() {
		return new Recensione();
	}
}
