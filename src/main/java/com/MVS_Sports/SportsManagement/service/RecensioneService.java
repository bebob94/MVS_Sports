package com.MVS_Sports.SportsManagement.service;

import java.util.List;

import org.springframework.beans.factory.ObjectProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.MVS_Sports.SportsManagement.entity.Recensione;
import com.MVS_Sports.SportsManagement.repository.RecensioneRepository;

import jakarta.persistence.EntityNotFoundException;

@Service 
public class RecensioneService {

	@Autowired
	RecensioneRepository recensioneRepositoryDao;
	
	@Autowired
	@Qualifier("Recensione")
	private ObjectProvider<Recensione> RecensioneProvider;
	
//	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< SALVA RECENSIONE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	public void saveRecensione(Recensione r) {
		recensioneRepositoryDao.save(r);
	}
	
//	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CREA RECENSIONE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	public void creaRecensione() {
		saveRecensione(RecensioneProvider.getObject());
	}
	
//	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< MODIFICA RECENSIONE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	public void updateRecensione( Recensione r) {
		if (!recensioneRepositoryDao.existsById(r.getId())) {
			throw new EntityNotFoundException("Recensione not exists!!!");
		} else {
			recensioneRepositoryDao.save(r);
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

	
//	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CERCA TUTTE LE RECENSIONi >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
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
