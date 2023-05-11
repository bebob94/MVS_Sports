package com.MVS_Sports.SportsManagement.controller;

import java.time.LocalTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.MVS_Sports.SportsManagement.Payload.EventoDto;
import com.MVS_Sports.SportsManagement.Payload.NotificaDto;
import com.MVS_Sports.SportsManagement.entity.AttivitaSportiva;
import com.MVS_Sports.SportsManagement.entity.Evento;
import com.MVS_Sports.SportsManagement.entity.TipoDiSport;
import com.MVS_Sports.SportsManagement.service.EventoService;
import com.MVS_Sports.auth.entity.User;

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
		
		@GetMapping("/all")
		@PreAuthorize("hasRole('USER') or hasRole('COMPANY_OWNER') or hasRole('ADMIN')")
		public ResponseEntity<List<Evento>> trovaEventoAll() {
			return new ResponseEntity<List<Evento>>(eventoService.findAllEvento(),
					HttpStatus.OK);
		}
		//<<<<<<<<<<<<<<<<<<<<<<<<< FINE METODI GET>>>>>>>>>>>>>>>>>>>>>>>>>
		
		
		//<<<<<<<<<<<<<<<<<<<<<<<<< INIZIO METODI PUT>>>>>>>>>>>>>>>>>>>>>>>>>
		@PutMapping()
		@PreAuthorize("hasRole('ADMIN')  or hasRole('COMPANY_OWNER') or hasRole('ADMIN')")
		public ResponseEntity<?> updateEvento(@RequestBody Evento e, List<User> users){
			return new ResponseEntity<Evento>(eventoService.updateEvento(e,users),HttpStatus.OK);
		}
		//<<<<<<<<<<<<<<<<<<<<<<<<< FINE METODI PUT>>>>>>>>>>>>>>>>>>>>>>>>>
		
		
		//<<<<<<<<<<<<<<<<<<<<<<<<< INIZIO METODI POST>>>>>>>>>>>>>>>>>>>>>>>>>
		@PostMapping(value="/add/{id}")
		@PreAuthorize("hasRole('ADMIN') or hasRole('COMPANY_OWNER') or hasRole('ADMIN')")
		public ResponseEntity<?> postEvento(@RequestBody EventoDto evento, Long id1, Long id2 , NotificaDto notifica){
			return new ResponseEntity<Evento>(eventoService.creaEvento(evento, id1, id2, notifica),HttpStatus.OK);
		}
		//<<<<<<<<<<<<<<<<<<<<<<<<< FINE METODI POST>>>>>>>>>>>>>>>>>>>>>>>>>
}
