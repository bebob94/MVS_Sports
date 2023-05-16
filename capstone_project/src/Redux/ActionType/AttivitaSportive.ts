import { AttivitaChange } from "../Interfaces";

const beboKey = process.env.REACT_APP_BEBO_SECRET_KEY;

export const ATTIVITA_SPORTIVA_FETCH = "ATTIVITA_SPORTIVA_FETCH";
export const ATTIVITA_SPORTIVA_FETCH_BY_NAME =
  "ATTIVITA_SPORTIVA_FETCH_BY_NAME";
export const ATTIVITA_SPORTIVA_FETCH_BY_ID = "ATTIVITA_SPORTIVA_FETCH_BY_ID";
export const ATTIVITA_SPORTIVA_FETCH_BY_TIPO_DI_SPORT =
  "ATTIVITA_SPORTIVA_FETCH_BY_TIPO_DI_SPORT";

export const fetchAttivita = async () => {
  try {
    let res = await fetch(`http://localhost:8080/api/AttivitaSportiva/all`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${beboKey}`,
      },
    });
    if (res.ok) {
      let data = await res.json();
      console.log(data);

      return data;
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
};

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< RICERCA ATTIVITA SPORTIVE PER INDIRIZZO O PER NOME>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export const searchByName = async (value: string | undefined) => {
  try {
    let res = await fetch(
      `http://localhost:8080/api/AttivitaSportiva/name/${value}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${beboKey}`,
        },
      }
    );
    if (res.ok) {
      let data = await res.json();
      return data;
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
};

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< RICERCA ATTIVITA SPORTIVE PER ID >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const searchById = async (value: Number | undefined) => {
  try {
    let res = await fetch(
      `http://localhost:8080/api/AttivitaSportiva/${value}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${beboKey}`,
        },
      }
    );
    if (res.ok) {
      let data = await res.json();
      return data;
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
};
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< RICERCA ATTIVITA SPORTIVE PER TIPO DI SPORT (enum) >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const searchByTipoDiSport = async (value: String | undefined) => {
  try {
    let res = await fetch(
      `http://localhost:8080/api/AttivitaSportiva/tipoDiSport/${value}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${beboKey}`,
        },
      }
    );
    if (res.ok) {
      let data = await res.json();
      return data;
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
};

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< MODIFICA ATTIVITA >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export const changeMyInfoAttivita = async (params: AttivitaChange) => {
  const requestOptions = await fetch(
    `http://localhost:8080/api/AttivitaSportiva`,
    {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${beboKey}`,
      },
      body: JSON.stringify(params),
    }
  );
};
