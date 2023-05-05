package com.MVS_Sports.SportsManagement.entity;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name = "evento")
public class Evento {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private LocalDate orarioInizio;
    private LocalDate orarioFine;
    private Long numeroPartecipanti;
    
    @ManyToOne
    private AttivitaSportiva attivitaSportiva;
    
}
