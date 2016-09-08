import $http from 'axios';

export function usersList(params = {}) {
    const { _start = 0, _limit = 10 } = params;
    return $http({ url: `users?_start=${_start}&_limit=${_limit}` });
}

export function usersById(id) {
    return $http({ url: `users/${id}` });
}
