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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.MVS_Sports.SportsManagement.entity.Notifica;
import com.MVS_Sports.SportsManagement.service.NotificaService;

import jakarta.persistence.EntityNotFoundException;

@RestController
@RequestMapping("/api/Notifica")
@CrossOrigin(origins = "*", maxAge = 6000000)
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
			
			//<<<<<<<<<<<<<<<<<<<<<<<<< INIZIO METODI DELETE>>>>>>>>>>>>>>>>>>>>>>>>>
			@DeleteMapping("/user/{usersId}")
			@PreAuthorize("hasRole('ADMIN') or hasRole('COMPANY_OWNER') or hasRole('ADMIN')")
			public ResponseEntity<String> deleteNotificationsByUserId(@PathVariable Long usersId) {
			    try {
			        notificaService.removeNotificheByUserId(usersId);
			        return new ResponseEntity<>("Notifiche eliminate per l'utente con ID: " + usersId, HttpStatus.OK);
			    } catch (EntityNotFoundException e) {
			        return new ResponseEntity<>("L'utente con ID " + usersId + " non ha notifiche.", HttpStatus.NOT_FOUND);
			    }
			}
			//<<<<<<<<<<<<<<<<<<<<<<<<< FINE METODI DELETE>>>>>>>>>>>>>>>>>>>>>>>>>
}
