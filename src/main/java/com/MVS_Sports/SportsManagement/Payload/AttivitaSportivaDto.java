package com.MVS_Sports.SportsManagement.Payload;

import java.time.Duration;
import java.time.LocalTime;

import com.MVS_Sports.SportsManagement.entity.TipoDiSport;
import com.MVS_Sports.auth.entity.User;

import lombok.Data;


@Data
public class AttivitaSportivaDto {

	private String nomeAttivita;
	private String descrizioneAttivita;
	private String indirizzo;
	private LocalTime orarioApertura;
	private LocalTime orarioChiusura;
	private TipoDiSport tipoDiSport;
	private Long numeroMassimoPartecipanti;
	private Duration durataEvento;
	 private User user;
}
