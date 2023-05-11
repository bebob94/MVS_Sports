package com.MVS_Sports.SportsManagement.controller;

import java.time.LocalDateTime;
import java.time.LocalTime;
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

import com.MVS_Sports.SportsManagement.Payload.RecensioneDto;
import com.MVS_Sports.SportsManagement.entity.AttivitaSportiva;
import com.MVS_Sports.SportsManagement.entity.Recensione;
import com.MVS_Sports.SportsManagement.entity.TipoDiSport;
import com.MVS_Sports.SportsManagement.entity.Valutazione;
import com.MVS_Sports.SportsManagement.service.RecensioneService;

@RestController
@RequestMapping("/Recensione")
@CrossOrigin(origins = "*", maxAge = 6000000)
public class RecensioneController {

	@Autowired RecensioneService recensioneService;
	
		//<<<<<<<<<<<<<<<<<<<<<<<<< INIZIO METODI GET>>>>>>>>>>>>>>>>>>>>>>>>>
		@GetMapping("/{id}")
		@PreAuthorize("hasRole('USER') or hasRole('COMPANY_OWNER') or hasRole('ADMIN')")
		public ResponseEntity<Recensione> trovaRecensioneTramiteId(@PathVariable Long id) {
			return new ResponseEntity<Recensione>(recensioneService.findRecensioneById(id),
					HttpStatus.OK);
		}
		
		@GetMapping("/all")
		@PreAuthorize("hasRole('USER') or hasRole('COMPANY_OWNER') or hasRole('ADMIN')")
		public ResponseEntity<List<Recensione>> trovaRecensioneAll() {
			return new ResponseEntity<List<Recensione>>(recensioneService.findAllRecensione(),
					HttpStatus.OK);
		}
		//<<<<<<<<<<<<<<<<<<<<<<<<< FINE METODI GET>>>>>>>>>>>>>>>>>>>>>>>>>
		
		
		//<<<<<<<<<<<<<<<<<<<<<<<<< INIZIO METODI DELETE>>>>>>>>>>>>>>>>>>>>>>>>>
		@DeleteMapping("/{id}")
		@PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
		public ResponseEntity<String> eliminaRecensione( @PathVariable Long id){
			return new ResponseEntity<String>(recensioneService.removeRecensioneById(id), HttpStatus.OK);
		}
		//<<<<<<<<<<<<<<<<<<<<<<<<< FINE METODI DELETE>>>>>>>>>>>>>>>>>>>>>>>>>
		
		
		//<<<<<<<<<<<<<<<<<<<<<<<<< INIZIO METODI PUT>>>>>>>>>>>>>>>>>>>>>>>>>
		@PutMapping()
		@PreAuthorize("hasRole('ADMIN') or hasRole('USER')  or hasRole('COMPANY_OWNER')")
		public ResponseEntity<?> updateRecensione(@RequestBody Recensione r){
			return new ResponseEntity<Recensione>(recensioneService.updateRecensione(r),HttpStatus.OK);
		}
		//<<<<<<<<<<<<<<<<<<<<<<<<< FINE METODI PUT>>>>>>>>>>>>>>>>>>>>>>>>>
		
		
		//<<<<<<<<<<<<<<<<<<<<<<<<< INIZIO METODI POST>>>>>>>>>>>>>>>>>>>>>>>>>
		@PostMapping(value="/add/{id}")
		@PreAuthorize("hasRole('ADMIN') or hasRole('USER')  or hasRole('COMPANY_OWNER')")
		public ResponseEntity<?> postAttivitaSportiva(@RequestBody RecensioneDto recensione, Long id1, Long id2){
			return new ResponseEntity<Recensione>(recensioneService.creaRecensione(recensione, id1, id2),HttpStatus.OK);
		}
		//<<<<<<<<<<<<<<<<<<<<<<<<< FINE METODI POST>>>>>>>>>>>>>>>>>>>>>>>>>
}
