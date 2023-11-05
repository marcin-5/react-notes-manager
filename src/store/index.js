import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer, authSlice } from "store/auth/auth-slice";
import { noteReducer } from "store/notes/notes-slice";

const rootReducer = combineReducers({
  noteSlice: noteReducer,
  authSlice: authReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: [authSlice],
};

const persistedReducers = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { persistor, store };
