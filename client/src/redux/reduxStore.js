import {persistReducer, persistStore} from "redux-persist";
import reducers from "./reducers";
import storage from 'redux-persist/lib/storage';
import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});

export let persistor = persistStore(store)