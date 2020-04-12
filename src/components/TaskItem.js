import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateStatus, deleteTask, closeForm, openForm, editTask } from '../actions';

export class TaskItem extends Component {
  
  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id);
  }

  onDeleteTask = () => {
    this.props.onDeleteTask(this.props.task.id);
    this.props.onCloseForm();
  }

  onEditTask = () => {
    this.props.onOpenForm();
    this.props.onEditTask(this.props.task);   
  }

  render() {
    const { task, index } = this.props;
    return (
      <tr>
        <td> { index + 1 } </td>
        <td> { task.name } </td>
        <td className="text-center">
          <span 
            className={task.status ? "label label-danger status" : "label label-success status"}
            onClick={this.onUpdateStatus}
          >
            { task.status ? "Kích Hoạt" : "Ẩn" }
          </span>
        </td>
        <td className="text-center">
          <button 
            type="button" 
            className="btn btn-sm btn-warning"
            onClick={this.onEditTask}
          >
            <span className="fa fa-pencil mr-5"></span>Sửa
          </button> &nbsp;
          <button 
            type="button"
            className="btn btn-sm btn-danger"
            onClick={this.onDeleteTask}
          >
            <span className="fa fa-trash mr-5"></span>Xóa
          </button>
        </td>
      </tr>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  onUpdateStatus: updateStatus,
  onDeleteTask: deleteTask,
  onEditTask: editTask,
  onCloseForm: closeForm,
  onOpenForm: openForm,
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);