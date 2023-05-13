const beboKey = process.env.REACT_APP_BEBO_SECRET_KEY;

export const ATTIVITA_SPORTIVA_FETCH = "ATTIVITA_SPORTIVA_FETCH";
export const ATTIVITA_SPORTIVA_FETCH_BY_INDIRIZZO_OR_NAME =
  "ATTIVITA_SPORTIVA_FETCH_BY_INDIRIZZO_OR_NAME";

export const fetchJobs = async () => {
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

export const searchByIndirizzoOrName = async (value: string | undefined) => {
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

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< RICERCA ATTIVITA SPORTIVE PER NOME >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
