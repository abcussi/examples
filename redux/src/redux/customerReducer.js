import { ADD_CUSTOMER, GET_CUSTOMERS, ADD_MANY_CUSTOMERS } from "./types"

const defaultState = {
    customers: [],
}



export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MANY_CUSTOMERS:
            return { ...state, customers: [...state.customers, ...action.payload] }
        case ADD_CUSTOMER:
            return { ...state, customers: [...state.customers, action.payload] }
        case GET_CUSTOMERS:
            return { ...state, customers: state.customers.filter(customer => customer.id !== action.payload) }
        default:
            return state
    }
}

