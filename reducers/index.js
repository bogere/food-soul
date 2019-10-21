// Imports: Dependencies
import { combineReducers } from 'redux';

// Imports: Reducers
import authReducer from './authReducer';
import counterReducer from './counterReducer';
import customerReducer from './customerReducer'
import catReducer from './fetchCatReducer'
import orderReducer from './orderReducer'

// Redux: Root Reducer
const rootReducer = combineReducers({
    authReducer: authReducer,
    counterReducer: counterReducer,
    customerReducer:customerReducer,
     catReducer: catReducer,
     orderReducer: orderReducer
})

export default rootReducer