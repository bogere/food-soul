// Imports: Dependencies
import { combineReducers } from 'redux';

// Imports: Reducers
import authReducer from './authReducer';
import counterReducer from './counterReducer';
import customerReducer from './customerReducer'
import catReducer from './fetchCatReducer'

// Redux: Root Reducer
const rootReducer = combineReducers({
    authReducer: authReducer,
    counterReducer: counterReducer,
    customerReducer:customerReducer,
     catReducer: catReducer
})

export default rootReducer