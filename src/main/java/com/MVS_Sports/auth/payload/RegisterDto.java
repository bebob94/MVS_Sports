package com.MVS_Sports.auth.payload;



import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class RegisterDto {
    private String name;
    private String surname;
    private String indirizzo;
    private String username;
    private String email;
    private String password;
    private Boolean owner;
}
