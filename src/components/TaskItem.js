import React, { Component } from 'react'

export class TaskItem extends Component {
  
  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id)
  }

  onDeleteItem = () => {
    this.props.onDeleteItem(this.props.task.id)
  }

  onUpdateItem = () => {
    this.props.onUpdateItem(this.props.task.id)
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
            onClick={this.onUpdateItem}
          >
            <span className="fa fa-pencil mr-5"></span>Sửa
          </button> &nbsp;
          <button 
            type="button"
            className="btn btn-sm btn-danger"
            onClick={this.onDeleteItem}
          >
            <span className="fa fa-trash mr-5"></span>Xóa
          </button>
        </td>
      </tr>
    )
  }
}

export default TaskItem
