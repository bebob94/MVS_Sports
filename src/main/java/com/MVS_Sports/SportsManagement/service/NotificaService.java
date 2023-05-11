package com.MVS_Sports.SportsManagement.service;

import java.util.List;

import org.springframework.beans.factory.ObjectProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.MVS_Sports.SportsManagement.entity.Notifica;
import com.MVS_Sports.SportsManagement.repository.NotificaRepository;

import jakarta.persistence.EntityNotFoundException;

@Service 
public class NotificaService {

	@Autowired
	NotificaRepository NotificaRepositoryDao;
	
	@Autowired
	@Qualifier("Notifica")
	private ObjectProvider<Notifica> NotificaProvider;
	
//	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< SALVA NOTIFICA >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	public void saveNotifica(Notifica n) {
		NotificaRepositoryDao.save(n);
	}
	
//	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CREA NOTIFICA >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	public void creaNotifica() {
		saveNotifica(NotificaProvider.getObject());
	}
	
//	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< MODIFICA NOTIFICA >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	public void updateNotifica( Notifica n) {
		if (!NotificaRepositoryDao.existsById(n.getId())) {
			throw new EntityNotFoundException("Notifica not exists!!!");
		} else {
			NotificaRepositoryDao.save(n);
		}
	}
	
//	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CERCA NOTIFICA PER ID>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	public Notifica findNotificaById(Long id) {
		if(!NotificaRepositoryDao.existsById(id)) {
			throw new EntityNotFoundException("Notifica not exists!!!");
		}else {
			return NotificaRepositoryDao.findById(id).get();
		}
	}

	
//	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CERCA TUTTE LE NOTIFICHE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	public List<Notifica> findAllNotifica() {
		return (List<Notifica>) NotificaRepositoryDao.findAll();
	}
	
	
//	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< RIMUOVI NOTIFICA>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	public void removeNotifica(Notifica n) {
		if (!NotificaRepositoryDao.existsById(n.getId())) {
			throw new EntityNotFoundException("Notifica not exists!!!");
		} else {
			NotificaRepositoryDao.delete(n);
		}
	}
	
	//	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< RIMUOVI NOTIFICA PER ID >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	public String removeNotificaById(Long id) {
		if (!NotificaRepositoryDao.existsById(id)) {
			throw new EntityNotFoundException("Notifica not exists!!!");
		} else {
			NotificaRepositoryDao.deleteById(id);
			return "Notifica eliminato";
		}
	}
	
//	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CERCA NOTIFICA PER PARTE DI TIPO NOTIFICA >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	public List<Notifica> findByNomeAttivitaContains(String s){
		return NotificaRepositoryDao.findByTipoNotificaContains(s);
	}
	public Page<Notifica> findByNomeAttivitaContains(Pageable pag,String s){
		return NotificaRepositoryDao.findByTipoNotificaContains(pag, s);
	}
	
	
}
