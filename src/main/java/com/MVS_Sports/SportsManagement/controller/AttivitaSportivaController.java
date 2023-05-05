package com.MVS_Sports.SportsManagement.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.MVS_Sports.SportsManagement.service.AttivitaSportivaService;

@RestController
@RequestMapping("/AttivitaSportiva")
@CrossOrigin(origins = "*", maxAge = 6000000)
public class AttivitaSportivaController {

	@Autowired AttivitaSportivaService attivitaSportivaService;
}
