package com.MVS_Sports.SportsManagement.Payload;

import java.time.LocalDateTime;

import lombok.Data;



@Data
public class EventoDto {

	 private LocalDateTime orarioInizio;
	    private Long numeroPartecipanti;
}
