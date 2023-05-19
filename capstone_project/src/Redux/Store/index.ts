import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/es/storage";
import { persistReducer, persistStore } from "redux-persist";
import { userReducer } from "../Reducers";
import { AttivitaSportivaReducer } from "../Reducers/AttivitaSportive";
import { EventoReducer } from "../Reducers/Evento";
import { UserReducer } from "../Reducers/User";
import { RecensioneReducer } from "../Reducers/Recensioni";
import { NotificaReducer } from "../Reducers/Notifica";

const reducers = combineReducers({
  user: userReducer,
  attivitaSportiva: AttivitaSportivaReducer,
  evento: EventoReducer,
  User: UserReducer,
  notifica: NotificaReducer,
  Recensione: RecensioneReducer,
});

const persistConfig = {
  key: "root1",
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
