//just action types since strings are prone to duplicates.

//auth actions
export const LOGGED_IN = 'LOGGED_IN'
export const LOGGED_OUT = 'LOGGED_OUT'
//counter.
export const INCREASE_COUNTER = 'INCREASE_COUNTER'
export const DECREASE_COUNTER = 'DECREASE_COUNTER'
//customer
export const FETCH_CUSTOMERS = 'FETCH_CUSTOMERS'
export const FETCH_CUSTOMERS_SUCCESS = 'FETCH_CUSTOMERS_SUCCESS'
export const FETCH_CUSTOMERS_FAIL = 'FETCH_CUSTOMERS_FAIL'

//cats action types.
export const FETCH_CATS_SUCCESS = 'FETCH_CATS_SUCCESS'
export const FETCH_CATS_START = 'FETCH_CATS_START'
export const FETCH_CATS_ERROR = 'FETCH_CATS_ERROR'
export const ADOPT_CAT_SUCCESS = 'ADOPT_CAT_SUCCESS'
export const CHASE_CAT_SUCCESS = 'CHASE_CAT_SUCCESS'
export const UPDATE_CAT_SUCCESS = 'UPDATE_CAT_SUCCESS'