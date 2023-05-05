package com.MVS_Sports.SportsManagement.service;

import java.util.List;

import org.springframework.beans.factory.ObjectProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.MVS_Sports.SportsManagement.entity.Evento;
import com.MVS_Sports.SportsManagement.repository.EventoRepository;

import jakarta.persistence.EntityNotFoundException;

@Service 
public class EventoService {

	@Autowired
	EventoRepository eventoRepositoryDao;
	
	@Autowired
	@Qualifier("Evento")
	private ObjectProvider<Evento> EventoProvider;
	
//	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< SALVA EVENTO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	public void saveEvento(Evento e) {
		eventoRepositoryDao.save(e);
	}
	
//	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CREA EVENTO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	public void creaEvento() {
		saveEvento( EventoProvider.getObject());
	}
	
//	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< MODIFICA EVENTO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	public void updateAttivitaSportiva( Evento e) {
		if (!eventoRepositoryDao.existsById(e.getId())) {
			throw new EntityNotFoundException("Evento not exists!!!");
		} else {
			eventoRepositoryDao.save(e);
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
