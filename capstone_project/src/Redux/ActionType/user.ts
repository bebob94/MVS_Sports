import { userChange } from "../Interfaces";
const beboKey = process.env.REACT_APP_BEBO_SECRET_KEY;

export const ALL_USERS = "ALL_USERS";
export const USER_BY_ID = "USER_BY_ID";
export const USER_BY_USERNAME = "USER_BY_USERNAME";

export const fetchUsers = async (token: String) => {
  try {
    let res = await fetch(`http://localhost:8080/User/all`, {
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

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< RICERCA USER PER ID >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const userById = async (value: Number | undefined, token: String) => {
  try {
    let res = await fetch(`http://localhost:8080/User/${value}`, {
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

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< RICERCA USER PER USERNAME>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const userByUsername = async (
  value: String | undefined,
  token: String
) => {
  try {
    let res = await fetch(`http://localhost:8080/User/username/${value}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
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

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< MODIFICA USER >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export const changeMyProfileInfo = async (
  params: userChange,
  token: String
) => {
  const requestOptions = await fetch(`http://localhost:8080/User`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(params),
  });
};
function RootState(a: unknown, b: unknown): boolean {
  throw new Error("Function not implemented.");
}
