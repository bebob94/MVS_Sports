package com.MVS_Sports.SportsManagement.service;

import java.time.Duration;
import java.time.LocalTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.MVS_Sports.SportsManagement.entity.AttivitaSportiva;
import com.MVS_Sports.SportsManagement.entity.Evento;
import com.MVS_Sports.SportsManagement.entity.Recensione;
import com.MVS_Sports.SportsManagement.entity.TipoDiSport;
import com.MVS_Sports.SportsManagement.repository.AttivitaSportivaRepository;
import com.MVS_Sports.SportsManagement.repository.EventoRepository;
import com.MVS_Sports.SportsManagement.repository.RecensioneRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class AttivitaSportivaService {

	@Autowired
	AttivitaSportivaRepository attivitaSportivaRepositoryDao;
	
	@Autowired
	EventoRepository eventiRepositoryDao;
	
	@Autowired
	RecensioneRepository recensioniRepositoryDao;
	
	

	
//	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CREA ATTIVITA SPORTIVA >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	public AttivitaSportiva creaAttivitaSportiva(String nome, String descrizione, String indirizzo, LocalTime oa, LocalTime oc, TipoDiSport tds) {
		AttivitaSportiva as =new AttivitaSportiva();
		as.setNomeAttivita(nome);
		as.setDescrizioneAttivita(descrizione);
		as.setIndirizzo(indirizzo);
		as.setOrarioApertura(oa);
		as.setOrarioChiusura(oc);
		as.setTipoDiSport(tds);
		switch (tds) {
		case CALCETTO: {
			as.setNumeroMassimoPartecipanti(10l);
			as.setDurataEvento(Duration.parse("PT1H00M"));
			break;
		}
		case TENNIS_SINGOLO: {
			as.setNumeroMassimoPartecipanti(2l);
			as.setDurataEvento(Duration.parse("PT1H30M"));
			break;
		}
		case TENNIS_DOPPIO: {
			as.setNumeroMassimoPartecipanti(4l);
			as.setDurataEvento(Duration.parse("PT1H30M"));
			break;
		}
		case BEACH_TENNIS: {
			as.setNumeroMassimoPartecipanti(4l);
			as.setDurataEvento(Duration.parse("PT1H30M"));
			break;
		}
		case  BEACH_VOLLEY: {
			as.setNumeroMassimoPartecipanti(12l);
			as.setDurataEvento(Duration.parse("PT1H30M"));
			break;
		}
		case PALLAVOLO: {
			as.setNumeroMassimoPartecipanti(12l);
			as.setDurataEvento(Duration.parse("PT1H00M"));
			break;
		}
		
		case PADDLE: {
			as.setNumeroMassimoPartecipanti(4l);
			as.setDurataEvento(Duration.parse("PT1H30M"));
			break;
		}

			default:
				as.setNumeroMassimoPartecipanti(null);
	}
			as.setEventi((List<Evento>) eventiRepositoryDao.findAll());
			as.setRecensioni((List<Recensione>) recensioniRepositoryDao.findAll());
			attivitaSportivaRepositoryDao.save(as);
			return as;
	}
	
//	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< MODIFICA ATTIVITA SPORTIVA >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	public AttivitaSportiva updateAttivitaSportiva( AttivitaSportiva as) {
		if (!attivitaSportivaRepositoryDao.existsById(as.getId())) {
			throw new EntityNotFoundException("AttivitaSportiva not exists!!!");
		} else {
			attivitaSportivaRepositoryDao.save(as);
			return as;
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
	
	//	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CERCA ATTIVITA SPORTIVA PER PARTE DI NOME >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	public List<AttivitaSportiva> findByNomeAttivitaContains(String s){
		return attivitaSportivaRepositoryDao.findByNomeAttivitaContains(s);
	}
	public Page<AttivitaSportiva> findByNomeAttivitaContains(Pageable pag,String s){
		return attivitaSportivaRepositoryDao.findByNomeAttivitaContains(pag, s);
	}
	
	//	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CERCA ATTIVITA SPORTIVA PER PARTE DI TIPO DI SPORT >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	public List<AttivitaSportiva> findByTipoDiSportContains(String s){
		return attivitaSportivaRepositoryDao.findByNomeAttivitaContains(s);
	}
	public Page<AttivitaSportiva> findByTipoDiSportContains(Pageable pag,String s){
		return attivitaSportivaRepositoryDao.findByNomeAttivitaContains(pag, s);
	}
	
	//	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CERCA ATTIVITA SPORTIVA PER INDIRIZZO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	public List<AttivitaSportiva> findByIndirizzo(String s){
		return attivitaSportivaRepositoryDao.findByIndirizzo(s);
	}
	public Page<AttivitaSportiva> findByIndirizzo(Pageable pag,String s){
		return attivitaSportivaRepositoryDao.findByIndirizzo(pag, s);
	}
	
}
