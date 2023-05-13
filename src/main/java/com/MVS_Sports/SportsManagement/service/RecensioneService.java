package com.MVS_Sports.SportsManagement.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.MVS_Sports.SportsManagement.Payload.RecensioneDto;
import com.MVS_Sports.SportsManagement.entity.Recensione;
import com.MVS_Sports.SportsManagement.repository.AttivitaSportivaRepository;
import com.MVS_Sports.SportsManagement.repository.RecensioneRepository;
import com.MVS_Sports.auth.repository.UserRepository;

import jakarta.persistence.EntityNotFoundException;

@Service 
public class RecensioneService {

	@Autowired
	RecensioneRepository recensioneRepositoryDao;
	
	@Autowired
	AttivitaSportivaRepository attivitaSportivaRepositoryDao;
	
	@Autowired
	UserRepository userRepositoryDao;
	
	
	
//	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CREA RECENSIONE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	public String creaRecensione(RecensioneDto recensione, Long id1, Long id2) {
		Recensione r = new Recensione();
		if(recensione.getValutazione()>0 &  recensione.getValutazione() <10 ) {
			r.setValutazione(recensione.getValutazione());
			r.setTestoRecensione(recensione.getTestoRecensione());
			r.setOrarioRecensione(LocalDateTime.now());
			r.setAttivitaSportiva(attivitaSportivaRepositoryDao.findById(id2).get());
			r.setUser(userRepositoryDao.findById(id1).get());
			recensioneRepositoryDao.save(r);
			return "Recensione added successfully";
		}else {
			return "error valutation";
		}
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
