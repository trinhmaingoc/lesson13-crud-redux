import React, { Component } from 'react';
import { connect } from 'react-redux'
import TaskItem from './TaskItem';
import { filterTable } from '../actions';

export class TaskList extends Component {

  onChange = (event) => {
    const target = event.target;
    const name = target.name;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    this.props.onFilterTable({
      name: name === "filterName" ? value : this.state.filterName,
      status: name === "filterStatus" ? value : this.state.filterStatus
    });
    this.setState({
      [name]: value,
    });
  }

  render() {
    let { tasks, filterTable, keyword, sortTable } = this.props;

    if (filterTable.name) {
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(filterTable.name.toLowerCase()) !== -1;
      })
    }

    if (filterTable.status !== -1) {
      tasks = tasks.filter((task) => {
        return task.status === (filterTable.status === 0 ? false : true);
      })
    }

    if (keyword) {
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
      });
    }

    if (sortTable.by === 'name') {
      tasks.sort((a, b) => {
        if (a.name > b.name) return sortTable.value;
        else if (a.name < b.name) return -sortTable.value;
        else return 0;
      })
    };

    if (sortTable.by === 'status') {
      tasks.sort((a, b) => {
        if (a.status > b.status) return sortTable.value;
        else if (a.status < b.status) return -sortTable.value;
        else return 0;
      })
    }

    const elmTasks = tasks.map((task, index) => (
      <TaskItem
        key={index}
        task={task}
        index={index}
      />
    ));

    return (
      <div className="row mt-15 tasklist">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 table-responsive">
          <table className="table table-bordered table-hover text-nowrap">
            <thead>
              <tr>
                <th className="text-center">STT</th>
                <th className="text-center">Tên</th>
                <th className="text-center">Trạng Thái</th>
                <th className="text-center">Hành Động</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={filterTable.name}
                    name="filterName"
                    onChange={this.onChange}
                  />
                </td>
                <td>
                  <select
                    name="filterStatus"
                    className="form-control"
                    value={filterTable.status}
                    onChange={this.onChange}
                  >
                    <option value={-1}>Tất Cả</option>
                    <option value={0}>Ẩn</option>
                    <option value={1}>Kích Hoạt</option>
                  </select>
                </td>
                <td></td>
              </tr>
              {elmTasks}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  tasks: state.tasks,
  filterTable: state.filterTable,
  keyword: state.searchTable,
  sortTable: state.sortTable,
})

const mapDispatchToProps = {
  onFilterTable: filterTable,
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)