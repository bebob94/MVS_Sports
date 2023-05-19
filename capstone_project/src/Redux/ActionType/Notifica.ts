const beboKey = process.env.REACT_APP_BEBO_SECRET_KEY;
export const ALL_NOTIFICHE = "ALL_NOTIFICHE";
export const NOTIFICA_BY_ID = "NOTIFICA_BY_ID";
export const CREA_NOTIFICA = "CREA_NOTIFICA";
export const RESET_NOTIFICHE = "RESET_NOTIFICHE";
export const fetchNotifiche = async () => {
  try {
    let res = await fetch(`http://localhost:8080/api/Notifica/all`, {
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

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< RICERCA NOTIFICA PER ID >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const notificaById = async (value: Number | undefined) => {
  try {
    let res = await fetch(`http://localhost:8080/api/Notifica/${value}`, {
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
