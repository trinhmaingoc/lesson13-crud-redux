import * as types from '../constants/ActionTypes';

export const listAll = (payload) => ({
    type: types.LIST_ALL,
    payload
})

export const saveTask = (payload) => ({
    type: types.SAVE_TASK,
    payload
})

export const toggleForm = () => ({
    type: types.TOGGLE_FORM
})

export const openForm = () => ({
    type: types.OPEN_FORM
})

export const closeForm = () => ({
    type: types.CLOSE_FORM
})

export const updateStatus = (payload) => ({
    type: types.UPDATE_STATUS,
    payload
})

export const deleteTask = (payload) => ({
    type: types.DELETE_TASK,
    payload
})

export const editTask = (payload) => ({
    type: types.EDIT_TASK,
    payload
})

export const filterTable = (payload) => ({
    type: types.FILTER_TABLE,
    payload
})

export const searchTable = (payload) => ({
    type: types.SEARCH_TABLE,
    payload
})

export const sortTable = (payload) => ({
    type: types.SORT_TABLE,
    payload
})
