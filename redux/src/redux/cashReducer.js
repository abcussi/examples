import { ADD_CASH, CHANGE_STYLE, GET_CASH } from "./types"

const defaultState = {
    cash: 5,
    theme: 'black'
}

export const cashReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CASH:
            return { ...state, cash: state.cash + action.payload }
        case GET_CASH:
            return { ...state, cash: state.cash - action.payload }
        case CHANGE_STYLE:
            return { ...state, theme: action.payload }
        default:
            return state
    }
}