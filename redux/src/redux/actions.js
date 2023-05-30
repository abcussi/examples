import {
    ADD_CASH,
    GET_CASH,
    ADD_CUSTOMER,
    GET_CUSTOMERS,
    ADD_MANY_CUSTOMERS,
    CHANGE_STYLE
} from './types'

export const addCashAction = (payload) => ({ type: ADD_CASH, payload })
export const getCashAction = (payload) => ({ type: GET_CASH, payload })
export const addCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload });
export const removeCustomerAction = (payload) => ({ type: GET_CUSTOMERS, payload })

export const addManyCustomerAction = (payload) => ({ type: ADD_MANY_CUSTOMERS, payload })
export const changeTheme = (payload) => ({ type: CHANGE_STYLE, payload })