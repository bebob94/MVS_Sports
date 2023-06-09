package com.MVS_Sports.SportsManagement.entity;

import java.time.LocalDateTime;

import com.MVS_Sports.auth.entity.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
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
    
    private LocalDateTime orarioInizio;
    private LocalDateTime orarioFine;
    private Long numeroPartecipanti;
    
    @JsonIgnoreProperties({"eventi","users", "roles","password","pagamenti","notifiche","attivitaSportiva"})
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    private User userCreatore;
    
    
    @JsonIgnoreProperties({"eventi", "user"})
    @ManyToOne
    private AttivitaSportiva attivitaSportiva;
    
    @JsonIgnoreProperties({"evento", "users"})
 	@OneToOne(cascade = CascadeType.ALL)
 	private Notifica notifica;
    
}
