package com.MVS_Sports.SportsManagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.MVS_Sports.SportsManagement.Payload.EventoDto;
import com.MVS_Sports.SportsManagement.entity.Evento;
import com.MVS_Sports.SportsManagement.service.EventoService;
import com.MVS_Sports.auth.entity.User;

@RestController
@RequestMapping("api/Evento")
@CrossOrigin(origins = "http://localhost:3000", maxAge = 6000000)
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
		public ResponseEntity<?> updateEvento(@RequestBody Evento e){
			Evento existingEvento = eventoService.findEventoById(e.getId());
			
			if(existingEvento !=null) {
				existingEvento.setNumeroPartecipanti(e.getNumeroPartecipanti());
				
				Evento updateEvento = eventoService.updateEvento(existingEvento);
				
				return new ResponseEntity<Evento>(updateEvento,HttpStatus.OK);
			}else {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
			
		}
		//<<<<<<<<<<<<<<<<<<<<<<<<< FINE METODI PUT>>>>>>>>>>>>>>>>>>>>>>>>>
		
		
		//<<<<<<<<<<<<<<<<<<<<<<<<< INIZIO METODI POST>>>>>>>>>>>>>>>>>>>>>>>>>
		@PostMapping(value="/add/{id1}/{id2}")
		@PreAuthorize("hasRole('ADMIN') or hasRole('COMPANY_OWNER') or hasRole('ADMIN')")
		public ResponseEntity<String> postEvento(@RequestBody EventoDto evento ,@PathVariable Long id1, @PathVariable Long id2 ){
			return new ResponseEntity<String>(eventoService.creaEvento(evento, id1, id2),HttpStatus.CREATED);
		}
		//<<<<<<<<<<<<<<<<<<<<<<<<< FINE METODI POST>>>>>>>>>>>>>>>>>>>>>>>>>
		
		
		//<<<<<<<<<<<<<<<<<<<<<<<<< INIZIO METODI DELETE>>>>>>>>>>>>>>>>>>>>>>>>>
		@DeleteMapping("/{id}")
		@PreAuthorize("hasRole('ADMIN') or hasRole('COMPANY_OWNER') or hasRole('ADMIN')")
		public ResponseEntity<String> eliminaEvento( @PathVariable Long id){
			return new ResponseEntity<String>(eventoService.removeEventoById(id), HttpStatus.OK);
		}
		//<<<<<<<<<<<<<<<<<<<<<<<<< FINE METODI DELETE>>>>>>>>>>>>>>>>>>>>>>>>>
}
