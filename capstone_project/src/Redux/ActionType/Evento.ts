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
    } else {
      console.log("error");
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
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
};
