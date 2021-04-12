import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../actons/actionTypes'

const INITIAL_STATE = {
    isLoggedIn: false,
    name: null,
    email: null
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case USER_LOGGED_IN:
            return {
                ...state, 
                isLoggedIn: action.payload.isLoggedIn,
                name: action.payload.name, 
                email: action.payload.email,
            }
        case USER_LOGGED_OUT:
            return {
                ...state,
                name: null,
                email: null,
                isLoggedIn: false
            }
        default: 
            return state

    }
}

export default reducer;