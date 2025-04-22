import { configureStore } from "@reduxjs/toolkit";
import filterSliceReducer from "./filter/filtersSlice";
import contactsSlice from "./contacts/slice";
import authReducer from "./auth/slice";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistAuthReduser = persistReducer(
    {
        key: "user-token",
        storage,
        whitelist: ["token"],
    },
    authReducer
);

export const store = configureStore({
    reducer: {
        contacts: contactsSlice,
        filters: filterSliceReducer,
        auth: persistAuthReduser,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
export const persistor = persistStore(store);