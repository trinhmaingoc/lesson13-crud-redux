import * as types from '../constants/ActionTypes';
const initialState = {
    id: '',
    name: '',
    status: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case types.EDIT_TASK:
        state = payload;
        return {...state}

    default:
        return state
    }
}