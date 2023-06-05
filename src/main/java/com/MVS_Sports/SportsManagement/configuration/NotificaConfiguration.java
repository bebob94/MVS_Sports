package com.MVS_Sports.SportsManagement.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.Scope;

import com.MVS_Sports.SportsManagement.entity.Notifica;


@Configuration
@PropertySource("classpath:application.properties")
public class NotificaConfiguration {

	
	@Bean("Notifica")
	@Scope("prototype")
	public Notifica customNotifica() {
		return new Notifica();
	}
}
