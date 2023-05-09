package com.MVS_Sports.SportsManagement.service;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.ObjectProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.MVS_Sports.SportsManagement.entity.AttivitaSportiva;
import com.MVS_Sports.SportsManagement.entity.Recensione;
import com.MVS_Sports.SportsManagement.entity.Valutazione;
import com.MVS_Sports.SportsManagement.repository.RecensioneRepository;

import jakarta.persistence.EntityNotFoundException;

@Service 
public class RecensioneService {

	@Autowired
	RecensioneRepository recensioneRepositoryDao;
	
	
	
//	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CREA RECENSIONE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	public Recensione creaRecensione(Valutazione valutazione, String tr, LocalDateTime orarioRecensione , AttivitaSportiva as) {
		Recensione r = new Recensione();
		r.setValutazione(valutazione);
		r.setTestoRecensione(tr);
		r.setOrarioRecensione(orarioRecensione);
		r.setAttivitaSportiva(as);
		recensioneRepositoryDao.save(r);
		return r;
	}
	
//	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< MODIFICA RECENSIONE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	public Recensione updateRecensione( Recensione r) {
		if (!recensioneRepositoryDao.existsById(r.getId())) {
			throw new EntityNotFoundException("Recensione not exists!!!");
		} else {
			recensioneRepositoryDao.save(r);
			return r;
		}
	}
	
//	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CERCA RECENSIONE PER ID>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	public Recensione findRecensioneById(Long id) {
		if(!recensioneRepositoryDao.existsById(id)) {
			throw new EntityNotFoundException("Recensione not exists!!!");
		}else {
			return recensioneRepositoryDao.findById(id).get();
		}
	}

	
//	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CERCA TUTTE LE RECENSIONI >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	public List<Recensione> findAllRecensione() {
		return (List<Recensione>) recensioneRepositoryDao.findAll();
	}
	
	
//	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< RIMUOVI RECENSIONE>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	public void removeRecensione(Recensione r) {
		if (!recensioneRepositoryDao.existsById(r.getId())) {
			throw new EntityNotFoundException("Recensione not exists!!!");
		} else {
			recensioneRepositoryDao.delete(r);
		}
	}
	
	//	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< RIMUOVI RECENSIONE PER ID >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	public String removeRecensioneById(Long id) {
		if (!recensioneRepositoryDao.existsById(id)) {
			throw new EntityNotFoundException("Recensione not exists!!!");
		} else {
			recensioneRepositoryDao.deleteById(id);
			return "Recensione eliminato";
		}
	}
	
}
