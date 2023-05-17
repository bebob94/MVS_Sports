import { PayloadAction } from "@reduxjs/toolkit";
import { Evento, MyEvento } from "../Interfaces";
import { ALL_EVENTI, EVENTO_BY_ID } from "../ActionType/Evento";

const inizialState: MyEvento = {
  AllEventi: [],
  Evento: {} as Evento,
};

export const EventoReducer = (
  state = inizialState,
  action: PayloadAction<Evento[] | Evento>
) => {
  switch (action.type) {
    case ALL_EVENTI:
      return {
        ...state,
        AllEventi: action.payload as Evento[],
      };

    case EVENTO_BY_ID:
      return {
        ...state,
        Evento: action.payload as Evento,
      };
    default:
      return state;
  }
};
