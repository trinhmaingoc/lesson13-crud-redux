import * as types from '../constants/ActionTypes';

export const listAll = (payload) => ({
    type: types.LIST_ALL,
    payload
})

export const addTask = (payload) => ({
    type: types.ADD_TASK,
    payload
})
