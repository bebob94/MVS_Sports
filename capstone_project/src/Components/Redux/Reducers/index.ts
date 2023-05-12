import { PayloadAction } from "@reduxjs/toolkit";
import { USER } from "../ActionType";
import { MyState, Registration } from "../Interfaces";

const initialState: MyState = {
  user: {} as Registration,
};

export const userReducer = (
  state = initialState,
  action: PayloadAction<Registration>
) => {
  switch (action.type) {
    case USER:
      return {
        user: action.payload as Registration,
      };
    default:
      return state;
  }
};
