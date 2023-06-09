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

import com.MVS_Sports.SportsManagement.Payload.AttivitaSportivaDto;
import com.MVS_Sports.SportsManagement.entity.AttivitaSportiva;
import com.MVS_Sports.SportsManagement.entity.TipoDiSport;
import com.MVS_Sports.SportsManagement.service.AttivitaSportivaService;


@RestController
@RequestMapping("/api/AttivitaSportiva")
@CrossOrigin(origins = "http://localhost:3000", maxAge = 6000000, allowCredentials = "true")
public class AttivitaSportivaController {

	@Autowired
	AttivitaSportivaService attivitaSportivaService;

	//<<<<<<<<<<<<<<<<<<<<<<<<< INIZIO METODI GET>>>>>>>>>>>>>>>>>>>>>>>>>
	@GetMapping("/{id}")
	@PreAuthorize("hasRole('USER') or hasRole('COMPANY_OWNER') or hasRole('ADMIN')")
	public ResponseEntity<AttivitaSportiva> trovaAttivitaSportivaTramiteId(@PathVariable Long id) {
		return new ResponseEntity<AttivitaSportiva>(attivitaSportivaService.findAttivitaSportivaById(id),
				HttpStatus.OK);
	}

	@GetMapping("/all")
	@PreAuthorize("hasRole('USER') or hasRole('COMPANY_OWNER') or hasRole('ADMIN')")
	public ResponseEntity<List<AttivitaSportiva>> trovaAttivitaSportivaAll() {
		return new ResponseEntity<List<AttivitaSportiva>>(attivitaSportivaService.findAllAttivitaSportiva(),
				HttpStatus.OK);
	}

	@GetMapping("/tipoDiSport/{imp}")
	@PreAuthorize("hasRole('USER') or hasRole('COMPANY_OWNER') or hasRole('ADMIN')")
	public ResponseEntity<List<AttivitaSportiva>> trovaAttivitaSportivaByTipoDiSport(@PathVariable TipoDiSport imp) {
		return new ResponseEntity<List<AttivitaSportiva>>(attivitaSportivaService.findByTipoDiSport(imp),
				HttpStatus.OK);
	}
	
	@GetMapping("/name/{imp}")
	@PreAuthorize("hasRole('USER') or hasRole('COMPANY_OWNER') or hasRole('ADMIN')")
	public ResponseEntity<List<AttivitaSportiva>> trovaAttivitaSportivaByName(@PathVariable String imp) {
		return new ResponseEntity<List<AttivitaSportiva>>(attivitaSportivaService.findByNomeAttivitaContains(imp),
				HttpStatus.OK);
	}
	
	@GetMapping("/indirizzo/{imp}")
	@PreAuthorize("hasRole('USER') or hasRole('COMPANY_OWNER') or hasRole('ADMIN')")
	public ResponseEntity<List<AttivitaSportiva>> trovaAttivitaSportivaByIndirizzo(@PathVariable String imp) {
		return new ResponseEntity<List<AttivitaSportiva>>(attivitaSportivaService.findByIndirizzo(imp),
				HttpStatus.OK);
	}
	//<<<<<<<<<<<<<<<<<<<<<<<<< FINE METODI GET>>>>>>>>>>>>>>>>>>>>>>>>>

	
	//<<<<<<<<<<<<<<<<<<<<<<<<< INIZIO METODI DELETE>>>>>>>>>>>>>>>>>>>>>>>>>
	@DeleteMapping("/{id}")
	@PreAuthorize("hasRole('ADMIN') or hasRole('COMPANY_OWNER')")
	public ResponseEntity<String> eliminaAttivitaSportiva( @PathVariable Long id){
		return new ResponseEntity<String>(attivitaSportivaService.removeAttivitaSportivaById(id), HttpStatus.OK);
	}
	//<<<<<<<<<<<<<<<<<<<<<<<<< FINE METODI DELETE>>>>>>>>>>>>>>>>>>>>>>>>>
	
	
	//<<<<<<<<<<<<<<<<<<<<<<<<< INIZIO METODI PUT>>>>>>>>>>>>>>>>>>>>>>>>>
	@PutMapping()
	@PreAuthorize("  hasRole('ADMIN')  or hasRole('COMPANY_OWNER')")
	public ResponseEntity<?> updateAttivitaSportiva(@RequestBody AttivitaSportiva as) {
	    AttivitaSportiva existingAttivita = attivitaSportivaService.findAttivitaSportivaById(as.getId());

	    if (existingAttivita != null) {
	        existingAttivita.setNomeAttivita(as.getNomeAttivita());
	        existingAttivita.setDescrizioneAttivita(as.getDescrizioneAttivita());
	        existingAttivita.setIndirizzo(as.getIndirizzo());

	        AttivitaSportiva updatedAttivita = attivitaSportivaService.updateAttivitaSportiva(existingAttivita);

	        return new ResponseEntity<AttivitaSportiva>(updatedAttivita, HttpStatus.OK);
	    } else {
	        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	}
	//<<<<<<<<<<<<<<<<<<<<<<<<< FINE METODI PUT>>>>>>>>>>>>>>>>>>>>>>>>>
	
	
	//<<<<<<<<<<<<<<<<<<<<<<<<< INIZIO METODI POST>>>>>>>>>>>>>>>>>>>>>>>>>
	@PostMapping(value="/add/{id}")
	@PreAuthorize("hasRole('ADMIN') or hasRole('COMPANY_OWNER')")
	public ResponseEntity<String> postAttivitaSportiva(@RequestBody AttivitaSportivaDto attivitaSportiva, @PathVariable Long id){
		return new ResponseEntity<String>(attivitaSportivaService.creaAttivitaSportiva(attivitaSportiva, id),HttpStatus.CREATED);
	}
	//<<<<<<<<<<<<<<<<<<<<<<<<< FINE METODI POST>>>>>>>>>>>>>>>>>>>>>>>>>
}
