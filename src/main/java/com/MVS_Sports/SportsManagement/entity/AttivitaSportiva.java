package com.MVS_Sports.SportsManagement.entity;

import java.time.Duration;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

import com.MVS_Sports.auth.entity.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
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
@Table(name = "attivitaSportiva")
public class AttivitaSportiva {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String nomeAttivita;
	private String descrizioneAttivita;
	private String indirizzo;
	private LocalTime orarioApertura;
	private LocalTime orarioChiusura;

	@Enumerated(EnumType.STRING)
	private TipoDiSport tipoDiSport;
	private Long numeroMassimoPartecipanti;
	private Duration durataEvento;

	@OneToMany(mappedBy = "attivitaSportiva", fetch = FetchType.EAGER)
	private List<Evento> eventi;

	@OneToMany(mappedBy = "attivitaSportiva", fetch = FetchType.EAGER)
	private List<Recensione> recensioni;
	
	@JsonIgnoreProperties({"roles","password","pagamenti","notifiche","attivitaSportive","recensioni","creditCard"})
	 @OneToOne
	 private User user;

}
