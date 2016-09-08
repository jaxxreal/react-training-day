import ActionType from '../constants/ActionTypes';

import {
    usersList as usersListApi,
} from '../resources/users';

export const increment = () => ({ type: ActionType.INCREMENT });
export const decrement = () => ({ type: ActionType.DECREMENT });

export const getUsers = () => dispatch => {
    usersListApi().then(response => {
        dispatch({
            type: ActionType.SET_USERS,
            payload: response.data,
        });
    });
};
