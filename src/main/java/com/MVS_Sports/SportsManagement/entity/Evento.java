package com.MVS_Sports.SportsManagement.entity;

import java.time.LocalTime;
import java.util.List;

import com.MVS_Sports.auth.entity.User;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
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
    
    private LocalTime orarioInizio;
    private LocalTime orarioFine;
    private Long numeroPartecipanti;
    
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    private User userCreatore;
    
    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    private List<User> users;
    
    @ManyToOne
    private AttivitaSportiva attivitaSportiva;
    
}
