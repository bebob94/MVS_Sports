import { PayloadAction } from "@reduxjs/toolkit";
import { AttivitaSportiva, MyAttivitaSportiva } from "../Interfaces";
import {
  ATTIVITA_SPORTIVA_FETCH,
  ATTIVITA_SPORTIVA_FETCH_BY_ID,
  ATTIVITA_SPORTIVA_FETCH_BY_NAME,
  ATTIVITA_SPORTIVA_FETCH_BY_TIPO_DI_SPORT,
} from "../ActionType/AttivitaSportive";

const initialState: MyAttivitaSportiva = {
  AllAttivitaSportive: [],
  AttivitaSportiva: {} as AttivitaSportiva,
};

export const AttivitaSportivaReducer = (
  state = initialState,
  action: PayloadAction<AttivitaSportiva[] | AttivitaSportiva>
) => {
  switch (action.type) {
    case ATTIVITA_SPORTIVA_FETCH:
      return {
        ...state,
        AllAttivitaSportive: action.payload as AttivitaSportiva[],
      };
    case ATTIVITA_SPORTIVA_FETCH_BY_NAME:
      return {
        ...state,
        AllAttivitaSportive: action.payload as AttivitaSportiva[],
      };
    case ATTIVITA_SPORTIVA_FETCH_BY_TIPO_DI_SPORT:
      return {
        ...state,
        AllAttivitaSportive: action.payload as AttivitaSportiva[],
      };
    case ATTIVITA_SPORTIVA_FETCH_BY_ID:
      return {
        ...state,
        AttivitaSportiva: action.payload as AttivitaSportiva,
      };
    default:
      return state;
  }
};
