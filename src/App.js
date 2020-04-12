import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import TaskForm from './components/TaskForm';
import TaskControl from './components/TaskControl';
import TaskList from './components/TaskList';
import { toggleForm, editTask, openForm } from './actions';

export class App extends Component {

  onToggleForm = () => {
    if (this.props.editTask.id) {
      this.props.onOpenForm();
    } else {
      this.props.onToggleForm();
    }
    this.props.onClearTask({
      id: '',
      name: '',
      status: false
    });
  }

  render() {
    const { isDisplayForm } = this.props;

    return (
      <div className="container-fluid">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1> <hr />
        </div>

        <div className="row">
          <TaskForm />

          <div className={isDisplayForm ? "col-xs-12 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.onToggleForm}
            >
              <span className="fa fa-plus mr-5"></span>
              Thêm Công Việc
            </button>
            {/* Search - Sort */}
            <TaskControl />
            {/* List */}
            <TaskList />
          </div>

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isDisplayForm: state.isDisplayForm,
  editTask: state.editTask,
})

const mapDispatchToProps = {
  onToggleForm: toggleForm,
  onOpenForm: openForm,
  onClearTask: editTask,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);