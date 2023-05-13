package com.MVS_Sports.SportsManagement.entity;

import java.time.LocalDateTime;

import com.MVS_Sports.auth.entity.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name = "recensione")
public class Recensione {

	  	@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	  	
	  	
	  	private Integer valutazione;
	  	private String testoRecensione;
	  	private LocalDateTime orarioRecensione;
	  	
	  	@JsonIgnoreProperties({"eventi","recensioni", "users", "roles","password","pagamenti","notifiche","attivitaSportive","recensioni","creditCard"})
	  	@ManyToOne
	 	private User user;
	 	
	  	@JsonIgnoreProperties({"eventi", "users" , "recensioni"})
	 	@ManyToOne
	 	private AttivitaSportiva attivitaSportiva;
	 
}
