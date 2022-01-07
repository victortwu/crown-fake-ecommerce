import { UserActionTypes } from "./user.types"

const INITIAL_STATE = { // this is kind of like const [<state>, <setState>] = useState(null)
    currentUser: null
}

// this is kind of like setState()
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state
    }
}

export default userReducer