package com.MVS_Sports.auth.service;

import com.MVS_Sports.auth.payload.LoginDto;
import com.MVS_Sports.auth.payload.RegisterDto;

public interface AuthService {
    
	String login(LoginDto loginDto);
    String register(RegisterDto registerDto);
    
}
