package com.MVS_Sports.SportsManagement.Payload;

import java.time.LocalTime;

import com.MVS_Sports.SportsManagement.entity.TipoDiSport;

import lombok.Data;


@Data
public class AttivitaSportivaDto {

	private String nomeAttivita;
	private String descrizioneAttivita;
	private String indirizzo;
	private LocalTime orarioApertura;
	private LocalTime orarioChiusura;
	private TipoDiSport tipoDiSport;
}
