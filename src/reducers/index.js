import { combineReducers } from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import editTask from './editTask';
import filterTable from './filterTable';
import searchTable from './searchTable';
import sortTable from './sortTable';

const myReducer = combineReducers({
    tasks,
    isDisplayForm,
    editTask,
    filterTable,
    searchTable,
    sortTable,
});

export default myReducer;