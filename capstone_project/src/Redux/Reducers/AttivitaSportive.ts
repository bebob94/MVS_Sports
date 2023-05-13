import { PayloadAction } from "@reduxjs/toolkit";
import { AttivitaSportiva, MyAttivitaSportiva } from "../Interfaces";
import {
  ATTIVITA_SPORTIVA_FETCH,
  ATTIVITA_SPORTIVA_FETCH_BY_INDIRIZZO_OR_NAME,
} from "../ActionType/AttivitaSportive";

const initialState: MyAttivitaSportiva = {
  AttivitaSportiva: [],
};

export const AttivitaSportivaReducer = (
  state = initialState,
  action: PayloadAction<AttivitaSportiva[]>
) => {
  switch (action.type) {
    case ATTIVITA_SPORTIVA_FETCH:
      return {
        AttivitaSportiva: action.payload as AttivitaSportiva[],
      };
    case ATTIVITA_SPORTIVA_FETCH_BY_INDIRIZZO_OR_NAME:
      return {
        AttivitaSportiva: action.payload as AttivitaSportiva[],
      };
  }
};
