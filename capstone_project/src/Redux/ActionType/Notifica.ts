export const ALL_NOTIFICHE = "ALL_NOTIFICHE";
export const NOTIFICA_BY_ID = "NOTIFICA_BY_ID";
export const CREA_NOTIFICA = "CREA_NOTIFICA";
export const RESET_NOTIFICHE = "RESET_NOTIFICHE";

export const resetNotificationsForUser = () => {
  return (dispatch, getState) => {
    const { user } = getState();
    const currentUser = user.user.username;

    dispatch({
      type: RESET_NOTIFICHE,
      payload: currentUser,
    });
  };
};

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
