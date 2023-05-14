import { combineReducers, configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/es/storage";
import { persistReducer, persistStore } from "redux-persist";
import { userReducer } from "../Reducers";
import { AttivitaSportivaReducer } from "../Reducers/AttivitaSportive";

const reducers = combineReducers({
  user: userReducer,
  attivitaSportiva: AttivitaSportivaReducer,
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
