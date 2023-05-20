import { Evento, EventoChange, NewEvento } from "../Interfaces";

const beboKey = process.env.REACT_APP_BEBO_SECRET_KEY;

export const ALL_EVENTI = "ALL_EVENTI";
export const EVENTO_BY_ID = "EVENTO_BY_ID";

export const fetchEventi = async () => {
  try {
    let res = await fetch(`http://localhost:8080/api/Evento/all`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${beboKey}`,
      },
    });
    if (res.ok) {
      let data = await res.json();
      console.log(data);

      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< RICERCA EVENTO PER ID >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const eventoById = async (value: Number | undefined) => {
  try {
    let res = await fetch(`http://localhost:8080/api/Evento/${value}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${beboKey}`,
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
  idAttivita: number
) => {
  try {
    const res = await fetch(
      `http://localhost:8080/api/Evento/add/${idUser}/${idAttivita}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${beboKey}`,
        },
        body: JSON.stringify(params),
      }
    );
    console.log(res);

    let data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< MODIFICA EVENTO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const changeMyInfoEvento = async (params: EventoChange) => {
  const requestOptions = await fetch(`http://localhost:8080/api/Evento`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${beboKey}`,
    },
    body: JSON.stringify(params),
  });
};

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< ELIMINA EVENTO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const deleteEvento = async (params: number) => {
  const requestOptions = await fetch(
    `http://localhost:8080/api/Evento/${params}`,
    {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${beboKey}`,
      },
    }
  );
};
