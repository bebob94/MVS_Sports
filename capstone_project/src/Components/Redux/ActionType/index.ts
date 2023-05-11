import { log } from "console";
import { User, register } from "../Interfaces";

export const USER = "USER";
let url = "http://localhost:8080/api/auth/register";

export const myfetch = async (params: User) => {
  try {
    let res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }).then((response) =>
      response.json().then((data) => {
        return data;
      })
    );
    return res;
  } catch (error) {}
};

export const registerFetch = async (body: register) => {
  let res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};
