//The state of the app lives as a single, immutable object within store.
// Imports: Dependencies
import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';

// Imports: Redux
import rootReducer from '../reducers/index';

//persist the global store so that data does not get lost when app refreshes.
// Middleware: Redux Persist Config
const persistConfig = {
    //Root
    key: 'root',
    // Storage Method (React Native)
    storage: AsyncStorage,
    // Whitelist (Save Specific Reducers)
    whitelist:[
        'authReducer'
    ],
    //// Blacklist (Don't Save Specific Reducers)
    blacklist:[
        'counterReducer'
    ]
}

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig,rootReducer)

// Redux: Store
const store = createStore(
    persistedReducer,
    applyMiddleware(...middleware),
)

// Middleware: Redux Persist Persister
let persistor = persistStore(store);
// Exports
export {
   store,
   persistor
}

