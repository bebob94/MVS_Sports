// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< REGISTRAZIONE E LOGIN >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export interface User {
  id: number;
  name: string;
  email: string;
  family_name: string;
  given_name: string;
}
export interface MyState {
  user: Registration;
}
export interface Roles {
  id: number;
  roleName: string;
}
export interface Registration {
  id: number;
  username: string;
  accessToken: string;
  roles: Roles[];
}

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< USER >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export interface MyUser {
  AllUsers: user[];
  user: user;
}
export interface user {
  id: number;
  name: string;
  surname: string;
  indirizzo: string;
  username: string;
  email: string;
  password: string;
  eventi: Evento[];
  pagamenti: [];
  notifiche: Notifica[];
  attivitaSportiva: AttivitaSportiva;
  recensioni: Recensione[];
  roles: Roles[];
  creditCard: null;
}
export interface userChange {
  id?: number;
  name: string;
  surname: string;
  indirizzo: string;
}

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< ATTIVITA SPORTIVA >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export interface MyAttivitaSportiva {
  AllAttivitaSportive: AttivitaSportiva[];
  AttivitaSportiva: AttivitaSportiva;
}
export interface AttivitaSportiva {
  id: number;
  nomeAttivita: string;
  descrizioneAttivita: string;
  indirizzo: string;
  orarioApertura: string; // formato "hh:mm"
  orarioChiusura: string; // formato "hh:mm"
  tipoDiSport: string;
  numeroMassimoPartecipanti: number;
  durataEvento: string; // formato "hh:mm"
  eventi: Evento[];
  recensioni: Recensione[];
  user: user;
  image: string;
}
export interface AttivitaChange {
  id?: number;
  nomeAttivita: string;
  descrizioneAttivita: string;
  indirizzo: string;
}
export interface NewAttivita {
  nomeAttivita: string;
  descrizioneAttivita: string;
  indirizzo: string;
  orarioApertura: string;
  orarioChiusura: string;
  tipoDiSport: string;
}

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< EVENTO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export interface MyEvento {
  AllEventi: Evento[];
  Evento: Evento;
}
export interface Evento {
  id: number;
  orarioInizio: Date; // formato "hh:mm"
  orarioFine: Date; // formato "hh:mm"
  numeroPartecipanti: number;
  userCreatore: user;
  attivitaSportiva: AttivitaSportiva;
  notifica: Notifica;
}
export interface NewEvento {
  numeroPartecipanti: number;
  orarioInizio: Date;
}
export interface EventoChange {
  id?: number;
  numeroPartecipanti: number;
}

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< RECENSIONE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export interface MyRecensione {
  ALLRecensione: Recensione[];
  Recensione: Recensione;
}
export interface Recensione {
  id: number;
  valutazione: number;
  testoRecensione: string;
  orarioRecensione: string; // formato "hh:mm"
  user: user;
  attivitaSportiva: AttivitaSportiva;
}
export interface NewRecensione {
  valutazione: number;
  testoRecensione: string;
}

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< NOTIFICA >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export interface MyNotifica {
  AllNotifiche: Notifica[];
  notification: Notifica;
}
export interface Notifica {
  id: number;
  tipoNotifica: string;
  orarioNotifica: string; // formato "hh:mm"
  evento: Evento;
  attivitaSportiva: AttivitaSportiva;
}
