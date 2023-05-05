package com.MVS_Sports.SportsManagement.entity;

import java.time.LocalDateTime;

import com.MVS_Sports.auth.entity.User;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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
@Table(name = "payment")
public class Pagamento {

	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Long id;
	 
	 private LocalDateTime dataPagamento;
	 
	 @Enumerated(EnumType.STRING)
	 private MetodoPagamento metodoPagamento;
	 private Double totalePagamento;
	 
	 @Enumerated(EnumType.STRING)
	 private StatoPagamento statoPagamento;
	 
	 @ManyToOne
	 private User user;
	 
	 @ManyToOne
	 private AttivitaSportiva attivitaSportiva;
	 	
}
