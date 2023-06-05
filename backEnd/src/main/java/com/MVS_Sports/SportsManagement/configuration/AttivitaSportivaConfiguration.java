package com.MVS_Sports.SportsManagement.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.Scope;

import com.MVS_Sports.SportsManagement.entity.AttivitaSportiva;


@Configuration
@PropertySource("classpath:application.properties")
public class AttivitaSportivaConfiguration {

	
	@Bean("AttivitaSportiva")
	@Scope("prototype")
	public AttivitaSportiva customAttivitaSportiva() {
		return new AttivitaSportiva();
	}
}
