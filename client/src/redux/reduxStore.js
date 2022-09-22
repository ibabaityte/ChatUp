import {persistReducer, persistStore} from "redux-persist";
import reducers from "./reducers";
import storage from 'redux-persist/lib/storage';
import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { createTransform } from 'redux-persist';
import JSOG from 'jsog';

// this lib helps with using cyclic data in a redux store
export const JSOGTransform = createTransform(
    (inboundState) => JSOG.encode(inboundState),
    (outboundState) => JSOG.decode(outboundState),
)

const persistConfig = {
    key: 'root',
    storage,
    transforms: [JSOGTransform]
}

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});

export let persistor = persistStore(store)