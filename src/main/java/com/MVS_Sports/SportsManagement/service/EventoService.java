package com.MVS_Sports.SportsManagement.service;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.MVS_Sports.SportsManagement.entity.AttivitaSportiva;
import com.MVS_Sports.SportsManagement.entity.Evento;
import com.MVS_Sports.SportsManagement.entity.Notifica;
import com.MVS_Sports.SportsManagement.entity.TipoNotifica;
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
	NotificaRepository notificaRepository;
	
//	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CREA EVENTO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	public Evento creaEvento(LocalTime oi, Long np, AttivitaSportiva attivitaSportiva, User userCreatore ,String testoNotifica) {
		Evento e = new Evento();
		e.setUserCreatore(userCreatore);;
		e.setAttivitaSportiva(attivitaSportiva);
		e.setOrarioInizio(oi);
		e.setOrarioFine(oi.plus(e.getAttivitaSportiva().getDurataEvento()));
		e.setNumeroPartecipanti(np);
		
		Notifica n = new Notifica();
		n.setTipoNotifica(TipoNotifica.NUOVO_EVENTO_AVVIATO);
		n.setOrarioNotifica(LocalDateTime.now());
		n.setTestoNotifica(testoNotifica);
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
