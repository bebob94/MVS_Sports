package com.MVS_Sports.SportsManagement.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.MVS_Sports.SportsManagement.entity.Evento;
import com.MVS_Sports.SportsManagement.service.EventoService;

@RestController
@RequestMapping("/Evento")
@CrossOrigin(origins = "*", maxAge = 6000000)
public class EventoServiceController {

	
	@Autowired EventoService eventoService;
	
	//<<<<<<<<<<<<<<<<<<<<<<<<< INIZIO METODI GET>>>>>>>>>>>>>>>>>>>>>>>>>
		@GetMapping("/{id}")
		@PreAuthorize("hasRole('USER') or hasRole('COMPANY_OWNER') or hasRole('ADMIN')")
		public ResponseEntity<Evento> trovaEventoTramiteId(@PathVariable Long id) {
			return new ResponseEntity<Evento>(eventoService.findEventoById(id),
					HttpStatus.OK);
		}
}
