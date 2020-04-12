import React, { Component } from 'react';
import { connect } from 'react-redux'
import TaskItem from './TaskItem';

export class TaskList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       filterName: '',
       filterStatus: -1
    }
  }

  onChange = (event) => {
    const target = event.target;
    const name = target.name;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    this.props.onFilter(
      name === "filterName" ? value : this.state.filterName,
      name === "filterStatus" ? value : this.state.filterStatus
    );
    this.setState({
      [name]: value,
    });
  }
  
  render() {
    const { tasks } = this.props;
    const { filterName, filterStatus } = this.state;
    const elmTasks = tasks.map((task, index) => (
      <TaskItem 
        key={index}
        task={task}
        index={index}
        onUpdateStatus={this.props.onUpdateStatus}
        onDeleteItem={this.props.onDeleteItem}
        onUpdateItem={this.props.onUpdateItem}
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
                    value={filterName}
                    name="filterName"
                    onChange={this.onChange}
                  />
                </td>
                <td>
                  <select
                    name="filterStatus"
                    className="form-control"
                    value={filterStatus}
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
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)