package com.MVS_Sports.auth.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.MVS_Sports.auth.entity.ERole;
import com.MVS_Sports.auth.entity.Role;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    
	Optional<Role> findByRoleName(ERole roleName);

}
