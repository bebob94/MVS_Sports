package com.MVS_Sports.SportsManagement.service;

import java.util.List;

import org.springframework.beans.factory.ObjectProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.MVS_Sports.SportsManagement.entity.Pagamento;
import com.MVS_Sports.SportsManagement.repository.PagamentoRepository;

import jakarta.persistence.EntityNotFoundException;

@Service 
public class PagamentoService {

	@Autowired
	PagamentoRepository PagamentoRepositoryDao;
	
	@Autowired
	@Qualifier("Pagamento")
	private ObjectProvider<Pagamento> PagamentoProvider;
	
//	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< SALVA PAGAMENTO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	public void savePagamento(Pagamento p) {
		PagamentoRepositoryDao.save(p);
	}
	
//	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CREA PAGAMENTO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	public void creaPagamento() {
		savePagamento(PagamentoProvider.getObject());
	}
	
//	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< MODIFICA PAGAMENTO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	public void updateAttivitaSportiva( Pagamento p) {
		if (!PagamentoRepositoryDao.existsById(p.getId())) {
			throw new EntityNotFoundException("Pagamento not exists!!!");
		} else {
			PagamentoRepositoryDao.save(p);
		}
	}
	
//	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CERCA PAGAMENTO PER ID>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	public Pagamento findPagamentoById(Long id) {
		if(!PagamentoRepositoryDao.existsById(id)) {
			throw new EntityNotFoundException("Pagamento not exists!!!");
		}else {
			return PagamentoRepositoryDao.findById(id).get();
		}
	}

	
//	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CERCA TUTTI I PAGAMENTI >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	public List<Pagamento> findAllPagamento() {
		return (List<Pagamento>) PagamentoRepositoryDao.findAll();
	}
	
	
//	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< RIMUOVI PAGAMENTO>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	public void removePagamento(Pagamento p) {
		if (!PagamentoRepositoryDao.existsById(p.getId())) {
			throw new EntityNotFoundException("AttivitaSportiva not exists!!!");
		} else {
			PagamentoRepositoryDao.delete(p);
		}
	}
	
	//	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< RIMUOVI PAGAMENTO PER ID >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	public String removePagamentoById(Long id) {
		if (!PagamentoRepositoryDao.existsById(id)) {
			throw new EntityNotFoundException("Pagamento not exists!!!");
		} else {
			PagamentoRepositoryDao.deleteById(id);
			return "Pagamento eliminato";
		}
	}
}
