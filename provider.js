// Imports: Dependencies
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

//import the App...
import App from './App'

// Imports: Redux Persist Persister
import {store, persistor} from './store/store'

// React Native: App
export default function Starter(){
    return (
        // Redux: Global Store
        <Provider store = {store}>
            <PersistGate loading = {null} persistor={persistor}>
              <App />
            </PersistGate>
        </Provider>
    )
}
