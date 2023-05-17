import { PayloadAction } from "@reduxjs/toolkit";
import { MyRecensione, Recensione } from "../Interfaces";
import { ALL_RECENSIONI, RECENSIONE_BY_ID } from "../ActionType/Recensioni";

const inizialState: MyRecensione = {
  ALLRecensione: [],
  Recensione: {} as Recensione,
};

export const RecensioneReducer = (
  state = inizialState,
  action: PayloadAction<Recensione[] | Recensione>
) => {
  switch (action.type) {
    case ALL_RECENSIONI:
      return {
        ...state,
        ALLRecensione: action.payload as Recensione[],
      };

    case RECENSIONE_BY_ID:
      return {
        ...state,
        Recensione: action.payload as Recensione,
      };
    default:
      return state;
  }
};
