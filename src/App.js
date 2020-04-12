import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import TaskForm from './components/TaskForm';
import TaskControl from './components/TaskControl';
import TaskList from './components/TaskList';
import { toggleForm, editTask, openForm } from './actions';

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filter: {
        name: '',
        status: -1
      },
      keyword: '',
      sort: {
        by: '',
        value: 1
      }
    }
  }

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

  onFilter = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus, 10);
    this.setState({
      filter: {
        name: filterName,
        status: filterStatus
      },
    });
  }

  onSearch = (keyword) => {
    this.setState({
      keyword: keyword,
    })
  };

  onSort = (sortBy, sortValue) => {
    this.setState({
      sort: {
        by: sortBy,
        value: sortValue
      }
    })
  }

  render() {
    // let {
    //   tasks,
    //   filter, 
    //   keyword, 
    //   sort 
    // } = this.state;

    const { isDisplayForm } = this.props;

    // tasks = tasks.filter((task) => {
    //   return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    // });

    // if (filter) {
    //   if (filter.name) {
    //     tasks = tasks.filter((task) => {
    //       return task.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1;
    //     })
    //   }
    //   if (filter.status !== -1) {
    //     tasks = tasks.filter((task) => {
    //       return task.status === (filter.status === 0 ? false : true);
    //     })
    //   }
    // };

    // if (sort.by==='name') {
    //   tasks.sort((a, b) => {
    //     if (a.name > b.name) return sort.value;
    //     else if (a.name < b.name) return -sort.value;
    //     else return 0;
    //   })
    // } else {
    //   tasks.sort((a, b) => {
    //     if (a.status > b.status) return sort.value;
    //     else if (a.status < b.status) return -sort.value;
    //     else return 0;
    //   })
    // }

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
            <TaskControl
              onSearch={this.onSearch}
              onSort={this.onSort}
            />
            {/* List */}
            <TaskList
              onFilter={this.onFilter}
            />
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