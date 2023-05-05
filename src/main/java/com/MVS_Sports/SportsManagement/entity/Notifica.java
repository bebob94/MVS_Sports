package com.MVS_Sports.SportsManagement.entity;

import java.time.LocalDateTime;

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
@Table(name = "notification")
public class Notifica {

	 	@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	 	
	 	@Enumerated(EnumType.STRING)
	 	private TipoNotifica tipoNotifica;
	 	private String testoNotifica;
	 	private LocalDateTime orarioNotifica;
	 	
	 	@ManyToOne
	 	private User user;
	 	
	 	@ManyToOne
	 	private AttivitaSportiva attivitaSportiva;
	 
}
