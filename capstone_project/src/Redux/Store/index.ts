import { combineReducers, configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/es/storage";
import { persistReducer, persistStore } from "redux-persist";
import { userReducer } from "../Reducers";
import { AttivitaSportivaReducer } from "../Reducers/AttivitaSportive";
import { EventoReducer } from "../Reducers/Evento";
import { UserReducer } from "../Reducers/User";
import { NotificaReducer } from "../Reducers/Notifica";
import { RecensioneReducer } from "../Reducers/Recensioni";

const reducers = combineReducers({
  user: userReducer,
  attivitaSportiva: AttivitaSportivaReducer,
  evento: EventoReducer,
  User: UserReducer,
  Notifica: NotificaReducer,
  Recensione: RecensioneReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
