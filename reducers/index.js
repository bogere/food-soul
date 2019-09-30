// Imports: Dependencies
import { combineReducers } from 'redux';

// Imports: Reducers
import authReducer from './authReducer';
import counterReducer from './counterReducer';
import customerReducer from './customerReducer'

// Redux: Root Reducer
const rootReducer = combineReducers({
    authReducer: authReducer,
    counterReducer: counterReducer,
    customerReducer:customerReducer
})

export default rootReducer