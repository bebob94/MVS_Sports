import { User, Registration } from "../Interfaces/index";

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

export const registerFetch = async (body: Registration) => {
  let res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  console.log(res);
};
