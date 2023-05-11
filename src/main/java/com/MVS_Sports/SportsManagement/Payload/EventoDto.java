package com.MVS_Sports.SportsManagement.Payload;

import java.time.LocalTime;

import com.MVS_Sports.SportsManagement.entity.Notifica;
import lombok.Data;

@Data
public class EventoDto {

	 private LocalTime orarioInizio;
	    private LocalTime orarioFine;
	    private Long numeroPartecipanti;
	 	private Notifica notifica;
}
