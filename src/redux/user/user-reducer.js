import UserActionTypes from "./user.types"

const INITIAL_STATE = { // this is kind of like const [<state>, <setState>] = useState(null)
    currentUser: null,
    error: null
}

// this is kind of like setState()
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SIGN_IN_SUCCESS:
           return {
                ...state,
                currentUser: action.payload,
                error: null
            }
        case UserActionTypes.SIGN_IN_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}


export default userReducer