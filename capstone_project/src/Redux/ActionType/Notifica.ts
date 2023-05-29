export const ALL_NOTIFICHE = "ALL_NOTIFICHE";
export const NOTIFICA_BY_ID = "NOTIFICA_BY_ID";

export const fetchNotifiche = async (token: String) => {
  try {
    let res = await fetch(`http://localhost:8080/api/Notifica/all`, {
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

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< RICERCA NOTIFICA PER ID >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const notificaById = async (
  value: Number | undefined,
  token: String
) => {
  try {
    let res = await fetch(`http://localhost:8080/api/Notifica/${value}`, {
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

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< ELIMINA NOTIFICHE PER ID UTENTE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const deleteNotifiche = async (params: number, token: String) => {
  const requestOptions = await fetch(
    `http://localhost:8080/api/Notifica/user/${params}`,
    {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
