package com.MVS_Sports.SportsManagement.Payload;


import java.time.LocalDateTime;

import com.MVS_Sports.SportsManagement.entity.Valutazione;

import lombok.Data;

@Data
public class RecensioneDto {

	private Valutazione valutazione;
  	private String testoRecensione;
  	private LocalDateTime orarioRecensione;
  	
}
