package com.MVS_Sports.SportsManagement.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.MVS_Sports.SportsManagement.entity.Notifica;

public interface NotificaRepository extends PagingAndSortingRepository<Notifica, Long>,CrudRepository<Notifica, Long>{

}
