package com.MVS_Sports.SportsManagement.repository;

import java.time.LocalDateTime;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.MVS_Sports.SportsManagement.entity.Recensione;

public interface RecensioneRepository extends PagingAndSortingRepository<Recensione, Long>, CrudRepository<Recensione, Long> {

	Optional<Recensione> findByValutazione( Integer valutazione);
	Optional<Recensione> findByOrarioRecensione( LocalDateTime orarioRecensione);
	
	
}
