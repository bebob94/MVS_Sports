package com.MVS_Sports.auth.runner;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.MVS_Sports.auth.entity.ERole;
import com.MVS_Sports.auth.entity.Role;
import com.MVS_Sports.auth.repository.RoleRepository;
import com.MVS_Sports.auth.repository.UserRepository;
import com.MVS_Sports.auth.service.AuthService;



@Component
public class AuthRunner implements ApplicationRunner {
	
	@Autowired RoleRepository roleRepository;
	@Autowired UserRepository userRepository;
	@Autowired PasswordEncoder passwordEncoder;
	@Autowired AuthService authService;
	
	private Set<Role> adminRole;
	private Set<Role> companyOwnerRole;
	private Set<Role> userRole;
	
	@Override
	public void run(ApplicationArguments args) throws Exception {
		System.out.println("Run...");
//		setRoleDefault();
		
	}
	
	private void setRoleDefault() {
		Role admin = new Role();
		admin.setRoleName(ERole.ROLE_ADMIN);
		roleRepository.save(admin);
		
		Role user = new Role();
		user.setRoleName(ERole.ROLE_USER);
		roleRepository.save(user);
		
		Role companyOwner = new Role();
		companyOwner.setRoleName(ERole.ROLE_COMPANY_OWNER);
		roleRepository.save(companyOwner);
		
		adminRole = new HashSet<Role>();
		adminRole.add(admin);
		adminRole.add(companyOwner);
		adminRole.add(user);
		
		companyOwnerRole = new HashSet<Role>();
		companyOwnerRole.add(companyOwner);
		companyOwnerRole.add(user);
		
		userRole = new HashSet<Role>();
		userRole.add(user);
	}

}
