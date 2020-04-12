import { combineReducers } from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import editTask from './editTask';

const myReducer = combineReducers({
    tasks,
    isDisplayForm,
    editTask,
});

export default myReducer;