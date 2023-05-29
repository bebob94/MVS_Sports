import { AttivitaChange, NewAttivita } from "../Interfaces";
export const ATTIVITA_SPORTIVA_FETCH = "ATTIVITA_SPORTIVA_FETCH";
export const ATTIVITA_SPORTIVA_FETCH_BY_NAME =
  "ATTIVITA_SPORTIVA_FETCH_BY_NAME";
export const ATTIVITA_SPORTIVA_FETCH_BY_ID = "ATTIVITA_SPORTIVA_FETCH_BY_ID";
export const ATTIVITA_SPORTIVA_FETCH_BY_TIPO_DI_SPORT =
  "ATTIVITA_SPORTIVA_FETCH_BY_TIPO_DI_SPORT";

export const fetchAttivita = async (token: String) => {
  try {
    let res = await fetch(`http://localhost:8080/api/AttivitaSportiva/all`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.ok) {
      let data = await res.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< RICERCA ATTIVITA SPORTIVE PER INDIRIZZO O PER NOME>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const searchByName = async (
  value: string | undefined,
  token: String
) => {
  try {
    let res = await fetch(
      `http://localhost:8080/api/AttivitaSportiva/name/${value}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (res.ok) {
      let data = await res.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< RICERCA ATTIVITA SPORTIVE PER ID >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const searchById = async (value: Number | undefined, token: String) => {
  try {
    let res = await fetch(
      `http://localhost:8080/api/AttivitaSportiva/${value}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (res.ok) {
      let data = await res.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< RICERCA ATTIVITA SPORTIVE PER TIPO DI SPORT (enum) >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const searchByTipoDiSport = async (
  value: String | undefined,
  token: String
) => {
  try {
    let res = await fetch(
      `http://localhost:8080/api/AttivitaSportiva/tipoDiSport/${value}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (res.ok) {
      let data = await res.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< MODIFICA ATTIVITA >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export const changeMyInfoAttivita = async (
  params: AttivitaChange,
  token: String
) => {
  const requestOptions = await fetch(
    `http://localhost:8080/api/AttivitaSportiva`,
    {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(params),
    }
  );
};

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CREA ATTIVITA >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const CreaAttivita = async (
  params: NewAttivita,
  idUser: number,
  token: String
) => {
  try {
    const res = await fetch(
      `http://localhost:8080/api/AttivitaSportiva/add/${idUser}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(params),
      }
    );
  } catch (error) {
    console.log(error);
  }
};
