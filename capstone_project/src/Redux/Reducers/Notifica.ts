import { PayloadAction } from "@reduxjs/toolkit";
import { ALL_NOTIFICHE, NOTIFICA_BY_ID } from "../ActionType/Notifica";
import { MyNotifica, Notifica } from "../Interfaces";

const inizialState: MyNotifica = {
  AllNotifiche: [],
  Notifica: {} as Notifica,
};

export const NotificaReducer = (
  state = inizialState,
  action: PayloadAction<Notifica[] | Notifica>
) => {
  switch (action.type) {
    case ALL_NOTIFICHE:
      return {
        ...state,
        AllNotifiche: action.payload as Notifica[],
      };

    case NOTIFICA_BY_ID:
      return {
        ...state,
        Notifica: action.payload as Notifica,
      };
    default:
      return state;
  }
};
