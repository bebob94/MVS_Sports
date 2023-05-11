package com.MVS_Sports.SportsManagement.entity;

import java.time.LocalDateTime;
import java.util.Optional;

import com.MVS_Sports.auth.entity.User;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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
	  	
	  	@Enumerated(EnumType.STRING)
	  	private Valutazione valutazione;
	  	private String testoRecensione;
	  	private LocalDateTime orarioRecensione;
	  	
	  	@ManyToOne
	 	private User user;
	 	
	 	@ManyToOne
	 	private AttivitaSportiva attivitaSportiva;
	 
}
