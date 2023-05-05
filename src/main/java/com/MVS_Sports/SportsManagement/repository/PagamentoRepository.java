package com.MVS_Sports.SportsManagement.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.MVS_Sports.SportsManagement.entity.Pagamento;

public interface PagamentoRepository extends PagingAndSortingRepository<Pagamento, Long>,CrudRepository<Pagamento, Long>{

}
