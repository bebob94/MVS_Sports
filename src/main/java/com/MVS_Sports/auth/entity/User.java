package com.MVS_Sports.auth.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.MVS_Sports.SportsManagement.entity.AttivitaSportiva;
import com.MVS_Sports.SportsManagement.entity.Evento;
import com.MVS_Sports.SportsManagement.entity.Notifica;
import com.MVS_Sports.SportsManagement.entity.Pagamento;
import com.MVS_Sports.SportsManagement.entity.Recensione;


@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name = "users", uniqueConstraints = { @UniqueConstraint(columnNames = "username"),
		@UniqueConstraint(columnNames = "email") })
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String surname;
    private String indirizzo;
    @Column(nullable = false, unique = true)
    private String username;
    @Column(nullable = false, unique = true)
    private String email;
    @Column(nullable = false)
    private String password;
    
    private String CreditCard;
    
    @OneToMany(mappedBy = "userCreatore", fetch = FetchType.EAGER)
	private List<Evento> eventi;
    
    @OneToMany(mappedBy = "user",  fetch = FetchType.EAGER)
    private List <Pagamento> pagamenti;
   
    @OneToMany(mappedBy = "user", fetch = FetchType.EAGER)
	private List<Notifica> notifiche;
    
    @OneToOne
    private AttivitaSportiva attivitaSportive;
    
    @OneToMany(mappedBy = "user", fetch = FetchType.EAGER)
	private List<Recensione> recensioni;
    
    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinTable(name = "users_roles",
            joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "role_id", referencedColumnName = "id")
    )
    private Set<Role> roles = new HashSet<>();
}
