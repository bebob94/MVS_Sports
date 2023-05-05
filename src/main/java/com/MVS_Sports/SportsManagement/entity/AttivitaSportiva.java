package com.MVS_Sports.SportsManagement.entity;

import java.time.LocalTime;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
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
@Table(name = "sportActivity")
public class AttivitaSportiva {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String nomeAttivita;
	private String descrizioneAttivita;
	private String indirizzoAttivita;
	private LocalTime orarioApertura;
	private LocalTime orarioChiusura;

	@Enumerated(EnumType.STRING)
	private TipoDiSport tipoDiSport;
	private Long numeroMassimoPartecipanti;
	private LocalTime durataEvento;

	@OneToMany(mappedBy = "event", fetch = FetchType.EAGER)
	private List<Evento> eventi;

	@OneToMany(mappedBy = "review", fetch = FetchType.EAGER)
	private List<Recensione> recensioni;

	

}
