import { PayloadAction } from "@reduxjs/toolkit";
import {
  ALL_NOTIFICHE,
  CREA_NOTIFICA,
  NOTIFICA_BY_ID,
  RESET_NOTIFICHE,
} from "../ActionType/Notifica";
import { MyNotifica, Notifica } from "../Interfaces";

const inizialState: MyNotifica = {
  AllNotifiche: [],
  notification: {} as Notifica,
  NewNotifications: 0,
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
        notification: action.payload as Notifica,
      };
    case CREA_NOTIFICA:
      return {
        ...state,
        NewNotifications: state.NewNotifications + 1,
      };
    case RESET_NOTIFICHE:
      return {
        ...state,
        NewNotifications: action.payload,
      };
    default:
      return state;
  }
};
