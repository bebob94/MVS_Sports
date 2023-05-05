package com.MVS_Sports.SportsManagement.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.MVS_Sports.SportsManagement.service.RecensioneService;

@RestController
@RequestMapping("/Recensione")
@CrossOrigin(origins = "*", maxAge = 6000000)
public class RecensioneController {

	@Autowired RecensioneService recensioneService;
}
