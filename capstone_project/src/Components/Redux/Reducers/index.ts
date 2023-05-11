import { PayloadAction } from "@reduxjs/toolkit";
import { USER } from "../ActionType";
import { MyState, User } from "../Interfaces/index";

const initialState: MyState = {
  user: {} as User,
};
export const userReducer = (
  state = initialState,
  action: PayloadAction<User>
) => {
  switch (action.type) {
    case USER:
      return {
        user: action.payload as User,
      };
    default:
      return state;
  }
};
