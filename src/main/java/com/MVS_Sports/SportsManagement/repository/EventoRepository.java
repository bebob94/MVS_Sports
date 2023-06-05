package com.MVS_Sports.SportsManagement.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.MVS_Sports.SportsManagement.entity.Evento;

public interface EventoRepository extends PagingAndSortingRepository<Evento, Long>,CrudRepository<Evento, Long>{

}
