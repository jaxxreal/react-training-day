import ActionTypes from '../constants/ActionTypes';

const INITIAL_STATE = {
    value: 0,
};

const RouteReducer = (state = INITIAL_STATE,
                      action = { type: null, payload: null }) => {
    switch (action.type) {
        case ActionTypes.INCREMENT:
            return { ...state, value: ++state.value };
        case ActionTypes.DECREMENT:
            return { ...state, value: --state.value };
        default:
            return state;
    }
};

export default RouteReducer;
