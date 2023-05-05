package com.MVS_Sports.SportsManagement.service;

import java.util.List;

import org.springframework.beans.factory.ObjectProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.MVS_Sports.SportsManagement.entity.AttivitaSportiva;
import com.MVS_Sports.SportsManagement.repository.AttivitaSportivaRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class AttivitaSportivaService {

	@Autowired
	AttivitaSportivaRepository attivitaSportivaRepositoryDao;
	
	@Autowired
	@Qualifier("AttivitaSportiva")
	private ObjectProvider<AttivitaSportiva> AttivitaSportivaProvider;
	
//	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< SALVA ATTIVITA SPORTIVA >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	public void saveAttivitaSportiva(AttivitaSportiva as) {
		attivitaSportivaRepositoryDao.save(as);
	}
	
//	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CREA ATTIVITA SPORTIVA >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	public void creaAttivitaSportiva() {
		saveAttivitaSportiva(AttivitaSportivaProvider.getObject());
	}
	
//	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< MODIFICA ATTIVITA SPORTIVA >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	public void updateAttivitaSportiva( AttivitaSportiva as) {
		if (!attivitaSportivaRepositoryDao.existsById(as.getId())) {
			throw new EntityNotFoundException("AttivitaSportiva not exists!!!");
		} else {
			attivitaSportivaRepositoryDao.save(as);
		}
	}
	
//	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CERCA ATTIVITA SPORTIVA PER ID>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	public AttivitaSportiva findAttivitaSportivaById(Long id) {
		if(!attivitaSportivaRepositoryDao.existsById(id)) {
			throw new EntityNotFoundException("AttivitaSportiva not exists!!!");
		}else {
			return attivitaSportivaRepositoryDao.findById(id).get();
		}
	}

	
//	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CERCA TUTTE LE ATTIVITA SPORTIVE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	public List<AttivitaSportiva> findAllAttivitaSportiva() {
		return (List<AttivitaSportiva>) attivitaSportivaRepositoryDao.findAll();
	}
	
	
//	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< RIMUOVI ATTIVITA SPORTIVA>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	public void removeAttivitaSportiva(AttivitaSportiva as) {
		if (!attivitaSportivaRepositoryDao.existsById(as.getId())) {
			throw new EntityNotFoundException("AttivitaSportiva not exists!!!");
		} else {
			attivitaSportivaRepositoryDao.delete(as);
		}
	}
	
	//	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< RIMUOVI ATTIVITA SPORTIVA PER ID >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	public String removeAttivitaSportivaById(Long id) {
		if (!attivitaSportivaRepositoryDao.existsById(id)) {
			throw new EntityNotFoundException("AttivitaSportiva not exists!!!");
		} else {
			attivitaSportivaRepositoryDao.deleteById(id);
			return "AttivitaSportiva eliminato";
		}
	}
	
	
}
