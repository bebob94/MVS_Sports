package com.MVS_Sports.SportsManagement.Payload;

import java.time.LocalDateTime;

import com.MVS_Sports.SportsManagement.entity.Evento;
import com.MVS_Sports.SportsManagement.entity.TipoNotifica;

import lombok.Data;

@Data
public class NotificaDto {

	private TipoNotifica tipoNotifica;
 	private String testoNotifica;
 	private LocalDateTime orarioNotifica;
 	Evento evento;
}
