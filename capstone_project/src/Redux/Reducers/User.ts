import { PayloadAction } from "@reduxjs/toolkit";
import { MyUser, user } from "../Interfaces";
import { ALL_USERS, USER_BY_ID, USER_BY_USERNAME } from "../ActionType/user";

const inizialState: MyUser = {
  AllUsers: [],
  user: {} as user,
};

export const UserReducer = (
  state = inizialState,
  action: PayloadAction<user[] | user>
) => {
  switch (action.type) {
    case ALL_USERS:
      return {
        ...state,
        AllUsers: action.payload as user[],
      };

    case USER_BY_ID:
      return {
        ...state,
        user: action.payload as user,
      };
    case USER_BY_USERNAME:
      return {
        ...state,
        user: action.payload as user,
      };
    default:
      return state;
  }
};
