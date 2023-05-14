export interface User {
  id: string;
  name: string;
  email: string;
  family_name: string;
  given_name: string;
}
export interface MyState {
  user: Registration;
}
export interface Roles {
  id: Number;
  roleName: String;
}
export interface Registration {
  id: String;
  username: String;
  accessToken: String;
  roles: Roles[];
}

export interface MyAttivitaSportiva {
  AllAttivitaSportive: AttivitaSportiva[];
  AttivitaSportiva: AttivitaSportiva;
}

export interface AttivitaSportiva {
  id: Number;
  nomeAttivita: String;
  descrizioneAttivita: String;
  indirizzo: String;
  orarioApertura: Date; // formato "hh:mm"
  orarioChiusura: Date; // formato "hh:mm"
  tipoDiSport: String;
  numeroMassimoPartecipanti: Number;
  durataEvento: String; // formato "hh:mm"
  eventi: Evento[];
  recensioni: Recensione[];
  user: {
    id: Number;
    name: String;
    surname: String;
    indirizzo: String;
    username: String;
    email: String;
    eventi: Evento[];
  };
}

export interface MyEvento {
  Evento: Evento[];
}
export interface Evento {
  id: 1;
  orarioInizio: Date; // formato "hh:mm"
  orarioFine: Date; // formato "hh:mm"
  numeroPartecipanti: Number;
  userCreatore: {
    id: Number;
    name: String;
    surname: String;
    indirizzo: String;
    username: String;
    email: String;
    eventi: Evento[];
  };
  attivitaSportiva: {
    id: Number;
    nomeAttivita: String;
    descrizioneAttivita: String;
    indirizzo: String;
    orarioApertura: Date; // formato "hh:mm"
    orarioChiusura: Date; // formato "hh:mm"
    tipoDiSport: String;
    numeroMassimoPartecipanti: Number;
    durataEvento: String; // formato "hh:mm"
    user: {
      id: Number;
      name: String;
      surname: String;
      indirizzo: String;
      username: String;
      email: String;
      eventi: Evento[];
    };
  };
  notifica: {
    id: Number;
    tipoNotifica: String;
    orarioNotifica: String; // formato "hh:mm"
    evento: {
      id: Number;
      orarioInizio: String; // formato "hh:mm"
      orarioFine: String; // formato "hh:mm"
      numeroPartecipanti: Number;
      userCreatore: {
        id: Number;
        name: String;
        surname: String;
        indirizzo: String;
        username: String;
        email: String;
      };
    };
  };
}

export interface MyRecensione {
  Recensione: Recensione[];
}
export interface Recensione {
  id: Number;
  valutazione: Number;
  testoRecensione: String;
  orarioRecensione: String; // formato "hh:mm"
  user: {
    id: Number;
    name: String;
    surname: String;
    indirizzo: String;
    username: String;
    email: String;
    eventi: Evento[];
  };
  attivitaSportiva: {
    id: Number;
    nomeAttivita: String;
    descrizioneAttivita: String;
    indirizzo: String;
    orarioApertura: Date; // formato "hh:mm"
    orarioChiusura: Date; // formato "hh:mm"
    tipoDiSport: String;
    numeroMassimoPartecipanti: Number;
    durataEvento: String; // formato "hh:mm"
    user: {
      id: Number;
      name: String;
      surname: String;
      indirizzo: String;
      username: String;
      email: String;
      eventi: Evento[];
    };
  };
}

export interface MyNotifica {
  Notifica: Notifica[];
}
export interface Notifica {
  id: Number;
  tipoNotifica: String;
  orarioNotifica: String; // formato "hh:mm"
  evento: {
    id: Number;
    orarioInizio: String; // formato "hh:mm"
    orarioFine: String; // formato "hh:mm"
    numeroPartecipanti: Number;
    userCreatore: {
      id: Number;
      name: String;
      surname: String;
      indirizzo: String;
      username: String;
      email: String;
    };
    attivitaSportiva: {
      id: Number;
      nomeAttivita: String;
      descrizioneAttivita: String;
      indirizzo: String;
      orarioApertura: Date; // formato "hh:mm"
      orarioChiusura: Date; // formato "hh:mm"
      tipoDiSport: String;
      numeroMassimoPartecipanti: Number;
      durataEvento: String; // formato "hh:mm"
      user: {
        id: Number;
        name: String;
        surname: String;
        indirizzo: String;
        username: String;
        email: String;
        eventi: Evento[];
      };
    };
  };
}
