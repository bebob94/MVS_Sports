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
  roleName: String;
}
export interface Registration {
  id: number;
  username: String;
  accessToken: String;
  roles: Roles[];
}

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< USER >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export interface MyUser {
  AllUsers: user[];
  user: user;
}

export interface user {
  id: number;
  name: String;
  surname: String;
  indirizzo: String;
  username: String;
  email: String;
  password: String;
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
  name: String;
  surname: String;
  indirizzo: String;
}

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< ATTIVITA SPORTIVA >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export interface MyAttivitaSportiva {
  AllAttivitaSportive: AttivitaSportiva[];
  AttivitaSportiva: AttivitaSportiva;
}

export interface AttivitaSportiva {
  id: number;
  nomeAttivita: String;
  descrizioneAttivita: String;
  indirizzo: String;
  orarioApertura: String; // formato "hh:mm"
  orarioChiusura: String; // formato "hh:mm"
  tipoDiSport: String;
  numeroMassimoPartecipanti: number;
  durataEvento: String; // formato "hh:mm"
  eventi: Evento[];
  recensioni: Recensione[];
  user: user;
}

export interface AttivitaChange {
  id?: number;
  nomeAttivita: String;
  descrizioneAttivita: String;
  indirizzo: String;
}

export interface NewAttivita {
  nomeAttivita: String;
  descrizioneAttivita: String;
  indirizzo: String;
  orarioApertura: String;
  orarioChiusura: String;
  tipoDiSport: String;
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
  testoRecensione: String;
  orarioRecensione: String; // formato "hh:mm"
  user: user;
  attivitaSportiva: AttivitaSportiva;
}

export interface NewRecensione {
  valutazione: number;
  testoRecensione: String;
}

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< NOTIFICA >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export interface MyNotifica {
  AllNotifiche: Notifica[];
  notification: Notifica;
  NewNotifications: number;
}
export interface Notifica {
  id: number;
  tipoNotifica: String;
  orarioNotifica: String; // formato "hh:mm"
  evento: Evento;
}
