import { EventoChange, NewEvento } from "../Interfaces";

export const ALL_EVENTI = "ALL_EVENTI";
export const EVENTO_BY_ID = "EVENTO_BY_ID";

export const fetchEventi = async (token: String) => {
  try {
    let res = await fetch(`http://localhost:8080/api/Evento/all`, {
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

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< RICERCA EVENTO PER ID >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const eventoById = async (value: Number | undefined, token: String) => {
  try {
    let res = await fetch(`http://localhost:8080/api/Evento/${value}`, {
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

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CREA EVENTO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export const CreaEvento = async (
  params: NewEvento,
  idUser: number,
  idAttivita: number,
  token: String
) => {
  try {
    const res = await fetch(
      `http://localhost:8080/api/Evento/add/${idUser}/${idAttivita}`,
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

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< MODIFICA EVENTO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const changeMyInfoEvento = async (
  params: EventoChange,
  token: String
) => {
  const requestOptions = await fetch(`http://localhost:8080/api/Evento`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(params),
  });
};

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< ELIMINA EVENTO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const deleteEvento = async (params: number, token: String) => {
  const requestOptions = await fetch(
    `http://localhost:8080/api/Evento/${params}`,
    {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
