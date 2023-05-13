package com.MVS_Sports.SportsManagement.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.MVS_Sports.SportsManagement.entity.AttivitaSportiva;
import com.MVS_Sports.SportsManagement.entity.TipoDiSport;

public interface AttivitaSportivaRepository extends PagingAndSortingRepository<AttivitaSportiva, Long>,CrudRepository<AttivitaSportiva, Long>{

	Optional<AttivitaSportiva> findByNomeAttivita( String nomeAttivita);
	Optional<AttivitaSportiva> findByTipoDiSport( TipoDiSport tipoDiSport);
	
	public List<AttivitaSportiva> findByNomeAttivitaContains(String s);
	public Page<AttivitaSportiva> findByNomeAttivitaContains(Pageable page,String s);
	
	public List<AttivitaSportiva> findByTipoDiSport(String s);
	public Page<AttivitaSportiva> findByTipoDiSport(Pageable page,String s);
	
	public List<AttivitaSportiva> findByIndirizzoContains(String s);
	public Page<AttivitaSportiva> findByIndirizzoContains(Pageable page,String s);
	
	
}
