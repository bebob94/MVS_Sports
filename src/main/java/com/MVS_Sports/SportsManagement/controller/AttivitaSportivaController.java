package com.MVS_Sports.SportsManagement.controller;

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

import com.MVS_Sports.SportsManagement.entity.AttivitaSportiva;
import com.MVS_Sports.SportsManagement.entity.TipoDiSport;
import com.MVS_Sports.SportsManagement.service.AttivitaSportivaService;
import com.MVS_Sports.auth.entity.User;


@RestController
@RequestMapping("/AttivitaSportiva")
@CrossOrigin(origins = "*", maxAge = 6000000)
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
	public ResponseEntity<List<AttivitaSportiva>> trovaAttivitaSportivaByTipoDiSport(@PathVariable String imp) {
		return new ResponseEntity<List<AttivitaSportiva>>(attivitaSportivaService.findByTipoDiSportContains(imp),
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
	@PreAuthorize("hasRole('ADMIN')  or hasRole('COMPANY_OWNER')")
	public ResponseEntity<?> updateAttivitaSportiva(@RequestBody AttivitaSportiva as){
		return new ResponseEntity<AttivitaSportiva>(attivitaSportivaService.updateAttivitaSportiva(as),HttpStatus.OK);
	}
	//<<<<<<<<<<<<<<<<<<<<<<<<< FINE METODI PUT>>>>>>>>>>>>>>>>>>>>>>>>>
	
	
	//<<<<<<<<<<<<<<<<<<<<<<<<< INIZIO METODI POST>>>>>>>>>>>>>>>>>>>>>>>>>
	@PostMapping("/{nome}/{descrizione}/{indirizzo}/{orarioApertura}/{orarioChiusura}/{tipoDiSport}/{users}")
	@PreAuthorize("hasRole('ADMIN') or hasRole('COMPANY_OWNER')")
	public ResponseEntity<?> postAttivitaSportiva(@PathVariable String nome,@PathVariable String descrizione,@PathVariable String indirizzo,@PathVariable LocalTime oa,@PathVariable LocalTime oc,@PathVariable TipoDiSport tds,@PathVariable User user){
		return new ResponseEntity<AttivitaSportiva>(attivitaSportivaService.creaAttivitaSportiva(nome, descrizione, indirizzo, oa, oc, tds, user),HttpStatus.OK);
	}
	//<<<<<<<<<<<<<<<<<<<<<<<<< FINE METODI POST>>>>>>>>>>>>>>>>>>>>>>>>>
}
