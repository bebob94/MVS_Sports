package com.MVS_Sports.SportsManagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.MVS_Sports.SportsManagement.entity.Notifica;
import com.MVS_Sports.SportsManagement.service.NotificaService;

@RestController
@RequestMapping("/Notifica")
@CrossOrigin(origins = "http://localhost:3000", maxAge = 6000000)
public class NotificaController {

	@Autowired NotificaService notificaService;
	
		//<<<<<<<<<<<<<<<<<<<<<<<<< INIZIO METODI GET>>>>>>>>>>>>>>>>>>>>>>>>>
			@GetMapping("/{id}")
			@PreAuthorize("hasRole('USER') or hasRole('COMPANY_OWNER') or hasRole('ADMIN')")
			public ResponseEntity<Notifica> trovaEventoTramiteId(@PathVariable Long id) {
				return new ResponseEntity<Notifica>(notificaService.findNotificaById(id),
						HttpStatus.OK);
			}
			
			@GetMapping("/all")
			@PreAuthorize("hasRole('USER') or hasRole('COMPANY_OWNER') or hasRole('ADMIN')")
			public ResponseEntity<List<Notifica>> trovaEventoAll() {
				return new ResponseEntity<List<Notifica>>(notificaService.findAllNotifica(),
						HttpStatus.OK);
			}
			//<<<<<<<<<<<<<<<<<<<<<<<<< FINE METODI GET>>>>>>>>>>>>>>>>>>>>>>>>>
}
