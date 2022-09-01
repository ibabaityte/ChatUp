import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from "react-redux";

import {store, persistor} from "./redux/reduxStore";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <App/>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);