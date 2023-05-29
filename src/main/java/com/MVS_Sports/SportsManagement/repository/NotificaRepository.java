package com.MVS_Sports.SportsManagement.repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.MVS_Sports.SportsManagement.entity.Notifica;
import com.MVS_Sports.SportsManagement.entity.TipoNotifica;

public interface NotificaRepository extends PagingAndSortingRepository<Notifica, Long>, JpaRepository<Notifica, Long>{

	Optional<Notifica> findByTipoNotifica( TipoNotifica TipoNotifica);
	Optional<Notifica> findByorarioNotifica( LocalDateTime orarioNotifica);
	
	public List<Notifica> findByTipoNotificaContains(String s);
	public Page<Notifica> findByTipoNotificaContains(Pageable page,String s);
	
	List<Notifica> findByUsersId(Long usersId);
}
