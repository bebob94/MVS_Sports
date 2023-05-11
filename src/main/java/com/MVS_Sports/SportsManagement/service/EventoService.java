package com.MVS_Sports.SportsManagement.service;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.MVS_Sports.SportsManagement.Payload.EventoDto;
import com.MVS_Sports.SportsManagement.Payload.NotificaDto;
import com.MVS_Sports.SportsManagement.entity.AttivitaSportiva;
import com.MVS_Sports.SportsManagement.entity.Evento;
import com.MVS_Sports.SportsManagement.entity.Notifica;
import com.MVS_Sports.SportsManagement.entity.TipoNotifica;
import com.MVS_Sports.SportsManagement.repository.AttivitaSportivaRepository;
import com.MVS_Sports.SportsManagement.repository.EventoRepository;
import com.MVS_Sports.SportsManagement.repository.NotificaRepository;
import com.MVS_Sports.auth.entity.User;
import com.MVS_Sports.auth.repository.UserRepository;

import jakarta.persistence.EntityNotFoundException;

@Service 
public class EventoService {

	@Autowired
	EventoRepository eventoRepositoryDao;
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	AttivitaSportivaRepository attivitaSportivaRepository;
	
	@Autowired
	NotificaRepository notificaRepository;
	
//	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CREA EVENTO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	public Evento creaEvento(EventoDto evento, Long id1, Long id2 , NotificaDto notifica) {
		
		Evento e = new Evento();
		e.setUserCreatore(userRepository.findById(id1).get());;
		AttivitaSportiva attivitaSportiva = attivitaSportivaRepository.findById(id2).get();
		e.setAttivitaSportiva(attivitaSportiva);
		LocalTime orarioInizio = evento.getOrarioInizio();
		e.setOrarioInizio(orarioInizio);
		e.setOrarioFine(orarioInizio.plus(e.getAttivitaSportiva().getDurataEvento()));
		e.setNumeroPartecipanti(evento.getNumeroPartecipanti());
		
		Notifica n = new Notifica();
		n.setTipoNotifica(notifica.getTipoNotifica());
		n.setOrarioNotifica(LocalDateTime.now());
		n.setTestoNotifica(notifica.getTestoNotifica());
		n.setAttivitaSportiva(attivitaSportiva);
		n.setUsers(userRepository.findAll());
		notificaRepository.save(n);
		eventoRepositoryDao.save(e);
		return e;
	}
	
//	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< MODIFICA EVENTO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	public Evento updateEvento( Evento e, List<User> users) {
		if (!eventoRepositoryDao.existsById(e.getId())) {
			throw new EntityNotFoundException("Evento not exists!!!");
		} else {
			e.setUsers(users);
			eventoRepositoryDao.save(e);
			return e;
		}
	}
	
//	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CERCA EVENTO PER ID>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	public Evento findEventoById(Long id) {
		if(!eventoRepositoryDao.existsById(id)) {
			throw new EntityNotFoundException("Evento not exists!!!");
		}else {
			return eventoRepositoryDao.findById(id).get();
		}
	}

	
//	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CERCA TUTTE GLI EVENTI >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	public List<Evento> findAllEvento() {
		return (List<Evento>) eventoRepositoryDao.findAll();
	}
	
	
//	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< RIMUOVI EVENTO>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	public void removeEvento(Evento e) {
		if (!eventoRepositoryDao.existsById(e.getId())) {
			throw new EntityNotFoundException("Evento not exists!!!");
		} else {
			eventoRepositoryDao.delete(e);
		}
	}
	
	//	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< RIMUOVI EVENTO PER ID >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	public String removeEventoById(Long id) {
		if (!eventoRepositoryDao.existsById(id)) {
			throw new EntityNotFoundException("Evento not exists!!!");
		} else {
			
			eventoRepositoryDao.deleteById(id);
			return "Evento eliminato";
		}
	}
	
	
}
