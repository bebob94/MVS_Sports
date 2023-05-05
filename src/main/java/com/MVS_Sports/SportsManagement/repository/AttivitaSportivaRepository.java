package com.MVS_Sports.SportsManagement.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.MVS_Sports.SportsManagement.entity.AttivitaSportiva;

public interface AttivitaSportivaRepository extends PagingAndSortingRepository<AttivitaSportiva, Long>,CrudRepository<AttivitaSportiva, Long>{

}
