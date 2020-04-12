import * as types from '../constants/ActionTypes';

const data = JSON.parse(localStorage.getItem('tasks'));
const initialState = data ? data : [];
let index = -1;

const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

const generateID =() => {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

const findIndex = (data, id) => {
    let result = -1;
    data.forEach((row, index) => {
      if (row.id === id) {
        result = index;
      }
    });
    return result;
  }

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case types.LIST_ALL:
            return [...state]

        case types.SAVE_TASK:
            const task = {
                id: payload.id,
                name: payload.name,
                status: (payload.status === 'true' | payload.status) ? true : false,
            };
            if (!task.id) {
                task.id = generateID();
                state.push(task);
            } else {
                index = findIndex(state, task.id);
                if (index !== -1) {
                    state[index] = task;
                };
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state]

        case types.UPDATE_STATUS:
            index = findIndex(state, payload);
            if (index !== -1) {
                state[index] = {
                    ...state[index],
                    status: !state[index].status,
                }
                localStorage.setItem('tasks', JSON.stringify(state));
            }
            return [...state]

        case types.DELETE_TASK:
            index = findIndex(state, payload);
            if (index !== -1) {
                state.splice(index, 1);
                localStorage.setItem('tasks', JSON.stringify(state));
            }
            return [...state];
        
        default:
            return state
    }
}