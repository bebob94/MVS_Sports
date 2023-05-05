package com.MVS_Sports.SportsManagement.repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.MVS_Sports.SportsManagement.entity.MetodoPagamento;
import com.MVS_Sports.SportsManagement.entity.Pagamento;
import com.MVS_Sports.SportsManagement.entity.StatoPagamento;

public interface PagamentoRepository extends PagingAndSortingRepository<Pagamento, Long>,CrudRepository<Pagamento, Long>{

	Optional<Pagamento> findByMetodoPagamento( MetodoPagamento metodoPagamento);
	Optional<Pagamento> findByStatoPagamento( StatoPagamento statoPagamento);
	
	public List<Pagamento> findByMetodoPagamentoContains(MetodoPagamento metodoPagamento);
	public Page<Pagamento> findByMetodoPagamentoContains(Pageable page,MetodoPagamento metodoPagamento);
	
	public List<Pagamento> findByStatoPagamentoContains( StatoPagamento statoPagamento);
	public Page<Pagamento> findByStatoPagamentoContains(Pageable page, StatoPagamento statoPagamento);
}
