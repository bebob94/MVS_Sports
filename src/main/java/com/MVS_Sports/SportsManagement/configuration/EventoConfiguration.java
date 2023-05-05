package com.MVS_Sports.SportsManagement.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.Scope;

import com.MVS_Sports.SportsManagement.entity.Evento;

@Configuration
@PropertySource("classpath:application.properties")
public class EventoConfiguration {


	@Bean("Evento")
	@Scope("prototype")
	public Evento customEvento() {
		return new Evento();
	}
}
