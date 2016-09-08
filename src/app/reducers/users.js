import ActionTypes from '../constants/ActionTypes';

const INITIAL_STATE = {
    users: [],
};

const UsersReducer = (state = INITIAL_STATE,
                      action = { type: null, payload: null }) => {
    switch (action.type) {
        case ActionTypes.SET_USERS:
            return { ...state, users: action.payload };
        default:
            return state;
    }
};

export default UsersReducer;
