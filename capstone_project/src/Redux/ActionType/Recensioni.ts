import { NewEvento, NewRecensione } from "../Interfaces";

const beboKey = process.env.REACT_APP_BEBO_SECRET_KEY;

export const ALL_RECENSIONI = "ALL_RECENSIONI";
export const RECENSIONE_BY_ID = "EVENTO_BY_ID";

export const fetchRecensioni = async () => {
  try {
    let res = await fetch(`http://localhost:8080/api/Recensione/all`, {
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

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< RICERCA RECENSIONE PER ID >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const RecensioneById = async (value: Number | undefined) => {
  try {
    let res = await fetch(`http://localhost:8080/api/Recensione/${value}`, {
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

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CREA RECENSIONE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const CreaRecensione = async (
  params: NewRecensione,
  idUser: number,
  idAttivita: number
) => {
  try {
    const res = await fetch(
      `http://localhost:8080/api/Recensione/add/${idUser}/${idAttivita}`,
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
