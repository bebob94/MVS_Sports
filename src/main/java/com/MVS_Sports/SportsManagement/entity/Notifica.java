package com.MVS_Sports.SportsManagement.entity;

import java.time.LocalDateTime;
import java.util.List;

import com.MVS_Sports.auth.entity.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
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
@Table(name = "notifica")
public class Notifica {

	 	@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	 	
	 	@Enumerated(EnumType.STRING)
	 	private TipoNotifica tipoNotifica;
	 	private LocalDateTime orarioNotifica;
	 
	 	@JsonIgnoreProperties({"users", "recensioni", "attivitaSportiva", "notifica"})
	 	@OneToOne(cascade = CascadeType.ALL)
	 	private Evento evento;
	 	
	 	@JsonIgnore
	 	@ManyToOne
	 	private AttivitaSportiva attivitaSportiva;
	 	
	 	
}
